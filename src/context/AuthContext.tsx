import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import Register from "../pages/Register/Register";
import { AxiosError } from "axios";


export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  login: boolean;
  setLogin: (state: boolean) => void;
  isOpenModal: boolean;
  setIsOpenModal: (value:boolean)=>void;
  onSubmitRegister: (data:IUser)=>void;

}
export interface IError {
  error: string;
  message: string;
}
export interface IUser{
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  CPF: string;
  age: string;
  sex: string;
  address: string;
  contact: string;
  type: string;
  speciality: string;
  }

  export interface IPost{
    user: IUser;
    token: string;
  }

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider ({ children }: IAuthProvider) {
  
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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
    value={{ 
      login, 
      setLogin,
      isOpenModal, 
      setIsOpenModal,
      onSubmitRegister,

       }}
       >

      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
