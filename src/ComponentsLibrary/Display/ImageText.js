import React from 'react'
import styled from 'styled-components'
import { BLUE, DARKBLUE, device, LIGHTGREY } from '../../Constants'
// import { DARKBLUE, device, LIGHTGREY, BLUE, WHITE } from '../../../Styles'

const TextContainer = styled.div`
>span{
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
    width: 50px;
    height: 5px;
    background-color: ${BLUE};
    border-radius: 333px;
}
>h2{
        font-weight: 600;
        margin-bottom: 10px;
        color: ${BLUE};
        font-size: 2.125rem;
    }
>div{
    color:${DARKBLUE};
    font-size: 1rem;
}


@media ${device.laptopSmall}{
    >h2{
        /* font-weight: 600; */
        margin-bottom: 10px;
        color: ${BLUE};
        font-size: 3rem;
    }
}

    `

const Container = styled.div`
margin-top: 5vh;
padding: 5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
align-content: center;
justify-items: center;
>*{
    width: 100%;
}
>svg{
    margin-top: 5vh;
    height: fit-content;
}





@media ${device.laptopSmall}, ${device.tabletSmallPortrait}{
padding: 5%;
display: flex;
column-gap: 5vw;
flex-direction: ${props=>props.reverse?"row-reverse":"row"};

>*{
    width: 50%;
}

:hover{
    >svg{
    transform: scale(1.1)
    }
}
>svg{
    transition: 0.5s ease;
    margin:0;
    width: 40vw;
    height: fit-content;
}
}
`


const ImageText = ({text, svg, title, reverse, className}) => {
  return (
    <Container className={className} reverse={reverse}>
        <TextContainer>
            <h2 className="h4">{title}</h2>
            <span></span>
            <div>
                {text}
            </div>
        </TextContainer>
            {svg}



</Container>
  )
}

export default ImageText