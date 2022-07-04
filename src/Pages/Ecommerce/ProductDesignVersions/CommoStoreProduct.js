

import React from 'react'
import styled from 'styled-components'
import { BLACK, DARKBLUE, LIGHTGREY, BLUE } from '../../../Constants'


const Container = styled.div`
width: calc(100% - 4px);
max-width: 400px;
margin:auto;
height: 100%;
border-radius: 10px;
display: grid;
grid-template-columns: 150px 1fr;
align-items: center;
justify-content: flex-start;
height: 150px;
box-shadow: 0px 0px 0px 1px ${LIGHTGREY};
:hover{
    /* border: 1px solid ${BLACK}; */
}
`
const Image = styled.picture`
height: 100%;
padding: 5px;
border-radius: 8px;
width: 100%;
overflow: hidden;
>img{
    border-radius: 8px;
    height: 100%;
    width: 100%;
    object-fit: cover;
}`


const Info = styled.div`
padding: 10px;
text-align: left;
height: 100%;
position: relative;

>h3{
    font-size: 1.2rem;
    font-weight: 600;
    color:${DARKBLUE};

}
>p{
    display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size: 1rem;
color:${DARKBLUE};
}
>span{
    position:absolute;
    right: 10px;
    bottom: 10px;
    font-weight: 700;
    color:${DARKBLUE};

}
`
const CommoStoreProduct = ({image, description, title, id, setSelectedProducts, selectedProducts, price, currency}) => {
    return (
        <Container 
        // style={{boxShadow:selectedProducts.map(el=>el.id).includes(id)?`0px 0px 0px 2px ${BLUE}`:`0px 0px 0px 0.5px ${LIGHTGREY}`}} 
        // onClick={()=>selectedProducts.map(el=>el.id).includes(id)?setSelectedProducts(previous=>[...previous.filter(item=>item.id!=id)])
        // :
        // setSelectedProducts(previous=>[...previous, {id, quantity:1, price}])}
        >
               
                <Image>
                    <img height={150}  width={150} src={image}></img>
                </Image>
            <Info>
                <h3>{title}</h3>
                <p>{description}</p>
                <span><p>{price}{currency}</p></span>
            </Info>
        </Container>
    )
}


export default CommoStoreProduct