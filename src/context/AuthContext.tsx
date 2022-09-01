import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { ICustomizedState } from "../interface/ICustomizedState";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IAuthContext } from "../interface/IAuthContext";
import { AxiosError } from "axios";
import { IUserLogin } from "../interface/IUserLogin";
import { IDoctors } from "../interface/IDoctors";
import { IUser } from "../interface/IUser";
import { toast } from "react-toastify";
import { IPost } from "../interface/IPost";
import api from "../services/api";
import { IDoctorSchedule } from "../interface/IDoctorSchedule";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [doctorsList, setDoctorsList] = useState<IDoctors[]>([]);

  const [doctorSchedule, setDoctorSchedule] = useState<IDoctorSchedule[]>([]);

  const [loading, setLoading] = useState(true);

  const [login, setLogin] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

/*   useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-KenzieMed:token");
      
      
      if (token) {
        try {
          const user: IUser = JSON.parse(localStorage.getItem("@context-KenzieMed:user")!)
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get<IUser>(`/users/${user.id}`)//userid; //CONFERIR SE A ROTA É USER MESMO
          setUser(data);
        
        } catch (error) {
          console.log("LOG DO CATCH TRY TOKEN loadUser", error);
        }
      } else {
        navigate("/");
      }
      setLoading(false);
    }
    loadUser();
  }, []); */

  const SignIn = async (data: IUserLogin) => {
    try {
      const res = await api.post<IPost>("/login", data);
      const { user: userResponse } = res.data;
      const token = JSON.stringify(res.data.accessToken)
      
      setUser(userResponse);

      localStorage.setItem("@context-KenzieMed:userId", JSON.stringify(userResponse))
      localStorage.setItem("@context-KenzieMed:token", token);

      setLogin(true);

      const state = location.state as ICustomizedState;

      let toNavigate = "/dashboard";

      if (state) {
        toNavigate = state.from;
      }

      navigate(toNavigate, { replace: true });

      toast.success("Login efetuado com sucesso!", {
        theme: "colored",
      });
    } catch (error) {
      const err = error as AxiosError;
      toast.error("Erro ao efetuar Login!", {
        theme: "colored",
      });
      console.log("CON-LOG CATCH ERROR SignIn", err.message);
    }
  };

  const onSubmitRegister = (data:IUser) => {
    console.log(data)
    api.post<IPost>("/users", data)
      .then((response) => {
      console.log(`Register`, response);
        toast.success("Cadastro efetuado com sucesso");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Ops, Algo deu errado");
        console.log(error)
      })
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        setLogin,
        loading,
        setLoading,
        SignIn,
        onSubmitRegister,
        doctorsList,
        setDoctorsList,
        doctorSchedule,
        setDoctorSchedule,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
