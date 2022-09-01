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

  const location = useLocation();

  const navigate = useNavigate();

  const SignIn = async (data: IUserLogin) => {
    try {
      const res = await api.post<IPost>("/login", data);

      const { user: userResponse, token } = res.data;

      setUser(userResponse);

      localStorage.setItem("@context-KenzieMed:token", token);

      setLogin(true)

      const state = location.state as ICustomizedState;

      let toNavigate = "/home";

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
    api.post<IPost>("users", data)
    .then((response) => {
      console.log(`Register`, response);
        toast.success("Cadastro efetuado com sucesso");
        navigate("/login");
      })
      .catch((_) => toast.error("Ops, Algo deu errado"));
      console.log(data)
  };


  return (
    <AuthContext.Provider
      value={{ user, login, setLogin, loading, SignIn, onSubmitRegister, doctorsList, setDoctorsList, doctorSchedule, setDoctorSchedule }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;