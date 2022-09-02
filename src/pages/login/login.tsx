import { CotainerForm, Modal } from "./loginCSS";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../interface/IUserLogin";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object().shape({
  email: yup.string().email("Email Invalido!").required("Email Obrigatório!"),
  password: yup.string().min(8, "Min 8 Caracteres!").required(),
});

const Login = () => {
  const { login } = useContext(AuthContext);

  const { SignIn } = useContext(AuthContext);
  const [isModal, setIsModal] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
  });

  async function goToHome() {
    setIsModal(false);
    await setTimeout(() => {
      navigate("/", { replace: true });
    }, 200);
  }

  const navigate = useNavigate();

  return (
    <>
      {!login && (
        <motion.div id="app__motion--page">
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
                <Modal>
                  <CotainerForm onSubmit={handleSubmit(SignIn)}>
                    <h2>Login</h2>
                    <button
                      className="btnClose"
                      type="button"
                      onClick={goToHome}
                    >
                      X
                    </button>
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
                      type="button"
                      className="btnCadastrar"
                      onClick={() => navigate("/register", { replace: true })}
                    >
                      Clique aqui para realizar cadastro!
                    </button>
                  </CotainerForm>
                </Modal>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default Login;