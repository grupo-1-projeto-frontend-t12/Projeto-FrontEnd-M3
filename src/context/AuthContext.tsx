import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { ICustomizedState } from "../interface/ICustomizedState";
import { IUserAppointment } from "../interface/IUserAppointment";
import { IDoctorSchedule } from "../interface/IDoctorSchedule";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IAuthContext } from "../interface/IAuthContext";
import { AxiosError } from "axios";
import { IUserLogin } from "../interface/IUserLogin";
import { IDoctors } from "../interface/IDoctors";
import { IUser } from "../interface/IUser";
import { toast } from "react-toastify";
import { IPost } from "../interface/IPost";
import api from "../services/api";
import iconerror from "../assets/img/logo/errorico.svg"
import sucessicon from "../assets/img/logo/sucessicon.svg"
import { IError } from "../interface/IError";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [doctorsList, setDoctorsList] = useState<IDoctors[]>([]);
  const [doctor, setDoctor] = useState<IDoctors>({} as IDoctors);
  const [doctorSchedule, setDoctorSchedule] = useState<IDoctorSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [itemFilter, setItemFilter] = useState<IDoctors[]>([]);
  const [inputFilter, setInputFilter] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [appointment, setAppointment] = useState<IUserAppointment[]>([] as IUserAppointment[]);

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("@context-KenzieMed:token")

  useEffect(() => {
    if (token) {
      setLogin(true)
    }
  }, [token])
  

  const SignIn = async (data: IUserLogin) => {
    try {
      const res = await api.post<IPost>("/login", data);
      const { user: userResponse } = res.data;
      const token = JSON.stringify(res.data.accessToken);

      setUser(userResponse);

      localStorage.setItem("@context-KenzieMed:user", JSON.stringify(userResponse));
      localStorage.setItem("@context-KenzieMed:token", token);

      setLogin(true);

      const state = location.state as ICustomizedState;

      let toNavigate = "/dashboard";

      if (state) {
        toNavigate = state.from;
      }

      navigate(toNavigate, { replace: true });

      toast.success("Login efetuado com sucesso!", {
        theme: "colored",
        icon: <img src={sucessicon} alt="icon sucess"/>
      });
    } catch (error) {
      const err = error as AxiosError;
      toast.error("Erro ao efetuar Login!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error"/>
      });
      console.log("CON-LOG CATCH ERROR SignIn", err.message);
    }
  };

  const onSubmitRegister = (data: IUser) => {
    api
      .post<IPost>("/users", data)
      .then((response) => {
        toast.success("Cadastro efetuado com sucesso", {
          theme: "colored",
          icon: <img src={sucessicon} alt="icon sucess"/>
        });
        navigate("/login");
      })
      .catch((error: AxiosError<IError>) => {
        toast.error("Ops, Algo deu errado", {
          theme: "colored",
          icon: <img src={iconerror} alt="icon error"/>
        });
        console.log(error.message);
      });
  };

  const filterDoctors = (inputFilter: string) => {
    const ArrayfilterDoctors = doctorsList.filter((elem) =>
      elem.speciality.toLowerCase().includes(inputFilter.toLowerCase())
    );

    if (itemFilter.length < 0) {
      setItemFilter(doctorsList);
    } else {
      setItemFilter(ArrayfilterDoctors);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        setLogin,
        loading,
        setLoading,
        SignIn,
        onSubmitRegister,
        doctorsList,
        setDoctorsList,
        doctorSchedule,
        setDoctorSchedule,
        itemFilter,
        filterDoctors,
        setItemFilter,
        inputFilter,
        setInputFilter,
        doctor,
        setDoctor,
        isOpenModal,
        setIsOpenModal,
        appointment,
        setAppointment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;