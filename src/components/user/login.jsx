import React, {useState} from "react";
import axios from 'axios'

import { Container, Input, BtnCriar, BtnEntrar, Window} from "./style/login";
import {Link} from "react-router-dom"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
      axios.post("http://localhost:8080/auth/authenticate", {
        email: email,
        password: password,
      });
    };
    return(
        <Window>
          <Container>
            <h1>Login</h1>
             <Input type="text" placeholder="Infome o seu e-mail..." onChange = {(event) =>{setEmail(event.target.value);}} />
             <Input type="text"placeholder="Infome a sua senha..." onChange = {(event) =>{setPassword(event.target.value);}}/>
             <BtnEntrar onClick={addUser}>Entrar</BtnEntrar>
             <h2>ou</h2>
             <BtnCriar><Link to="/cadastrar">Criar</Link></BtnCriar>
          </Container>
        </Window>
    )
}