import React, {createContext, useState} from "react";

export const UserContext = createContext()

export default function UserProvider(props){
    const [Logado, setLogado] = useState({
        Logado: false,
        message: 'Olá',
    })

    return(
        <UserContext.Provider value={[Logado, setLogado]}>
          {props.children}
        </UserContext.Provider>
    )
}

