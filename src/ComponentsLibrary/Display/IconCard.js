import React from 'react'
import styled from 'styled-components'
import { borderStyle, DARKBLUE, GREY } from '../../Constants'

const Container = styled.div`
max-width: 350px;
width:100%;
border-radius:10px;
overflow: hidden;
padding:25px;
display:flex;
flex-direction:column;
border: ${borderStyle};
transition: 0.3s ease-in-out;
cursor:pointer;
:hover{
    box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(0, 0, 0, 0.12);
}
>h3{
    font-weight:600;
    color: ${DARKBLUE};
    margin:0rem !important;
}

>p{
    color: #8c8c8c;
    font-size: 0.9rem;
    line-height: 200%;
    display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;

}
>img{
    width: 50px;
    height: 50px;
    margin-bottom:0.5rem;

}`


const Card = ({image}) => {
  return (
    <Container>
        <img src={image}></img>
        <h3 className='h6'>Title</h3>
        <p>Design Systems give you superpowers. By breaking-down designs into the smallest elements our workflow was sped-up dramatically. Get in touch with us to find out how a design system can supercharge your product.</p>
    </Container>
  )
}

export default Card