import React from "react";
import {Container, CadastrarP} from './style/styleAdmin'

import { ControleSuperior, ControleInferior, Login,  Logo} from "../layout/style/headerStyle";

import {IoMdPlanet} from "react-icons/io"
import {BsPersonCircle} from "react-icons/bs"
import {Link} from 'react-router-dom'

export default function Admin(){
    return(
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
                     <Login>
                        <button>
                            <Link href="/Login"><span>Login</span></Link>
                            <div>
                                <BsPersonCircle></BsPersonCircle>
                            </div>
                        </button>
                    </Login>
                 </ControleInferior>


                <section>
                        <CadastrarP>
                            <h1>Novo Produto</h1>
                            <form action="">
                                <input type="text" name="" id="" placeholder="Informe o nome do produto"/>
                                <input type="text" name="" id="" placeholder="Informe o preco do produto"/>
                                <input type="text" name="" id="" placeholder="Informe o endereço da imagem"/>
                                <select id="categorias" name="categorias">
                                    <option value="Celulares">Celulares</option>
                                    <option value="Computadores">Computadores</option>
                                    <option value="Escritório">Escritório</option>
                                    <option value="Móveis">Móveis</option>
                                    <option value="Roupas Femininas">Roupas Femininas</option>
                                    <option value="Roupas Masculinas">Roupas Masculinas</option>
                                    <option value="Acessórios">Acessórios</option>
                                    <option value="Bolsas">Bolsas</option>
                                </select>
                                <button>Criar</button>
                            </form>
                        </CadastrarP>
                </section>
        </Container>
    )
}