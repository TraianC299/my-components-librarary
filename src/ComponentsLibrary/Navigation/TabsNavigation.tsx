import React, { useEffect, useState } from 'react'
import {  NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { device, BLUE, GREY } from '../../Constants'



const Container = styled.div`
overflow: scroll;
transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
display: flex;
grid-template-columns: repeat(auto-fit, 150px);
grid-template-rows:1fr;
position: sticky;
margin-bottom: 10px;
top:0;
border-bottom: 2px solid transparent;`


const Item = styled(NavLink)`
height: 8vh;
text-decoration: none;
color: black;
font-weight: 700;
width: 150px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: ${GREY};

&.active{
  color: ${BLUE};
}
@media ${device.mobileSmallPortrait}{
  width: 33vw;

}
`

const Span  = styled.span`
transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
width: 150px;
height: 2px;
position: absolute;
bottom: 0px;
background: ${BLUE};


@media ${device.mobileSmallPortrait}{
  width: 33vw;
}`

interface NavItem {
  name: string; to: string
};

interface NavItemsArray extends Array<NavItem>{}

interface Props {
  readonly nav: NavItemsArray;
}
const TabsNavigation:React.FC<Props> = ({nav}) => {
  let location = useLocation();
    const [selected, setSelected] = useState(0)



    useEffect(()=>{
        let index = nav.findIndex(item => item.to === location.pathname.split("/").pop())
        setSelected(index)
    },[location])

    
  return (
    <Container>
        <Span style={{transform: `translateX(${selected*100}%)`}}></Span>
        {nav&&nav.map((item, index) => <Item 
            to={item.to} 
            onClick={({})=>setSelected(index)} 
            key={index}
            >{item.name}</Item>)}
    </Container>
  )
}

export default TabsNavigation