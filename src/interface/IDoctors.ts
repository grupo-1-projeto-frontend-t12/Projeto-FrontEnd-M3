import { IDoctorSchedule } from "./IDoctorSchedule";

export interface IDoctors{
    email: string;
    name: string;
    age: string;
    sex: string;
    type: string
    CRM: string;
    address: string;
    speciality: string;
    schedule: IDoctorSchedule[];
    img: string;
};