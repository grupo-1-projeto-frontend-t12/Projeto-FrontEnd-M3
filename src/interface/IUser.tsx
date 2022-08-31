export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string,
    cpf: string;
    crm?: string;
    age: string;
    sex: string,
    address: string;
    type: string,
    especiality?: string;
  }