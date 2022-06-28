import styled from "styled-components"
import React, { useState, useRef } from 'react'
import { BLACK, DARKBLUE, LIGHTGREY, BLUE } from '../../Constants'
import OutsideClick from '../Utilities/OutsideClick'
import CircleButton from "../Buttons/CircleButton"

const clockSvg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.025 0.0965005C14.6924 0.773906 7.26712 5.53503 3.15443 12.8374C-0.299958 18.9708 -0.955272 26.4789 1.37676 33.2035C2.60807 36.754 4.45013 39.7198 7.13119 42.4682C14.6432 50.1692 26.2325 52.1889 35.9245 47.4862C41.1542 44.9486 45.4997 40.4735 47.8156 35.2404C51.6283 26.6251 50.3942 16.8753 44.5491 9.43531C43.177 7.68858 40.4418 5.21779 38.5363 4.00338C36.4109 2.649 33.7791 1.49051 31.4476 0.883203C29.6763 0.421728 28.4991 0.224759 26.703 0.0891501C25.1063 -0.0314386 24.5849 -0.0303733 23.025 0.0965005ZM28.2488 4.82109C30.4061 5.2049 31.9504 5.69525 33.8301 6.59327C41.7209 10.3629 46.3253 18.6913 45.3098 27.3581C44.4184 34.9677 39.3444 41.4577 32.1932 44.135C23.1911 47.5053 13.14 44.22 7.86678 36.1836C6.34358 33.8624 5.32868 31.2449 4.77496 28.2096C4.51655 26.7935 4.51655 23.2342 4.77496 21.818C5.18433 19.574 5.6614 18.0716 6.56287 16.1876C9.61247 9.81369 15.5945 5.5606 22.7585 4.6728C23.8987 4.53144 27.1081 4.61815 28.2488 4.82109ZM23.9312 9.38098C23.6673 9.52181 23.3075 9.84118 23.1316 10.0907L22.8118 10.5444L22.7798 17.9656C22.7566 23.3492 22.7815 25.5036 22.871 25.8128C22.9729 26.1653 23.623 26.87 26.6321 29.8901C30.5073 33.7796 30.8642 34.0686 31.7911 34.0686C33.4381 34.0686 34.5189 32.3808 33.8375 30.8728C33.679 30.5218 32.767 29.5379 30.4308 27.1976L27.2407 24.0018L27.2117 17.2815L27.1827 10.5611L26.8912 10.1441C26.425 9.47707 25.9344 9.20595 25.1155 9.16238C24.53 9.13128 24.3299 9.16814 23.9312 9.38098Z" fill="black"/>
</svg>


const closeSvg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.61433 0.0978279C1.59669 0.297484 0.710313 0.990322 0.268788 1.93097C0.0558509 2.3846 0.00948793 2.62342 0.00948793 3.26683C0.00929231 4.77832 -0.652896 4.02775 10.52 15.181L20.4024 25.046L10.4406 35.0098C2.34505 43.1071 0.435852 45.0653 0.249715 45.4622C-0.0769781 46.159 -0.0842162 47.4063 0.234456 48.0995C0.519188 48.719 1.14166 49.3627 1.77001 49.6873C2.47856 50.0533 3.60389 50.1043 4.41094 49.8071C4.97815 49.598 5.33233 49.2571 14.9993 39.6158L25.0009 29.6409L34.953 39.5649C42.9467 47.5359 45.0015 49.5348 45.3943 49.7222C45.8047 49.9179 46.0328 49.9552 46.8126 49.954C47.6264 49.9527 47.803 49.9205 48.2347 49.6941C48.8339 49.38 49.4949 48.6843 49.7798 48.0679C50.0848 47.408 50.0709 46.1442 49.7511 45.4622C49.565 45.0653 47.6558 43.1071 39.5603 35.0098L29.5985 25.046L39.4808 15.181C50.6537 4.02775 49.9915 4.77832 49.9914 3.26683C49.9914 2.62694 49.9448 2.38489 49.7376 1.94611C48.9456 0.268864 46.9593 -0.422509 45.2996 0.401415C45.0412 0.529668 41.4738 4.02053 34.9528 10.5261L25.0004 20.455L15.048 10.5261C8.52708 4.02053 4.95967 0.529668 4.70125 0.401415C4.37025 0.237118 3.28307 -0.0327692 3.09693 0.00327445C3.06651 0.0091352 2.84927 0.0516256 2.61433 0.0978279Z" fill="black"/>
</svg>
const DatePickerContainer = styled.div`
position: absolute;
top: 105%;
transition: 0.3s ease-in;
transform-origin: top left;
z-index:999;
height: fit-content;
`

const InputLikeButtonStyle= styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
position:relative;
height: fit-content;
min-width:300px;
border-radius: 5px;
  height: 58px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: 0.5px solid ${DARKBLUE};
