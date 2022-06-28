import React from 'react'
import styled from "styled-components"
import { BLUE, DARKBLUE, LIGHTGREY, RED } from '../../Constants';


const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
position:relative;
height: fit-content;
min-width:300px;
>p{
  /* position: absolute;
  top:100%; */
  color:${DARKBLUE};
  font-size: 0.75rem;
  margin-top: 3px;
  margin-left: 15px;
}`
const InputContainer = styled.input`
  border-radius: 5px;
  height: 58px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: 0.5px solid ${DARKBLUE};
  ::placeholder{
    opacity: 0;
  }
  :hover{
    border: 1px solid black;
  }
  
  
 
  :placeholder-shown {
    + label{
      transform: translateY(29px);
      padding-left: 0px 5px;
      font-size:1rem !important;
  }
  }

  :focus{
    border: 2px solid ${BLUE};
    + label{
      transform: translateY(0px);
      font-size: 0.7rem !important;

    }
  }
 `

const Label = styled.label`
position:absolute;
top: -0.4rem;
left: 15px;
height: 1.2rem;
pointer-events: none;
background: white;
transition: 0.3s;
overflow: hidden;
text-overflow: ellipsis;
padding: 0 5px;


line-height: 0.8rem;
font-size: 0.7rem;
color:${DARKBLUE};
pointer-events: none;
transition: 0.3s;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
display: inherit;

`







const Input = ({value, setValue, label, type, error, setError, disabled, defaultValue, rows, rowsMax, className, width, helperText, borderColor, validation, unity, ...props}) => {

function handleChange (e){
  e.preventDefault()

if (typeof(e.target.value)==undefined || !setValue){
    return null
}else{
    setValue(e.target.value)
   }}



const validationnn = () => {
 if(setError){
   validation(value, setError)
 }else{
   return null
 }
}

const onFocus = (e) => {
  e.preventDefault()

  if(setError){
    setError(false)
  }
}
const onBlur = (e) => {
  e.preventDefault()
  validationnn()
}


  return(
    <Container >
      <InputContainer
      className={error?"error":className}
      {...props}
      onChange={(e)=>handleChange(e)}
      onBlur={(e)=>onBlur(e)}
      onFocus={(e)=>onFocus(e)}
      placeholder="nckdsncdsk"
      value={value}
      ></InputContainer>
      <Label 
      // style={{translateY:focus?"(-0.6rem)": `(calc(29px - 0.6rem))`}}
      >
      {label}
      </Label>
      <p style={{color:error?RED:DARKBLUE}}>{error||helperText}</p>
    </Container>
  )
}


export default Input
