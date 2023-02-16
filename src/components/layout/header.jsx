import React, {useState} from "react";
import {BiSearch} from "react-icons/bi"
import {HiShoppingCart} from "react-icons/hi"
import {BsPersonCircle} from "react-icons/bs"
import {IoMdPlanet} from "react-icons/io"
import {MdFavorite} from "react-icons/md"
import { Container, ControleSuperior, ContButtonPesquisar, ControleInferior, Carrinho, Login, Favoritos, Logo} from "./style/headerStyle";


//icones
import {MdSmartphone, MdComputer, MdEventNote} from "react-icons/md"
import {GiDesk, GiDress} from "react-icons/gi"
import {BsSmartwatch, BsFillHandbagFill, BsListUl} from "react-icons/bs"
import {FaTshirt} from "react-icons/fa"
import { MenuCategorias, ItemCat} from "../home";

import { Link } from 'react-router-dom'

import ModalLogin from '../Modal/modal'


export default function Header(){

    const [modalAberto, setModalAberto] = useState(false)

    const abrirModal = () =>{
        setModalAberto(true)
    }

    const fecharModal = () =>{
        setModalAberto(false)
    }

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
                            <button onClick={abrirModal}>
                                <Link href="/Login"><span>Login</span></Link>
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

            <MenuCategorias>
                    <span>
                         <BsListUl></BsListUl>Categorias
                    </span>
                    <Link to="/produtos/celulares"><button><ItemCat><MdSmartphone></MdSmartphone>Celulares</ItemCat></button></Link>
                    <Link to="/produtos/computadores"><button><ItemCat><MdComputer></MdComputer>Computadores</ItemCat></button></Link>
                    <Link to="/produtos/escritorio"><button><ItemCat><MdEventNote></MdEventNote>Escritório</ItemCat></button></Link>
                    <Link to="/produtos/moveis"><button><ItemCat><GiDesk></GiDesk>Móveis</ItemCat></button></Link>
                    <Link to="/produtos/roupasfemininas"><button><ItemCat><GiDress></GiDress>Roupas Femininas</ItemCat></button></Link>
                    <Link to="/produtos/roupasmasculinas"><button><ItemCat><FaTshirt></FaTshirt>Roupas Masculinas</ItemCat></button></Link>
                    <Link to="/produtos/acessorios"><button><ItemCat><BsSmartwatch></BsSmartwatch>Acessários</ItemCat></button></Link>
                    <Link to="/produtos/bolsas"><button><ItemCat><BsFillHandbagFill></BsFillHandbagFill>Bolsas</ItemCat></button></Link>
            </MenuCategorias>

            {/*<Window>
                <ContainerLogin>
                    <h1>Login</h1>
                    <form >
                        <Input type="text" placeholder="Infome o seu e-mail..." />
                        <Input type="text"placeholder="Infome a sua senha..." />
                        <BtnEntrar type="submit" >Entrar</BtnEntrar>
                        <h2>ou</h2>
                        <BtnCriar><Link to="/cadastrar">Criar</Link></BtnCriar>
                    </form>
                </ContainerLogin>
            </Window>*/}
 
            {modalAberto? <ModalLogin fecharModal={fecharModal}></ModalLogin> : null}
            
        </>
    )
}