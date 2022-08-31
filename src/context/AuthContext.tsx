import { createContext, ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string,
    cpf: string;
    crm?: string;
    age: number;
    sex: string,
    address: string;
    type: string,
    especiality?: string;
  }

  export interface IAuthContext {
      user: IUser;
      /* SignIn: (data: IUser) => void; */                     //ENTRARÁ A FUNÇÃO DE LOGIN VINDA DA API
      /* CreateNewConsult: (data: ITechs) => void; */          //ENTRARÁ A FUNÇÃO DE CADASTRAR NOVA CONSULTA
      /* DeleteConsult: (id: string) => void; */               //ENTRARÁ A FUNÇÃO DE DELETAR CONSULTA
      /* ModifyTech: (data: ITechs, id: string) => void; */    //ENTRARÁ A FUNÇÃO DE MODIFICAR A CONSULTA
      login: boolean;
      setLogin: (state: boolean) => void;
      loading: boolean;
  }

export interface IAuthProvider { 
    children: ReactNode; 
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const [ doctorsList , setDoctorsList ] = useState([]);

    const [loading, setLoading] = useState(true);

    const [ login, setLogin ] = useState(false);

    const [ isOpenModal, setIsOpenModal ] = useState(false);

   /*  const location = useLocation(); */

   /*  const navigate = useNavigate(); */

    return (
        <AuthContext.Provider value={{user, login, setLogin, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;