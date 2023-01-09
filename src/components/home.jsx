import React from "react";
import { Container, MenuCategorias, ItemCat} from "./home";
import {MdSmartphone, MdComputer, MdEventNote} from "react-icons/md"
import {GiDesk, GiDress} from "react-icons/gi"
import {BsSmartwatch, BsFillHandbagFill, BsListUl} from "react-icons/bs"
import {FaTshirt} from "react-icons/fa"


export default function Home(){
    return(
        <Container>
                <MenuCategorias>
                    <span><BsListUl></BsListUl>Categorias</span>
                    <button><ItemCat><MdSmartphone></MdSmartphone>Celular</ItemCat></button>
                    <button><ItemCat><MdComputer></MdComputer>Computador</ItemCat></button>
                    <button><ItemCat><MdEventNote></MdEventNote>Escritório</ItemCat></button>
                    <button><ItemCat><GiDesk></GiDesk>Móveis</ItemCat></button>
                    <button><ItemCat><GiDress></GiDress>Roupas Femininas</ItemCat></button>
                    <button><ItemCat><FaTshirt></FaTshirt>Roupas Masculinas</ItemCat></button>
                    <button><ItemCat><BsSmartwatch></BsSmartwatch>Acessários</ItemCat></button>
                    <button><ItemCat><BsFillHandbagFill></BsFillHandbagFill>Bolsas</ItemCat></button>
                </MenuCategorias>
            
        </Container>
    )
}