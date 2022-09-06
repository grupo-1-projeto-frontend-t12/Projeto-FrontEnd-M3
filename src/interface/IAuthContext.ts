import { Dispatch, SetStateAction } from "react";
import { IDoctors } from "./IDoctors";
import { IDoctorSchedule } from "./IDoctorSchedule";
import { IUser } from "./IUser";
import { IUserAppointment } from "./IUserAppointment";
import { IUserLogin } from "./IUserLogin";

export interface IAuthContext {
  user: IUser;
  SignIn: (data: IUserLogin) => void;
  login: boolean;
  setLogin: (state: boolean) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
  doctorsList: IDoctors[];
  setDoctorsList: (state: IDoctors[]) => void;
  doctorSchedule: IDoctorSchedule[];
  setDoctorSchedule: (state: IDoctorSchedule[]) => void;
  onSubmitRegister: (data: IUser) => void;
  isOpenModal: boolean;
  setIsOpenModal: (state: boolean) => void;
  doctor: IDoctors;
  setDoctor: (state: IDoctors) => void;
  setItemFilter: (state: IDoctors[]) => void;
  setInputFilter: (state: string) => void;
  filterDoctors: (state: string) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  inputFilter: string;
  itemFilter: IDoctors[];
  appointment: IUserAppointment[];
  setAppointment: Dispatch<SetStateAction<IUserAppointment[]>>;
}
