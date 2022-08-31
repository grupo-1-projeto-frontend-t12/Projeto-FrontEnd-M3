import { IDoctorSchedule } from "./IDoctorSchedule";

export interface IDoctors{
    email: string,
    name: string,
    age: number,
    sex: string,
    type: string
    CRM: string,
    address: string,
    speciality: string,
    schedules: IDoctorSchedule[],
    img: string
}