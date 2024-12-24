import styled from 'styled-components';



export const Form = styled.form`  
    width: 600px;
    height: 400px;      
    border: 4px solid #eef0f2;
    border-radius: 8px;
    background: #ebf2fc;   
    display: flex;    
    flex-direction: column;    
    justify-content: center;    
    margin: 0 auto; 
    padding: 20px; `

export const Label = styled.label`   
    text-shadow: 0 1px 0 rgb(170 227 246), 0px 2px 0  rgb(170 227 246);
    text-transform: uppercase;   
    color: #64C3F3;
    margin-bottom: 10px;
    letter-spacing: 4px;
    font: normal 26px Verdana, Helvetica;
   ` 
   
export const Input = styled.input`
    height: 40px;  
    border: 2px solid #ebf2fc;
    border-radius: 4px;
    font-size: 20px;
    padding: 6px 16px 6px 20px;
    margin: 0 0 26px 0; 
    color:rgb(130, 168, 203);
    box-shadow: 
    inset 0 2px 0 rgba(0,0,0,.2), 
    0 0 4px rgba(0,0,0,0.1);
&:focus-visible{
    outline: none;
    }`

export const Button = styled.button`   
    width: 250px;  
    display: inline-block;
    margin: auto;
    margin-top: 10px;
    padding: 15px 15px;
    color: #fff;
    font-size: 35px;
    background: #aae3f6;
    border: 0px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    box-shadow:
    inset 0px 2px 2px rgba(255,255,255,0.6),
    2px 2px 2px rgba(0,0,0,0.1),
    0 0 4px 1px rgba(0,0,0,0.2);
&:focus{
    outline: none;`

    export const List = styled.ul`
    padding-left:0;
    display: flex;
    justify-content: center;    
    margin: 0 auto;   
 `;