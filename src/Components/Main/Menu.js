import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Collapse from '../../ComponentsLibrary/Utilities/Collapse'
import { BLUE, DARKBLUE } from '../../Constants'
const chevronRightSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2498 0.105519C1.63066 0.310695 1.30293 0.514503 0.86289 0.968019C0.254199 1.59526 0.0075198 2.21079 0.00878934 3.09985C0.0107425 4.53579 -0.710351 3.72124 10.4911 14.9407L20.5093 24.9749L10.4911 35.009C-0.710351 46.2285 0.0107425 45.4139 0.00878934 46.8499C0.0075198 47.7558 0.256446 48.3594 0.902637 49.0173C1.52383 49.6499 2.15576 49.9115 3.08164 49.9196C4.54111 49.9324 3.66572 50.7177 16.3223 38.0404C25.4816 28.8659 27.6049 26.6911 27.7911 26.2932C28.1213 25.5879 28.1231 24.3454 27.7951 23.6565C27.6075 23.2625 25.3901 20.9921 16.3223 11.9093C6.30908 1.87974 5.01572 0.617726 4.47676 0.350636C3.76895 -4.76139e-05 2.86768 -0.0991687 2.2498 0.105519Z" fill="white"/>
</svg>

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: ${DARKBLUE};
    flex-direction: column;
    width: 200px;
    height: 100vh;
    
`

const CategoryStyle = styled.div`
    display: flex;
    font-size: 1.25rem;
    font-weight: 500;
    color: white;
    margin-top:20px;
    justify-content: space-between;
    align-items: center;
    >svg{
        transition: all 0.3s ease-in-out;
        height:10px;
        width:10px;
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
  return (
    <Container>
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








