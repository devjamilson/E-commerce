import styled from 'styled-components'

export const Window = styled.section`
    position:fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`


export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    width: 25%;
    height: 60vh;
    border-radius: 20px;
    background-color: rgba(255, 255, 255);
    text-align: center;
    box-shadow: 0px 1px 15px -3px  #A9A9A9;
    h1{ 
        font-size: 32px;
        color: 	#FF4500;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2{
        font-weight: 400;
        font-size: 16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a{
        text-decoration: none;
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

export const Input = styled.input`
    height: 6vh;
    margin-top: 1.5vh;
    border-radius: 20px;
    width: 95%;
    border: none;
    background-color: 	#F2F2F2;
    padding-left: 15px;
    outline: none;

`

export const BtnEntrar = styled.button`
    height: 6vh;
    margin-top: 2vh;
    background-color: #FF4500;
    border: none;
    color: #fff;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
`
export const BtnCriar = styled.button`
    height: 6vh;
    margin-top: 1vh;
    background-color: #191970;
    border: none;
    color: #fff;
    border-radius: 20px;
    width: 100%;
    cursor: pointer;
    
`