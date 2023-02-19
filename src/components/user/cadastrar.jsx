import React, {useState} from "react";
import axios from 'axios'

import { Container, ContCadastrar, BtnJaTenho, BtnCriarConta} from "./style/cadastrar"
import {Link} from 'react-router-dom'

export default function Cadastrar({setLoginForm, fecharModal}){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
      axios.post("http://localhost:8080/users", {
        nome: nome,
        email: email,
        password: password,
      }).then(()=>{
         console.log("Deu tudo certo")
      }).catch((err)=>{
         console.log("Não deu certo devido ao seguinte erro: "+err)
      })
    };

    return(
        <Container>
          <ContCadastrar> 
            <div>
              <button onClick={fecharModal}>X</button>
            </div>
            <h1>Criar</h1>
            <form action="">
              <input type="text" placeholder="Informe o seu nome" onChange = {(event) =>{setNome(event.target.value);}}/>
             <input type="text" placeholder="Informe o seu e-mail"  onChange = {(event) =>{setEmail(event.target.value);}}/>
             <input type="text"  placeholder="Informe a sua senha" onChange = {(event) =>{setPassword(event.target.value);}}/>
             <BtnCriarConta type="submit" onClick={addUser}>Criar Conta</BtnCriarConta>
             <h2>Já tem?</h2>
             <Link onClick={setLoginForm}><BtnJaTenho>Login</BtnJaTenho></Link>
            </form>
             
          </ContCadastrar>
        </Container>
    )
}