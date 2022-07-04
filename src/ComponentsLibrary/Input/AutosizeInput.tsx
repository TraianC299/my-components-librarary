import {  Ref, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { BLUE, DARKBLUE } from "../../Constants";




const AutosizeTextArea = styled.textarea`
  border-radius: 5px;
  height: 58px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: 0.5px solid ${DARKBLUE};
  padding-top: 15px;
  padding-bottom:0;
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


  interface Props {
      value: string,
      setValue: Function,
      validation?: Function,
        error?: string,
        setError?: Function,
        placeholder?: string,
        className?:string
  }
const AutosizeInput:React.FC<Props> = ({setValue, validation, value, placeholder,error,setError, className}) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[])


    const onKeyPressEnterNewLine = useCallback((e:React.KeyboardEvent) => {
        if(e.key === "Enter"){
            e.preventDefault();
            setValue(value+"\n")
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[ value])



    return (
        <AutosizeTextArea  
        className={className}
            ref={textareaRef}
            onChange={e=>setValue(e.target.value)} 
            value={value} 
            onKeyDownCapture={(e)=>onKeyPressEnterNewLine(e)}
            placeholder={placeholder} 
            ></AutosizeTextArea>
    )
}


export default AutosizeInput