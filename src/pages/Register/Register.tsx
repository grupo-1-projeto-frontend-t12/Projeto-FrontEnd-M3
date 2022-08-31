import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ContainerRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import { IUser } from "../../interface/IUser";



const Register = () => {
  const navigate = useNavigate();
  const { onSubmitRegister } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(10, "Nome Invalido"),
    email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fora dos quesitos de validação"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup
      .string()
      .required("Campo obrigatório")
      .min(11, "CPF Invalido"),
    age: yup
      .string()
      .required("Campo obrigatório"),
    sex: yup
    .string()
    .required("Campo obrigatório"),
    address: yup
    .string()
    .required("Campo obrigatório"),
    contact: yup
    .string()
    .required("Campo obrigatório"),
    type: yup
    .string()
    .required("Campo obrigatório"),
    // speciality: yup
    // .string()
    // .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerRegister>
      <div className="Register">
        <div className="divHeader">
          <button onClick={() => navigate("/login")} className="btnReturn">
            X
          </button>
        </div>
        <span className="spanRegister">Cadastro</span>
        <form className="form" onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="type">Tipo de Cadastro</label>
          <select className="inputRegister" 
          id="type"
          {...register("type")}>
            <option value=""> Médico ou Paciente </option>
            <option value={"patient"}>Paciente</option>
            <option value={"doctor"}>Médico</option>
          </select>
          {errors.type?.message}
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            className="inputRegister"
            placeholder ="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="inputRegister"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="inputRegister"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message}
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            className="inputRegister"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message}
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            id="CPF"
            className="inputRegister"
            placeholder="Digite seu CPF"
            {...register("CPF")}
          />
          {errors.CPF?.message}
          <label htmlFor="age">Idade</label>
          <input
            type="text"
            id="age"
            className="inputRegister"
            placeholder="Qual sua Idade?"
            {...register("age")}
          />
          {errors.age?.message}
          <label htmlFor="sex">Sexo</label>
          <select className="inputRegister" 
          id="sex"
          {...register("sex")}>
            <option value=""> Sexo </option>
            <option value={"M"}>Masculino</option>
            <option value={"F"}>Femenino</option>
          </select>
          {errors.sex?.message}
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            className="inputRegister"
            placeholder="Digite seu endereço"
            {...register("address")}
          />
          {errors.address?.message}
          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            className="inputRegister"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message}
          {/* <label htmlFor="speciality">Especialidade Médica</label>
          <input
            type="text"
            id="speciality"
            className="inputRegister"
            placeholder="Especialidade Médica"
            {...register("speciality")}
          />
          {errors.speciality?.message} */}
          <button className="btnRegister" type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </ContainerRegister>
  );
};
export default Register;