>div:first-child{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
   
    :hover{
        >div{
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
        }
    }
}
`

const TimePickerInput = ({min, max}) => {
  const [open, setOpen] = useState()
  const [selectedTime, setSelectedTime] = useState(new Date())

  return (
    <OutsideClick value={open} setValue={setOpen}>
    <InputLikeButtonStyle  style={{position: 'relative'}} >
                    <div onClick={()=>setOpen(previous=>!previous)}>
                        <p >{selectedTime?selectedTime.toLocaleString("ro-RO",{hour: '2-digit', minute: '2-digit' }):"Alegeti ora"}</p>
                        <CircleButton color={LIGHTGREY} icon={open?closeSvg:clockSvg}></CircleButton>
                    </div>
    
                        {open?<DatePickerContainer >
                            <TimePicker min={min} max={max} selectedTime={selectedTime} setSelectedTime={setSelectedTime}></TimePicker>
                        </DatePickerContainer>:null}
                    </InputLikeButtonStyle>
</OutsideClick>
  )
}

export default TimePickerInput







const TimePickerContainer = styled.div`
background: white;
transform-origin: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;border-radius: 5px;
padding: 10px;

`

const TimeInstance = styled.button`
border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform-origin: center;
    cursor:pointer;
    z-index: 2;
    background: ${props => props.selected? BLUE:"none"};
    transition: 0.2s;

>p{
  font-weight: 500;
}

    :hover{
    box-shadow: 5px 5px 10px rgba(174, 174, 192, 0.4), -5px -5px 10px #FFFFFF;

}

`

const ClockContainer = styled.div`
width: 260px;
height: 260px;
border-radius: 50%;
background-color: ${LIGHTGREY};
margin: 0 auto;
position: relative;
display: flex;
align-items: center;
justify-content: center;
transition: 0.2s;
`


const SmallClockContainer = styled.div`
width: 180px;
  height: 180px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  box-shadow: ${props => props.selected? "5px 5px 10px rgba(174, 174, 192, 0.4), -5px -5px 10px #FFFFFF":"none"};


`

const SmallTimeInstance = styled(TimeInstance)``

const Span = styled.span`
height: 30px;
width: 30px;
background-color: ${BLUE};
border-radius: 33px;
position: absolute;
top: calc(50% - 15px);
left: calc(50% - 15px);
z-index:1;
@keyframes clickrotate {
  0% {
    transform: translate(135px, 0);
  }
  25%{

  }
  50%{

  }

75%{

    }

  100%{

  }
}
`

const sin = (x)=> {
    return(Math.sin(x/180*Math.PI))
}


const Line = styled.div`
position: absolute;
  left: 50%;
  top: 50%;
  width: 0.5px;
  transform: rotate(50deg);
  height: 165px;
  background-color: ${BLUE};
  z-index: 2;
  transform-origin: top;
  transition: 0.1s;

`

const TimePicker = ({selectedTime, setSelectedTime, min, max}) => {
    const array = [1,2,3,4,5,6,7,8,9,10,11, 12]

    const deriveComponents=(array) => {
        const matrix = [[1,-1], [1,1], [-1,1], [-1,-1]]
        const finalResult = []
        const arrays = []
        for(let i=0; i<array.length; i=i+3){
            arrays.push(array.slice(i, i+3))
        }  
         arrays.forEach((array, index)=>{
            array.forEach((timeInstance, indexInstance)=>{
                finalResult.push({x:(index%2==0?indexInstance+1:2-indexInstance)*30*matrix[index][0], y:(index%2==0?2-indexInstance:indexInstance+1)*30*matrix[index][1]})
           })
        })

        return finalResult
        
    }


    

    return(
        <TimePickerContainer>
            <ClockContainer>
                <Span></Span>
                <Line style={{transform: `rotate(${360/12*(selectedTime.getHours()>12?selectedTime.getHours()-12:selectedTime.getHours())+180}deg)`, height:selectedTime.getHours()>12?"70px":"115px"}}></Line>
                {deriveComponents(array).map((timeInstance, index)=><TimeInstance 
                onClick={()=>setSelectedTime(new Date(0,0,0,index+1))} 
                disabled={min?min.getHours()>index+1:false || max?index+1>max.getHours():false} 
                selected={selectedTime.getHours()==index+1} 
                style={{transform:`translate(${sin(timeInstance.x)*115}px, ${sin(timeInstance.y)*115}px)`}}>
                  <p style={{color:min && min.getHours()>index+1 || index+1>max&&max.getHours()?LIGHTGREY:BLACK}}>{index+1}</p>
                </TimeInstance>)}

                <SmallClockContainer>
                    {deriveComponents(array).map((timeInstance, index)=><SmallTimeInstance 
                    selected={selectedTime.getHours()==index+13} 
                    disabled={min&&min.getHours()>index+13 || index+13>max&&max.getHours()} 
                    onClick={()=>setSelectedTime(new Date(0,0,0,index+13))} 
                    style={{transform:`translate(${sin(timeInstance.x)*80}px, ${sin(timeInstance.y)*80}px)`}}>
                      <p style={{color:min&&min.getHours()>index+13 || index+13>max&&max.getHours()?LIGHTGREY:BLACK}}>{(index+13)}</p>
                  </SmallTimeInstance>)}
                </SmallClockContainer> 


            </ClockContainer>
        </TimePickerContainer>
    )
}


