import React, {useState} from "react";
import axios from 'axios'

import { ContainerLogin, Input, BtnCriar, BtnEntrar, Window} from "./style/login";
import {Link} from "react-router-dom"

export default function Login({setCadastroForm, fecharModal}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  

    const sendLogin = (e) => {
       e.preventDefault()
       let data = {
            email: email,
            password: password,
       }
       console.log(data.email +" " + data.password)
    };
    return(
        <Window>
          <ContainerLogin>
            <div>
              <button onClick={fecharModal}>X</button>
            </div>
            <h1>Login</h1>
            <form onSubmit={sendLogin}>
                <Input type="text" placeholder="Infome o seu e-mail..." onChange = {(event) =>{setEmail(event.target.value);}} />
                <Input type="text"placeholder="Infome a sua senha..." onChange = {(event) =>{setPassword(event.target.value);}}/>
                <BtnEntrar type="submit" >Entrar</BtnEntrar>
                <h2>ou</h2>
                <Link onClick={setCadastroForm}><BtnCriar>Criar</BtnCriar></Link>
             </form>
          </ContainerLogin>
        </Window>
    )
}