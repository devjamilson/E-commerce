import React, {useState, useContext} from "react";


import { ContainerLogin, Input, BtnCriar, BtnEntrar, Window} from "./style/login";
import {Link, useNavigate} from "react-router-dom"
import api from "../service/Api";

import { UserContext } from '../../context/userContext'

export default function Login({setCadastroForm, fecharModal}){
    const [userData, setUserData] = useContext(UserContext)

    console.log(userData)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    async function loginHandler(e) {
        e.preventDefault()
        try {
            const userData = await api.get('users', {
                email,
                password
            })

            const userInfo = userData.data            

            setUserData(prevState => ({
                ...prevState, 
                isLogged: true,
                email: userInfo.email,
                name: userInfo.name,  
                _id: userInfo._id          
            }))
         
            history.push('/admin')
        } catch(err) {
            alert('Falha no login, tente novamente')
        }
    }

    return(
        <Window>
          <ContainerLogin>
            <div>
              <button onClick={fecharModal}>X</button>
            </div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
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