import styled from 'styled-components'

export const Container = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const ContCadastrar = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0px 1px 15px -3px  #A9A9A9;
   width: 25%;
    height: 60vh;
   border-radius: 20px;
   padding: 2%;
   background-color: #fff;

   h1{
      margin-top: 0;
      padding: 0;
      font-size: 32px;
      color: #FF4500;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   input{
      height: 6vh;
      margin-top: 1.5vh;
      border-radius: 20px;
      width: 95%;
      border: none;
      background-color: 	#F2F2F2;
      padding-left: 15px;
      outline: none;
   }
   h2{
        font-weight: 400;
        font-size: 16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

   a{
      width: 100%;
   }

   div{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      button{
         background-color: transparent;
         border: none;
         cursor: pointer;
      }
   }
`

export const BtnJaTenho = styled.button`
      height: 6vh;
      margin-top: 1vh;
      background-color: #191970;
      border: none;
      color: #fff;
      border-radius: 20px;
      width: 100%;
      cursor: pointer;
`

export const BtnCriarConta = styled.button`
      height: 6vh;
      margin-top: 2vh;
      background-color: #FF4500;
      border: none;
      color: #fff;
      width: 100%;
      border-radius: 20px;
      cursor: pointer;
`