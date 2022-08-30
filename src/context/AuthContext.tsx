import { createContext, ReactNode, useState } from "react";

export interface IContextProvider {
  children: ReactNode;
}

export interface IProviderProps {
  login: boolean;
  setLogin: (state: boolean) => void;
}

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ({ children }: IContextProvider) => {
  const [login, setLogin] = useState(false);

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;