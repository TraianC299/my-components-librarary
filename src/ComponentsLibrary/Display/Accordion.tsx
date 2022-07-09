import React, {  useState } from 'react'
import  styled from "styled-components"
import { DARKBLUE, DARKGREY, LIGHTGREY } from '../../Constants'
import Collapse from '../Utilities/Collapse'

const FAQInstanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width:500px;
    box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(0, 0, 0, 0.12);
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${LIGHTGREY};

    >div:first-child{
        width: 100%;
        display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 10px;
    cursor:pointer;

    >p{
        font-size: 1.1rem;
        font-weight: 500;
        font-weight: 600;
        color: ${DARKBLUE};
    }
  
    >svg{
        transition: transform 0.3s ease-in;

    }
    }
    >div:nth-child(2){
        >p{
        font-size: 0.9rem;
        color: ${DARKBLUE};

    }
    }
`

interface AccordionProps {
    title: string;
    paragraph: string;
}
const Accordion:React.FC<AccordionProps> = ({title, paragraph}) => {
    const [open, setOpen] = useState(false)

    
    return(
        <FAQInstanceContainer>
            <div onClick={()=>setOpen(previous=>!previous)}>
                <p>{title}</p>
                <svg style={{transform:`rotate(${open?"180deg":"0deg"})`}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" fill="#323232"/>
                </svg>

            </div>
            <Collapse on={open} >
                <div style={{padding:"10px", color:DARKGREY, paddingTop:0}}>{paragraph}</div>
            </Collapse>
        </FAQInstanceContainer>
    )
}


export default Accordion












