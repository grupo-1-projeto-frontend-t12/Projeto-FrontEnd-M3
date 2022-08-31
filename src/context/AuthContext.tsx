import { createContext, useState } from "react";
import { IAuthContext } from "../interface/IAuthContext";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IUser } from "../interface/IUser";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IPost } from "../interface/IPost";
import { ICustomizedState } from "../interface/ICustomizedState";
import { IDoctors } from "../interface/IDoctors";
import { AxiosError } from "axios";
import { IUserLogin } from "../interface/IUserLogin";
import api from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [doctorsList, setDoctorsList] = useState<IDoctors[]>([]);

  const [loading, setLoading] = useState(true);

  const [login, setLogin] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const SignIn = async (data: IUserLogin) => {
    console.log("CLOG DATA SIGNIN 33", data);
    try {
      const res = await api.post<IPost>("/login", data);

      const { user: userResponse, token } = res.data;

      setUser(userResponse);

      localStorage.setItem("@context-KenzieMed:token", token);

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

  return (
    <AuthContext.Provider
      value={{ user, login, setLogin, loading, SignIn, doctorsList }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
