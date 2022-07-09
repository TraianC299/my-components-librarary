import React from 'react'
import styled from 'styled-components'
import { BLUE, device, WHITE } from '../../Constants'
import Button from '../Buttons/Button'



const check =<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.77393L5 11.7739L15 1.77393" stroke={BLUE} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


const waveSvg =<svg  preserveAspectRatio="none" width="414" height="164" viewBox="0 0 414 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H414C414 0 414 58.5 414 138C414 217.5 0 78 0 138C0 198 0 0 0 0Z" fill={BLUE}/>
</svg>




const Container = styled.div`
padding:0 ;

@media ${device.laptopSmall}{
    padding:0  5% ;
}

`

const GridContainer = styled.div`
padding-left:20px;
padding-right:20px;
display: grid;
grid-template-columns: 100% 100% 100%;
padding-top: 50px;
padding-bottom: 50px;
scroll-snap-type: x mandatory;
overflow:scroll;
    ::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

@media ${device.laptopSmall}{
    grid-template-columns: 1fr 1fr 1fr;

}
`




const PricePlanContainer = styled.div`
padding: 20px;
scroll-snap-align: center;
position: relative;
width: 90%;
min-width: 325px;
margin:auto;
height: fit-content;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
transform: scale(${props=>props.prime?1:0.9});
background: ${props=>props.prime?BLUE:WHITE};

*{
    color: ${props=>props.prime?WHITE:"auto"} !important;
    fill: ${props=>props.prime?WHITE:"auto"} !important;
}
button{
    background: ${props=>props.prime?WHITE:"auto"} !important;
    color: ${props=>props.prime?BLUE:"auto"} !important;

}

>svg{
    width: 100% !important;
    height: 25% !important;
    position: absolute;
    left:0;
    top:0%;
    z-index: -1;
    >path{
        fill: ${props=>props.prime?WHITE:"auto"}
    }

}
>button{
    width: fit-content;
    margin:auto;
    margin-top: 5vh;
}

@media ${device.laptopSmall}{
    
}
`


const Price = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 25%;
*{
    color: ${WHITE};
    width: fit-content;
    color: ${props=>props.prime?BLUE:"auto"} !important;
}
>p{
    font-weight: 500;
    font-size: 1.3rem;
}
>div{
    justify-self: flex-end;
    align-self: flex-end;
    display: flex;
    align-items: center;
    >*{

        font-weight: bold;
    }
}
`


const PointsContainer = styled.div`
display: grid;
grid-gap: 10px;
margin-top: 10%;
grid-auto-flow: row;`

const Point = styled.div`
display: flex;
align-items:center;
>*{
    margin-left: 10px;
    color: ${BLUE};
    line-height: 2rem;
}
`
const PricePlans = () => {
    
  return (
    <Container>
       
        <GridContainer>
            <PricePlan  name="Starter" price={"5"}></PricePlan>
            <PricePlan prime name="Intermeddiate" price={"10"}></PricePlan>
            <PricePlan  name="Advanced" price={"20"}></PricePlan>
        </GridContainer>
    </Container>
  )
}

export default PricePlans



const PricePlan = ({price, name, prime}) => {
    return(
        <PricePlanContainer prime={prime} >
            {waveSvg}
            <Price prime={prime}>
                <p>{name}</p>
                <div >
                    <h4 className="h2">{price}</h4>
                    <p className="h5">$</p>
                </div>
            </Price>
            <PointsContainer>
                <Point>
                    {check}
                    <p>1 user up to 2 connected calendars</p>
                </Point>
                <Point>
                    {check}
                    <p>Up to 50 responses</p>
                </Point>
                <Point>
                    {check}
                    <p>Up to 10 survey results archived</p>
                </Point>
                <Point>
                    {check}
                    <p>Standard email & chat</p>
                </Point>
                <Point>
                    {check}
                    <p>Standard email & chat</p>
                </Point>
 
            </PointsContainer>
            <Button>Get Started</Button>
        </PricePlanContainer>
    )
}