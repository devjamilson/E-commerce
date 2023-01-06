import styled from 'styled-components'

export const Window = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    width: 25%;
    height: 55vh;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 1px 15px -3px  #A9A9A9;
    h1{ 
        font-size: 32px;
        color: 	#FF4500;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2{
        font-weight: 400;
        font-size: 18px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    width: 40%;
    cursor: pointer;
`