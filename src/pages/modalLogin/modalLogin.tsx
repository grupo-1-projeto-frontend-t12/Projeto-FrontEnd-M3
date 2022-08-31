import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { Modal, CotainerForm } from "./modalLoginCSS";
import { IUser } from "../../interface/IUser";


const schema = yup.object({
    email: yup.string().email().required("Email Obrigatório!"),
    password: yup
      .string()
      .min(8, "Min 6 Caracteres, 1 núm, 1 letra e um caracter especial!")
      .required(),
  });
  
  const Login = () => {
    const { login } = useContext(AuthContext)
  
    const {SignIn} = useContext(AuthContext); //AQUI ENTRARÁ A FUNÇÃO "SIGNIN" 
  
    const {register, handleSubmit, formState: { errors }} = useForm<IUser>({
      resolver: yupResolver(schema),
    });
  
    const navigate = useNavigate(); // USAR NO PUSH PRO CADASTRAR
  
    return (
      <>
      {login && 
        <Modal>
            <CotainerForm onSubmit={handleSubmit(SignIn)}>
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
        }
      </>
    );
  };
  
  export default Login;