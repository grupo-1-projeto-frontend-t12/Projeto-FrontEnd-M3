import { IDoctors } from "./IDoctors";
import { IDoctorSchedule } from "./IDoctorSchedule";
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
  setLoading: (state: boolean) => void;
  doctorsList: IDoctors[];
  setDoctorsList: (state: IDoctors[]) => void;
  doctorSchedule: IDoctorSchedule[];
  setDoctorSchedule: (state: IDoctorSchedule[]) => void;
  onSubmitRegister: (data: IUser) => void;
};
