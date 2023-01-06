import React from "react";
import {BiSearch} from "react-icons/bi"
import {HiShoppingCart} from "react-icons/hi"
import {BsPersonCircle} from "react-icons/bs"
import { Container, ControleSuperior, ContButtonPesquisar, ControleInferior, Carrinho, Login} from "./style/headerStyle";


export default function Header(){
    return(
        <>
            <Container>
                 <ControleSuperior>

                 </ControleSuperior>
                 <ControleInferior>
                    <ContButtonPesquisar>
                      <input type="text" placeholder="Informe o produto que deseja buscar..."/> 
                      <button>| categorias</button> 
                      <button type="submit"><BiSearch></BiSearch></button>
                    </ContButtonPesquisar>
                    <Carrinho>
                        <button>
                            <HiShoppingCart></HiShoppingCart>
                        </button>
                    </Carrinho>

                    <Login>
                        <button>
                            <span>Login</span>
                            <div>
                              <BsPersonCircle></BsPersonCircle>
                            </div>
                        </button>
                    </Login>
                 </ControleInferior>
            </Container>
        </>
    )
}