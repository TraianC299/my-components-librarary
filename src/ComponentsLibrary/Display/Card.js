import React from 'react'
import styled from 'styled-components'
import { DARKBLUE, GREY } from '../../Constants'

const Container = styled.div`
max-width: 350px;
width:100%;
border-radius:10px;
overflow: hidden;
box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(0, 0, 0, 0.12);
>img{
    width: 100%;
}`

const TextContainer = styled.div`
text-align: left;
padding:20px;
>h3{
    font-weight:600;
    color: ${DARKBLUE};
    margin-bottom:0.5rem;
}
>span{
    font-size: 0.9rem;
    color: ${GREY};
    text-transform: uppercase;
}
>p{
    color: #8c8c8c;
}`
const Card = ({image}) => {
  return (
    <Container>
        <img src={image}></img>
        <TextContainer>
            <span>Destination</span>
            <h3 className='h4'>Title</h3>
            <p>Design Systems give you superpowers. By breaking-down designs into the smallest elements our workflow was sped-up dramatically. Get in touch with us to find out how a design system can supercharge your product.</p>
        </TextContainer>
    </Container>
  )
}

export default Card