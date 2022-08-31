import { createContext, useState } from "react";
import { IAuthContext } from "../interface/IAuthContext";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IUser } from "../interface/IUser";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IPost } from "../interface/IPost";
import { ICustomizedState } from "../interface/ICustomizedState";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const [ doctorsList , setDoctorsList ] = useState([]);

    const [loading, setLoading] = useState(true);

    const [ login, setLogin ] = useState(false);

    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const SignIn = async (data: IUser) => {
        console.log(data)
        try {
          const res = await api.post<IPost>("/sessions", data);
    
          const { user: userResponse, token } = res.data;
    
          setUser(userResponse);
    
          localStorage.setItem("@context-KenzieHub:token", token);
    
          const state = location.state as ICustomizedState;
    
          let toNavigate = "/home";
    
          if (state) {
            toNavigate = state.from;
          }
    
          navigate(toNavigate, { replace: true });
    
          toast.success("Login efetuado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } catch (error) {
          toast.error("Erro ao efetuar Login!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("CON-LOG CATCH ERROR SignIn", error);
        }
      };

    return (
        <AuthContext.Provider value={{user, login, setLogin, loading, SignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;