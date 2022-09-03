import { EditUserDiv } from "./formEditUserStyles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IEditProfile } from "../../interface/IEditProfile";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const FormEditUser = () => {
  const { EditUserProfile } = useContext(AuthContext);
  const loggedUser: IEditProfile = JSON.parse(
    localStorage.getItem("@context-KenzieMed:user")!
  );

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Nome obrigatório")
      .min(10, "Nome Invalido"),
    email: yup
      .string()
      .trim()
      .required("Email obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .trim()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial($*&@#)"
      ),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup
      .string()
      .trim()
      .required("Campo obrigatório")
      .min(11, "CPF Invalido"),
    age: yup.string().trim().required("Campo obrigatório"),
    sex: yup.string().trim().required("Campo obrigatório"),
    address: yup.string().trim().required("Campo obrigatório"),
    contact: yup.string().trim().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditProfile>({
    resolver: yupResolver(formSchema),
  });

  return (
    <EditUserDiv>
      <span className="spanRegister">Editar Perfil</span>
      <form className="form" onSubmit={handleSubmit(EditUserProfile)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          className="inputRegister"
          placeholder={`${loggedUser.name}`}
          {...register("name")}
        />
        <p className="errorRegister">{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="inputRegister"
          placeholder={`${loggedUser.email}`}
          {...register("email")}
        />
        <p className="errorRegister">{errors.email?.message}</p>
        <label htmlFor="password">Nova Senha</label>
        <input
          type="password"
          id="password"
          className="inputRegister"
          placeholder="Digite aqui sua nova senha"
          {...register("password")}
        />
        <p className="errorRegister">{errors.password?.message}</p>
        <label htmlFor="confirmPassword">Confirmar nova Senha</label>
        <input
          type="password"
          id="confirmPassword"
          className="inputRegister"
          placeholder="Digite novamente sua senha"
        />
        <p className="errorRegister">{errors.confirmPassword?.message}</p>
        <label htmlFor="CPF">CPF</label>
        <input
          type="text"
          id="CPF"
          className="inputRegister"
          placeholder={`${loggedUser.CPF}`}
          {...register("CPF")}
        />
        <p className="errorRegister">{errors.CPF?.message}</p>
        <label htmlFor="age">Idade</label>
        <input
          type="text"
          id="age"
          className="inputRegister"
          placeholder={`${loggedUser.age}`}
          {...register("age")}
        />
        <p className="errorRegister">{errors.age?.message}</p>
        <label htmlFor="sex">Sexo</label>
        <select
          className="inputRegister"
          id="sex"
          defaultValue={`${loggedUser.sex}`}
          {...register("sex")}
        >
          <option value="" disabled>
            Sexo
          </option>
          <option value={"M"}>Masculino</option>
          <option value={"F"}>Femenino</option>
        </select>
        <p className="errorRegister">{errors.sex?.message}</p>
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          id="address"
          className="inputRegister"
          placeholder={`${loggedUser.address}`}
          {...register("address")}
        />
        <p className="errorRegister">{errors.address?.message}</p>
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          className="inputRegister"
          placeholder={`${loggedUser.contact}`}
          {...register("contact")}
        />
        <p className="errorRegister">{errors.contact?.message}</p>
        <button className="btnRegister" type="submit">
          Salvar
        </button>
      </form>
    </EditUserDiv>
  );
};
export default FormEditUser;