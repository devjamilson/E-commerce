import React from "react";

import { Container, Input, BtnCriar, BtnEntrar, Window} from "./style/login";

export default function Login(){
    return(
        <Window>
          <Container>
            <h1>Login</h1>
             <Input type="text" placeholder="Infome o seu e-mail..." />
             <Input type="text"placeholder="Infome a sua senha..." />
             <BtnEntrar>Entrar</BtnEntrar>
             <h2>ou</h2>
             <BtnCriar>Criar</BtnCriar>
          </Container>
        </Window>
    )
}