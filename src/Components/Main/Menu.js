import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import CircleButton from '../../ComponentsLibrary/Buttons/CircleButton'
import Collapse from '../../ComponentsLibrary/Utilities/Collapse'
import { BLUE, DARKBLUE, device } from '../../Constants'
const chevronRightSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2498 0.105519C1.63066 0.310695 1.30293 0.514503 0.86289 0.968019C0.254199 1.59526 0.0075198 2.21079 0.00878934 3.09985C0.0107425 4.53579 -0.710351 3.72124 10.4911 14.9407L20.5093 24.9749L10.4911 35.009C-0.710351 46.2285 0.0107425 45.4139 0.00878934 46.8499C0.0075198 47.7558 0.256446 48.3594 0.902637 49.0173C1.52383 49.6499 2.15576 49.9115 3.08164 49.9196C4.54111 49.9324 3.66572 50.7177 16.3223 38.0404C25.4816 28.8659 27.6049 26.6911 27.7911 26.2932C28.1213 25.5879 28.1231 24.3454 27.7951 23.6565C27.6075 23.2625 25.3901 20.9921 16.3223 11.9093C6.30908 1.87974 5.01572 0.617726 4.47676 0.350636C3.76895 -4.76139e-05 2.86768 -0.0991687 2.2498 0.105519Z" fill="white"/>
</svg>


const openSvg = <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white"/>
</svg>



const closeSvg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.61433 0.0978279C1.59669 0.297484 0.710313 0.990322 0.268788 1.93097C0.0558509 2.3846 0.00948793 2.62342 0.00948793 3.26683C0.00929231 4.77832 -0.652896 4.02775 10.52 15.181L20.4024 25.046L10.4406 35.0098C2.34505 43.1071 0.435852 45.0653 0.249715 45.4622C-0.0769781 46.159 -0.0842162 47.4063 0.234456 48.0995C0.519188 48.719 1.14166 49.3627 1.77001 49.6873C2.47856 50.0533 3.60389 50.1043 4.41094 49.8071C4.97815 49.598 5.33233 49.2571 14.9993 39.6158L25.0009 29.6409L34.953 39.5649C42.9467 47.5359 45.0015 49.5348 45.3943 49.7222C45.8047 49.9179 46.0328 49.9552 46.8126 49.954C47.6264 49.9527 47.803 49.9205 48.2347 49.6941C48.8339 49.38 49.4949 48.6843 49.7798 48.0679C50.0848 47.408 50.0709 46.1442 49.7511 45.4622C49.565 45.0653 47.6558 43.1071 39.5603 35.0098L29.5985 25.046L39.4808 15.181C50.6537 4.02775 49.9915 4.77832 49.9914 3.26683C49.9914 2.62694 49.9448 2.38489 49.7376 1.94611C48.9456 0.268864 46.9593 -0.422509 45.2996 0.401415C45.0412 0.529668 41.4738 4.02053 34.9528 10.5261L25.0004 20.455L15.048 10.5261C8.52708 4.02053 4.95967 0.529668 4.70125 0.401415C4.37025 0.237118 3.28307 -0.0327692 3.09693 0.00327445C3.06651 0.0091352 2.84927 0.0516256 2.61433 0.0978279Z" fill="white"/>
</svg>
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
  return (
    <Container className={openPhoneMenu?'active-phone-menu':"closed-phone-menu"}>
        <CircleButton color={BLUE} icon={openPhoneMenu?closeSvg:openSvg} onClick={()=>setOpenPhoneMenu(previous=>!previous)} className="phone-menu-button"  style={{height:"6vh", width:"6vh"}}></CircleButton>
        <Category  active={openInput} onClick={()=>setOpenInput(previous=>!previous)}>
            Inputs
            </Category>
        <Collapse on={openInput}>
            <CollapsableContainer>
                <ComponentLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }to="/input/option-selector">Option Selector</ComponentLink>
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

            </CollapsableContainer>
        </Collapse>
        <Category active={openDisplay} onClick={()=>setOpenDisplay(previous=>!previous)}>Display</Category>
        <Collapse on={openDisplay}>
            <CollapsableContainer>
            <ComponentLink to="/display/image-text">Image Text</ComponentLink>
            <ComponentLink to="/display/image-slider">Image Slider</ComponentLink>
            <ComponentLink to="/display/hero-section">Hero Section</ComponentLink>
            </CollapsableContainer>
        </Collapse>
        <Category active={openEcommerce} onClick={()=>setOpenEcommerce(previous=>!previous)}>E-commerce</Category>
        <Collapse on={openEcommerce}>
            <CollapsableContainer>
            <ComponentLink to="/e-commerce/price-plans">Price Plans</ComponentLink>
            <ComponentLink to="/e-commerce/contact-form">Contact Form</ComponentLink>
            </CollapsableContainer>
        </Collapse>
    </Container>
  )
}

export default Menu



const Category = ({onClick, children, active}) => {

    return<CategoryStyle className={active?"active":""} onClick={onClick}>
        {children}{chevronRightSvg}
    </CategoryStyle>
}








