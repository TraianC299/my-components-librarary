import React, { useEffect } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { BLUE, device } from '../../Constants'

const Container = styled.div<StyledComponent>`
    position: fixed;
    bottom: 10px;
    width: 90vw;
    left: 5vw;
    height: fit-content;
    padding: 15px 20px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    z-index: 2;
    border-radius: 10px;
    text-align: left;
    transform: translateY(${props=>props.open?"0%":"10vh"});
    font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        font-weight: 600;
    >svg{
        width: 20px;
        height: 20px;
        margin: 7px 0;
        margin-right: 12px;
    }
    
    
    @media ${device.laptopSmall}, ${device.tabletSmallPortrait}{
        left: 10px;
        bottom: 10px;
        top: auto;
        z-index: 1;
        width: auto;
        transform: translateY(${props=>props.open?"0%":"10vh"});
    }
    
    `

interface Props  {
    icon: React.ReactNode,
    open: string,
    setOpen: Function,
    autoHideDuration?: number,
    color?: string,
    textColor?: string,
    style?: React.CSSProperties,
    

}
const Snackbar:React.FC<Props> = ({icon, color=BLUE, textColor="white", open="This is an example of a snackbar", setOpen, autoHideDuration=3000, style}) => {

    useEffect(()=>{
        if(open){
            setTimeout(()=>{
                setOpen(false)
            },autoHideDuration)
        }
    
    },[open])

    
    return (
        <Container open={open}  style={{background:color,color:textColor, ...style}}>
            {icon}
            {open}
        </Container>
    )
}

export default Snackbar
