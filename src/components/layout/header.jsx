import React from "react";
import {BiSearch} from "react-icons/bi"
import {HiShoppingCart} from "react-icons/hi"
import {BsPersonCircle} from "react-icons/bs"
import {IoMdPlanet} from "react-icons/io"
import {MdFavorite} from "react-icons/md"
import { Container, ControleSuperior, ContButtonPesquisar, ControleInferior, Carrinho, Login, Favoritos, Logo} from "./style/headerStyle";

import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <>
            <Container>
                 <ControleSuperior>

                 </ControleSuperior>
                 <ControleInferior>
                    <Logo>
                        <Link to='/'>
                            <button>
                              <IoMdPlanet></IoMdPlanet>
                            </button>
                        </Link>
                    </Logo>
                    <ContButtonPesquisar>
                      <input type="text" placeholder="Informe o produto que deseja buscar..."/> 
                      <button>| categorias</button> 
                      <button type="submit"><BiSearch></BiSearch></button>
                    </ContButtonPesquisar>
                    
                        <Carrinho>
                            <Link to="/Carrinho">
                                <button>
                                    <HiShoppingCart></HiShoppingCart>
                                </button>
                            </Link>
                        </Carrinho>

                        <Login>
                            <button>
                                <Link to="/Login"><span>Login</span></Link>
                                <div>
                                    <BsPersonCircle></BsPersonCircle>
                                </div>
                            </button>
                        </Login>
                        <Favoritos>
                            <Link to="/Favoritos">
                                <button>
                                    <MdFavorite></MdFavorite>
                                </button>
                            </Link>
                        </Favoritos>
                    
                    
                 </ControleInferior>
            </Container>

        </>
    )
}