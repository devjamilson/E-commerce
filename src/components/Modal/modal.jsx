import React, {useState} from "react";
import Login from '../user/login'
import Cadastrar from '../user/cadastrar'

import {ContModal} from './style/modal'

export default function Modal({fecharModal}){

    const [logado, setLogado] = useState(true)

    const setLoginForm = () =>{
        setLogado(true)
    }

    const setCadastroForm = () =>{
        setLogado(false)
    }

    
    return(
       <ContModal >
         {logado ? <Login setCadastroForm={setCadastroForm} fecharModal={fecharModal}></Login> : <Cadastrar setLoginForm={setLoginForm} fecharModal={fecharModal}></Cadastrar>}
       </ContModal>
    )
}