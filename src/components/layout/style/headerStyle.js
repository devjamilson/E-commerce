import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 17vh;
`



export const ControleSuperior = styled.div`
    height: 5vh;
    background-color: #E12C04;
`
export const ControleInferior = styled.div`
    height: 12vh;
    background-color: #F23005;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


export const Logo = styled.div`
   button{
     background-color: transparent;
     border: none;
     margin-right: 40px;
     cursor: pointer; 
     text-decoration: none;
    
     *{
        
         font-size: 38px;
        color: #fff;
     }
   }
`
export const ContButtonPesquisar = styled.div`
    background-color: #ffff;
    height: 6vh;
    width: 50%;
    border-radius:20px;
    display: flex;
    justify-content: space-between;
    input{
        background-color: transparent;
        border: none;
        width: 77%;
        padding-left: 15px;
        border-radius:20px;
        outline: none;
    }
    button{
        height: 6vh;
        border: none;
        width: 15%;
        cursor: pointer;
        border: none;
    }
    button[type="submit"]{
        border: none;
        background-color: #E12C04;
        width: 8%;
        border-radius: 0px 18px 18px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        *{
            color: #fff;
            font-size: 18px;
        }
    }
`

export const Carrinho = styled.div`
    margin-left: 10px;
    button{
        display: flex;
        text-align: center;
        justify-content: center;
        height: 6vh;
        background-color: transparent;
        border: none;
        cursor: pointer;
        *{
            color: #fff;
            font-size: 5vh;
        }
   }
`

export const Login =  styled.div`
   margin-left: 15px;
   width: 8%; 
   height: 6vh;
   background-color: #E12C04 ;
   border-radius: 50px;
   button{
        display: flex;
        align-items: center;
        justify-content:space-between;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        cursor: pointer;
        span{
            margin-left:15px ;
            font-size: 16px;
            color: #fff;

        }
        div{
            width: 4.8vh;
            height: 4.8vh;
            background-color: #fff;
            border-radius:100px ;
            *{
                font-size: 5vh;
                color: 	#808080;
            }
        }
   }
`

export const Favoritos = styled.div`
   margin-left: 15px;
   width: 6vh; 
   height: 6vh;
   background-color: #E12C04 ;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50px;
   button{
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      height: 90%;
      width: 90%;
      border-radius: 50px;
      cursor: pointer;
      *{
        color: #fff;
        font-size: 18px;
      }
   }
`