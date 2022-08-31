import { IDoctors } from "./IDoctors";
import { IUser } from "./IUser";
import { IUserLogin } from "./IUserLogin";

export interface IAuthContext {
  user: IUser;
  SignIn: (data: IUserLogin) => void; //ENTRARÁ A FUNÇÃO DE LOGIN VINDA DA API
  /* CreateNewConsult: (data: ITechs) => void; */ //ENTRARÁ A FUNÇÃO DE CADASTRAR NOVA CONSULTA
  /* DeleteConsult: (id: string) => void; */ //ENTRARÁ A FUNÇÃO DE DELETAR CONSULTA
  login: boolean;
  setLogin: (state: boolean) => void;
  loading: boolean;
  doctorsList: IDoctors[];
};