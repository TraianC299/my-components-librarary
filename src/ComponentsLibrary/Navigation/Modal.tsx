import React, { useEffect } from 'react';
import styled from 'styled-components';


const SuccesContainer= styled.div`
z-index: 999;
position: fixed;
height: 100vh;
width: 100vw;
top:0;
left:0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.15);  
transition: 0.3s;
backdrop-filter: blur(4px);
`


// const CloseIcon = styled.div`
// position: absolute;
// top: 20px;
// right:20px;
// border-radius: 333px;
// box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
// `


interface Props{
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Modal:React.FC<Props> = ({children, open, setOpen}) => {

  useEffect(()=>{
    document.getElementsByTagName("body")[0].style.overflow = (open? "hidden":"scroll");
  },[open])

  return <SuccesContainer onClick={(e)=>{if(e.target !== e.currentTarget) return;setOpen(false);}}  style={{opacity:open?1:0, pointerEvents:open?"all":"none"}} >
    {children}
    </SuccesContainer>;
};

export default Modal;