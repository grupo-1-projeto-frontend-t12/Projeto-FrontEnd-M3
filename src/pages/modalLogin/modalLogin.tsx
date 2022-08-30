import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser, UserContext } from "../../context/authContext";
import { CotainerForm } from "./modalLoginCSS";


const schema = yup.object({
    email: yup.string().email().required("Email Obrigatório!"),
    password: yup
      .string()
      .min(8, "Min 6 Caracteres, 1 núm, 1 letra e um caracter especial!")
      .required(),
  });
  
  const Login = () => {
  
    /* const {SignIn} = useContext(UserContext); */ //AQUI ENTRARÁ A FUNÇÃO "SIGNIN" 
  
    const {register, handleSubmit, formState: { errors }} = useForm<IUser>({
      resolver: yupResolver(schema),
    });
  
    /* const navigate = useNavigate(); */ // USAR NO PUSH PRO CADASTRAR
  
    return (
      <>
          <CotainerForm /* onSubmit={handleSubmit(SignIn)} */>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Digite aqui seu E-Mail"
           {...register("email")} />
          <span>{errors.email?.message}</span>
  
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite aqui sua Senha"
          {...register("password")} />
          <span>{errors.password?.message}</span>
  
          <button className="btnEntrar" type="submit">
            Entrar
          </button>
  
          <p>Ainda não possui uma Conta ?</p>
          <button
          className="btnCadastrar"
          /* onClick={() => {
            navigate("/register");
          }} */
        >
          Cadastre-se
        </button>

        </CotainerForm>
      </>
    );
  };
  
  export default Login;