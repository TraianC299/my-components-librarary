import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  LIGHTGREY } from '../../Constants'
import CircleButton from '../Buttons/CircleButton'
import OutsideClick from '../Utilities/OutsideClick'
import Input from "./Input"

const Container = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
position: relative;
background-color: transparent;
min-width:300px;
>input{
    padding-bottom: -10px;
}
>.time-picker-button{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    
}
`

const StyledAutocompleteContainer = styled.div`
background: #fff;
z-index: 2;
width: 100%;
height: fit-content;
position: absolute;
top:105%;
mix-blend-mode: normal;
filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
max-height: 25vh;
overflow: scroll;
background-color: transparent;
border-radius: 5px;

`
const TagContainer = styled.div`
text-align: left;
width: 100%;
display: flex;
align-items: center;
padding-left: 10px;
background-color: white;
min-height: 5vh;
cursor: pointer;
:hover{
    background-color: ${LIGHTGREY};
}
>img{
    height: 3vh;
    width: 3vh;
    border-radius: 50%;
    margin-right: 10px;
}
`


const optionsVar = [
    {name:"09:00", id:9},
    {name:"10:00", id:10},
    {name:"11:00", id:11},
    {name:"12:00", id:12},
    {name:"13:00", id:13},
    {name:"14:00", id:14},
    {name:"15:00", id:15},
    {name:"16:00", id:16},
    {name:"17:00", id:17},
    {name:"18:00", id:18},
    {name:"19:00", id:19},
    {name:"20:00", id:20},
    {name:"21:00", id:21},
]

const OptionSelector = ({options=optionsVar, value, setValue, noAddOption, withImage, label, ...props}) => {
    const [relevantOptions, setRelevantOptions] = React.useState([...options])
    const [focus, setFocus] = React.useState(false)
    const [inputValue, setInputValue] = useState(value?value.name:"")

    // useEffect(()=>{
    //     if(inputValue){
    //         setRelevantOptions(previous=>options.filter(element => {
    //             return element.name.includes(inputValue)
    //         }))
    //     }else{
    //         setRelevantOptions([...options])
    //     }
    // },[inputValue])


    useEffect(()=>{
        setRelevantOptions([...options])
    },[options])






    const complete = (value, id) => {
        setFocus(false)
        setInputValue(value.name)
        setValue({name: value, id: id})
    }
   

    return (
        <OutsideClick value={focus} setValue={setFocus}>
            <Container >
            <Input label={label} value={inputValue}   onChange={(e)=>setInputValue(e.target.value)}  onFocusCapture={()=>setFocus(true)}></Input>
            {focus?<StyledAutocompleteContainer style={{pointerEvents:focus?"all":"none", opacity:focus?"1":"0"}} styledHeight={relevantOptions.length}>
                {relevantOptions.map(option => <TagContainer onClick={()=>complete(option, option.id)} key={option.id}>{withImage?<img src={option.image}></img>:null}<p>{option.name}</p></TagContainer>)}
                {relevantOptions.length==0 && <TagContainer onClick={()=>noAddOption?null:complete(inputValue)} ><p>{noAddOption?"No such option":"Add new tag: "+ inputValue}</p></TagContainer>}
            </StyledAutocompleteContainer>:null}
            <CircleButton className="time-picker-button" onClick={()=>setFocus(previous=>!previous)} color={LIGHTGREY} icon={focus?closeSvg:chevronDown}></CircleButton>
            </Container>
        </OutsideClick>
    )
}

export default OptionSelector



const closeSvg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.61433 0.0978279C1.59669 0.297484 0.710313 0.990322 0.268788 1.93097C0.0558509 2.3846 0.00948793 2.62342 0.00948793 3.26683C0.00929231 4.77832 -0.652896 4.02775 10.52 15.181L20.4024 25.046L10.4406 35.0098C2.34505 43.1071 0.435852 45.0653 0.249715 45.4622C-0.0769781 46.159 -0.0842162 47.4063 0.234456 48.0995C0.519188 48.719 1.14166 49.3627 1.77001 49.6873C2.47856 50.0533 3.60389 50.1043 4.41094 49.8071C4.97815 49.598 5.33233 49.2571 14.9993 39.6158L25.0009 29.6409L34.953 39.5649C42.9467 47.5359 45.0015 49.5348 45.3943 49.7222C45.8047 49.9179 46.0328 49.9552 46.8126 49.954C47.6264 49.9527 47.803 49.9205 48.2347 49.6941C48.8339 49.38 49.4949 48.6843 49.7798 48.0679C50.0848 47.408 50.0709 46.1442 49.7511 45.4622C49.565 45.0653 47.6558 43.1071 39.5603 35.0098L29.5985 25.046L39.4808 15.181C50.6537 4.02775 49.9915 4.77832 49.9914 3.26683C49.9914 2.62694 49.9448 2.38489 49.7376 1.94611C48.9456 0.268864 46.9593 -0.422509 45.2996 0.401415C45.0412 0.529668 41.4738 4.02053 34.9528 10.5261L25.0004 20.455L15.048 10.5261C8.52708 4.02053 4.95967 0.529668 4.70125 0.401415C4.37025 0.237118 3.28307 -0.0327692 3.09693 0.00327445C3.06651 0.0091352 2.84927 0.0516256 2.61433 0.0978279Z" fill="black"/>
</svg>


const chevronDown = <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.67277 0.0860088C1.66075 0.33693 0.742724 1.14424 0.283663 2.18704C0.0528127 2.71152 0.0122182 2.9363 0.0142724 3.67939C0.018772 5.3252 -0.920184 4.21365 11.6802 17.4901C19.2797 25.4973 23.0268 29.376 23.3302 29.5491C24.0387 29.9533 24.8754 30.0953 25.6115 29.9363C25.9478 29.8636 26.4242 29.6894 26.6701 29.5491C26.9735 29.376 30.7207 25.4973 38.3201 17.4901C50.9216 4.21252 49.9823 5.32448 49.9852 3.67939C49.9864 2.93435 49.9453 2.70936 49.708 2.16295C48.8869 0.272502 46.6988 -0.527194 44.9061 0.408048C44.6513 0.540919 41.1117 4.18885 34.7575 10.8671L25.0002 21.1221L15.2428 10.8671C8.86378 4.16271 5.34996 0.541743 5.09416 0.408769C4.34957 0.0217863 3.42724 -0.101101 2.67277 0.0860088Z" fill="black"/>
</svg>




