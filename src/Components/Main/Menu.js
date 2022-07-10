import React,{ useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import CircleButton from '../../ComponentsLibrary/Buttons/CircleButton'
import Collapse from '../../ComponentsLibrary/Utilities/Collapse'
import { BLUE, DARKBLUE, device } from '../../Constants'
import useDidMountEffect from '../../Hooks/useDidMountEffect.ts'
const chevronRightSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2498 0.105519C1.63066 0.310695 1.30293 0.514503 0.86289 0.968019C0.254199 1.59526 0.0075198 2.21079 0.00878934 3.09985C0.0107425 4.53579 -0.710351 3.72124 10.4911 14.9407L20.5093 24.9749L10.4911 35.009C-0.710351 46.2285 0.0107425 45.4139 0.00878934 46.8499C0.0075198 47.7558 0.256446 48.3594 0.902637 49.0173C1.52383 49.6499 2.15576 49.9115 3.08164 49.9196C4.54111 49.9324 3.66572 50.7177 16.3223 38.0404C25.4816 28.8659 27.6049 26.6911 27.7911 26.2932C28.1213 25.5879 28.1231 24.3454 27.7951 23.6565C27.6075 23.2625 25.3901 20.9921 16.3223 11.9093C6.30908 1.87974 5.01572 0.617726 4.47676 0.350636C3.76895 -4.76139e-05 2.86768 -0.0991687 2.2498 0.105519Z" fill="white"/>
</svg>


const openSvg = <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white"/>
</svg>



const closeSvg=<svg width="307" height="307" viewBox="0 0 307 307" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0383 0.876251C3.66728 5.07925 -4.16072 21.4352 2.24528 35.9662C4.06428 40.0922 14.2703 50.7962 60.6463 97.2162L116.842 153.466L60.6463 209.716C-0.774719 271.195 0.0452806 270.222 0.0372806 281.615C0.0262806 295.675 11.1523 306.726 25.3663 306.773C36.5643 306.81 35.7303 307.514 97.1163 246.186L153.366 189.99L209.616 246.186C271.095 307.607 270.122 306.787 281.515 306.795C295.575 306.806 306.626 295.68 306.673 281.466C306.71 270.268 307.414 271.102 246.086 209.716L189.89 153.466L246.086 97.2162C307.414 35.8302 306.71 36.6642 306.673 25.4662C306.626 11.2522 295.575 0.126244 281.515 0.137244C270.122 0.145244 271.095 -0.674755 209.616 60.7462L153.366 116.942L97.1163 60.7462C38.2803 1.96625 37.7203 1.47624 27.8663 0.111243C25.6663 -0.193757 21.6943 0.15025 19.0383 0.876251Z" fill="white"/>
</svg>


const Background = styled.div`
width: 100vw;
height: 100vh;
z-index: 2;
pointer-events: none;
transition: all 0.5s;
position: fixed;

  &.black{
  pointer-events: all;
  background: rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(5px);
  }
@media ${device.laptopSmall}{
    display: none;
}


`

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: ${DARKBLUE};
    flex-direction: column;
    width: max-content;
    height: 100vh;
    transition: 0.3s ease-in-out;
    position: fixed;
    top: 0;
    z-index: 100;
    left:-100%;

    @media ${device.laptopSmall}{
        width: 200px;
        position: static;
        >.phone-menu-button{
        display: none;
        }
    }
    &.active-phone-menu{
        left: 0;
        }

    >.phone-menu-button{
        position: fixed;
        bottom:10px;
        right: 10px;
    }
`

const CategoryStyle = styled.div`
    display: flex;
    font-size: 1.25rem;
    font-weight: 500;
    color: white;
    margin-top:20px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    

    >svg{
        transition: all 0.3s ease-in-out;
        height:10px;
        width:10px;
        margin-left:10px;
    }


    &.active{
        >svg{
            transform: rotate(90deg);
        }
    }
    `

const CollapsableContainer = styled.div`
padding-left: 10px;
display: flex;
flex-direction: column;
`

const ComponentLink = styled(NavLink)`
width:100%;
color: white;
text-decoration: none;
margin-top:5px;
margin-bottom: 5px;

&.active{
    color: ${BLUE};
    font-weight: 600;
}
`

const activeStyle = {
    color: BLUE,
    fontWeight:600,
}
const Menu = () => {
    const [openInput, setOpenInput] = useState(false)
    const [openButtons, setOpenButtons] = useState(false)
    const [openFeedback, setOpenFeedback] = useState(false)
    const [openUtilities, setOpenUtilities] = useState(false)
    const [openNavigation, setOpenNavigation] = useState(false)
    const [openDisplay, setOpenDisplay] = useState(false)
    const [openEcommerce, setOpenEcommerce] = useState(false)
    const [openPhoneMenu, setOpenPhoneMenu] = useState(false)
    const location = useLocation()


    useDidMountEffect(()=>{
            setOpenPhoneMenu(false)
    },[location])


  return (
    <>
        <Background onClick={(e)=>{if(e.target !== e.currentTarget) return;setOpenPhoneMenu(false)}} className={openPhoneMenu ? "black" : ""}></Background>
        <Container className={openPhoneMenu?'active-phone-menu':"closed-phone-menu"}>
            <CircleButton color={BLUE} icon={openPhoneMenu?closeSvg:openSvg} onClick={()=>setOpenPhoneMenu(previous=>!previous)} className="phone-menu-button"  style={{height:"6vh", width:"6vh"}}></CircleButton>
            <Category  active={openInput} onClick={()=>setOpenInput(previous=>!previous)}>
                Input
                </Category>
            <Collapse on={openInput}>
                <CollapsableContainer>
                    <ComponentLink to="/input/option-selector">Option Selector</ComponentLink>
                    <ComponentLink to="/input/input">Input</ComponentLink>
                    <ComponentLink to="/input/time-picker">Time Picker</ComponentLink>
                    <ComponentLink to="/input/date-picker">Date Picker</ComponentLink>
                    <ComponentLink to="/input/radio-buttons">Radio Buttons</ComponentLink>
                    <ComponentLink to="/input/checkbox">Checkbox</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openButtons} onClick={()=>setOpenButtons(previous=>!previous)}>Buttons</Category>
            <Collapse on={openButtons}>
                <CollapsableContainer>
                    <ComponentLink to="/buttons/button">Button</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openUtilities} onClick={()=>setOpenUtilities(previous=>!previous)}>Utilities</Category>
            <Collapse on={openUtilities}>
                <CollapsableContainer>
                    <ComponentLink to="/utilities/collapse">Collapse</ComponentLink>
                    <ComponentLink to="/utilities/loading">Loading</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openFeedback} onClick={()=>setOpenFeedback(previous=>!previous)}>Feedback</Category>
            <Collapse on={openFeedback}>
                <CollapsableContainer>
                    <ComponentLink to="/feedback/snackbar">Snackbar</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openNavigation} onClick={()=>setOpenNavigation(previous=>!previous)}>Navigation</Category>
            <Collapse on={openNavigation}>
                <CollapsableContainer>
                    <ComponentLink to="/navigation/slider-header">Slider Options</ComponentLink>
                    <ComponentLink to="/navigation/stepper">Stepper</ComponentLink>
                    <ComponentLink to="/navigation/modal">Modal</ComponentLink>
                    <ComponentLink to="/navigation/bottom-menu">Bottom Menu</ComponentLink>
                    <ComponentLink to="/navigation/top-navigation">Top Navigation</ComponentLink>
                    <ComponentLink to="/navigation/side-menu">Side Menu</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openDisplay} onClick={()=>setOpenDisplay(previous=>!previous)}>Display</Category>
            <Collapse on={openDisplay}>
                <CollapsableContainer>
                    <ComponentLink to="/display/image-text">Image Text</ComponentLink>
                    <ComponentLink to="/display/image-slider">Image Slider</ComponentLink>
                    <ComponentLink to="/display/hero-section">Hero Section</ComponentLink>
                    <ComponentLink to="/display/card">Card</ComponentLink>
                    <ComponentLink to="/display/accordion">Accordion</ComponentLink>
                </CollapsableContainer>
            </Collapse>
            <Category active={openEcommerce} onClick={()=>setOpenEcommerce(previous=>!previous)}>E-commerce</Category>
            <Collapse on={openEcommerce}>
                <CollapsableContainer>
                    <ComponentLink to="/e-commerce/price-plans">Price Plans</ComponentLink>
                    <ComponentLink to="/e-commerce/contact-form">Contact Form</ComponentLink>
                    <ComponentLink to="/e-commerce/product-design">Product Design</ComponentLink>
                </CollapsableContainer>
            </Collapse>
        
        </Container>
    </>
  )
}

export default Menu



const Category = ({onClick, children, active}) => {

    return<CategoryStyle className={active?"active":""} onClick={onClick}>
        {children}{chevronRightSvg}
    </CategoryStyle>
}








