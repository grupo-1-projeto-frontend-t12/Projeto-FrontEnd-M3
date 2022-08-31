import { CotainerForm, Modal } from "./loginCSS";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../interface/IUserLogin";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";

const schema = yup.object().shape({
  email: yup.string().email("Email Invalido!").required("Email Obrigatório!"),
  password: yup.string().min(8, "Min 8 Caracteres!").required(),
});

const Login = () => {
  const { login } = useContext(AuthContext);

  const { SignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
  });

  const navigate = useNavigate();

  return (
    <>
      {!login && (
        <>
          <Header />
          <Carousel />
          <Footer />
          <Modal>
            <CotainerForm onSubmit={handleSubmit(SignIn)}>
              <h2>Login</h2>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Digite aqui seu E-Mail"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite aqui sua Senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button className="btnEntrar" type="submit">
                Entrar
              </button>

              <p>Ainda não possui uma conta ?</p>
              <button
                className="btnCadastrar"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Clique aqui para realizar cadastro!
              </button>
            </CotainerForm>
          </Modal>
        </>
      )}
    </>
  );
};

export default Login;