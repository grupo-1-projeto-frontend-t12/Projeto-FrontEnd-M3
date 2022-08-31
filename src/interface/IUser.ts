export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    CPF: string;
    CRM?: string;
    age: string;
    sex: string;
    address: string;
    contact: string;
    type: string;
    especiality?: string;
  }