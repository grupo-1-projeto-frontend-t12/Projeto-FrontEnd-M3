import { ReactNode } from "react";
import {  ContainerModalRegister } from "./style";


interface IModalProps {
  children: ReactNode;
}

const ModalRegister = ({ children }: IModalProps) => {
  return (
    <ContainerModalRegister>
      <div className="ModalBox">{children}</div>
    </ContainerModalRegister>
  );
};
export default ModalRegister;
