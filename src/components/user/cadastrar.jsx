import React, {useState} from "react";
import axios from 'axios'

import { Container, ContCadastrar } from "./style/cadastrar"


export default function Cadastrar(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
      axios.post("http://localhost:8080/auth/cadastrar", {
        nome: nome,
        email: email,
        password: password,
      });
    };

    return(
        <Container>
          <ContCadastrar>
            <h1>Criar conta</h1>
             <input type="text" placeholder="Informe o seu nome" onChange = {(event) =>{setNome(event.target.value);}}/>
             <input type="text" placeholder="Informe o seu e-mail"  onChange = {(event) =>{setEmail(event.target.value);}}/>
             <input type="text"  placeholder="Informe a sua senha" onChange = {(event) =>{setPassword(event.target.value);}}/>
             <button type="submit" onClick={addUser}>Criar Conta</button>
          </ContCadastrar>
        </Container>
    )
}