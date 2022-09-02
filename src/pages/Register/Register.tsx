import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { IUser } from "../../interface/IUser";
import { ContainerRegister } from "./registerCSS";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import { motion, AnimatePresence } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();
  const { onSubmitRegister } = useContext(AuthContext);
  const [isModal, setIsModal] = useState(true);
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").min(10, "Nome Invalido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial($*&@#)"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup.string().required("Campo obrigatório").min(11, "CPF Invalido"),
    age: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    //type: yup.string().required("Campo obrigatório"),
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

  async function goToLogin() {
    setIsModal(false);
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 200);
  }

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
      <AnimatePresence>
        {isModal && (
          <motion.div
            id="app__motion--modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5 }}
          >
            <ContainerRegister>
              <div className="register">
                <div className="divHeader">
                  <button onClick={goToLogin} className="btnReturn">
                    X
                  </button>
                </div>
                <span className="spanRegister">Cadastro</span>
                <form
                  className="form"
                  onSubmit={handleSubmit(onSubmitRegister)}
                >
                  {/* <label htmlFor="type">Tipo de Cadastro</label>
          <select className="inputRegister" 
          id="type"
          {...register("type")}>
            <option value=""> Médico ou Paciente </option>
            <option value={"patient"}>Paciente</option>
            <option value={"doctor"}>Médico</option>
          </select>
          {errors.type?.message} */}
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="inputRegister"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                  />
                  <p className="errorRegister">{errors.name?.message}</p>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="inputRegister"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                  />
                  <p className="errorRegister">{errors.email?.message}</p>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    className="inputRegister"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                  />
                  <p className="errorRegister">{errors.password?.message}</p>
                  <label htmlFor="confirmPassword">Confirmar Senha</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="inputRegister"
                    placeholder="Digite novamente sua senha"
                    {...register("confirmPassword")}
                  />
                  <p className="errorRegister">
                    {errors.confirmPassword?.message}
                  </p>
                  <label htmlFor="CPF">CPF</label>
                  <input
                    type="text"
                    id="CPF"
                    className="inputRegister"
                    placeholder="Digite seu CPF"
                    {...register("CPF")}
                  />
                  <p className="errorRegister">{errors.CPF?.message}</p>
                  <label htmlFor="age">Idade</label>
                  <input
                    type="text"
                    id="age"
                    className="inputRegister"
                    placeholder="Qual sua Idade?"
                    {...register("age")}
                  />
                  <p className="errorRegister">{errors.age?.message}</p>
                  <label htmlFor="sex">Sexo</label>
                  <select
                    className="inputRegister"
                    id="sex"
                    {...register("sex")}
                  >
                    <option value=""> Sexo </option>
                    <option value={"M"}>Masculino</option>
                    <option value={"F"}>Femenino</option>
                  </select>
                  <p className="errorRegister">{errors.sex?.message}</p>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    className="inputRegister"
                    placeholder="Digite seu endereço"
                    {...register("address")}
                  />
                  <p className="errorRegister">{errors.address?.message}</p>
                  <label htmlFor="contact">Contato</label>
                  <input
                    type="text"
                    id="contact"
                    className="inputRegister"
                    placeholder="Opção de contato"
                    {...register("contact")}
                  />
                  <p className="errorRegister">{errors.contact?.message}</p>
                  {/* <label htmlFor="speciality">Especialidade Médica</label>
          <input
            type="text"
            id="speciality"
            className="inputRegister"
            placeholder="Especialidade Médica"
            {...register("speciality")}
          />
          {errors.speciality?.message} */}
                  <button className="btnRegister" type="submit">
                    Cadastrar
                  </button>
                </form>
              </div>
            </ContainerRegister>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Register;
