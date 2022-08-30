import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"


export interface IContextProvider { 
    children: ReactNode; 
}

export interface IProviderProps {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ( { children }: IContextProvider ) => {

    const [ login, setLogin ] = useState(false);


    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext;