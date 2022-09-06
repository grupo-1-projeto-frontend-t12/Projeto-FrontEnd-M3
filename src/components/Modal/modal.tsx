import { ModalWrapper } from "./modalCSS";
import { IAuthProvider } from "../../interface/IAuthProvider";

function Modal({ children }: IAuthProvider) {
  return <ModalWrapper>{children}</ModalWrapper>;
}

export { Modal };
