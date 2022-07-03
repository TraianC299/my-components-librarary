import React, { useEffect, useState } from 'react'
import CircleButton from '../Buttons/CircleButton'
import styled from "styled-components"
import OutsideClick from "../Utilities/OutsideClick"
import { DARKBLUE, LIGHTGREY, BLUE, BLACK } from '../../Constants'

const closeSvg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.61433 0.0978279C1.59669 0.297484 0.710313 0.990322 0.268788 1.93097C0.0558509 2.3846 0.00948793 2.62342 0.00948793 3.26683C0.00929231 4.77832 -0.652896 4.02775 10.52 15.181L20.4024 25.046L10.4406 35.0098C2.34505 43.1071 0.435852 45.0653 0.249715 45.4622C-0.0769781 46.159 -0.0842162 47.4063 0.234456 48.0995C0.519188 48.719 1.14166 49.3627 1.77001 49.6873C2.47856 50.0533 3.60389 50.1043 4.41094 49.8071C4.97815 49.598 5.33233 49.2571 14.9993 39.6158L25.0009 29.6409L34.953 39.5649C42.9467 47.5359 45.0015 49.5348 45.3943 49.7222C45.8047 49.9179 46.0328 49.9552 46.8126 49.954C47.6264 49.9527 47.803 49.9205 48.2347 49.6941C48.8339 49.38 49.4949 48.6843 49.7798 48.0679C50.0848 47.408 50.0709 46.1442 49.7511 45.4622C49.565 45.0653 47.6558 43.1071 39.5603 35.0098L29.5985 25.046L39.4808 15.181C50.6537 4.02775 49.9915 4.77832 49.9914 3.26683C49.9914 2.62694 49.9448 2.38489 49.7376 1.94611C48.9456 0.268864 46.9593 -0.422509 45.2996 0.401415C45.0412 0.529668 41.4738 4.02053 34.9528 10.5261L25.0004 20.455L15.048 10.5261C8.52708 4.02053 4.95967 0.529668 4.70125 0.401415C4.37025 0.237118 3.28307 -0.0327692 3.09693 0.00327445C3.06651 0.0091352 2.84927 0.0516256 2.61433 0.0978279Z" fill="black"/>
</svg>

const calendarSvg = <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3488 0.166653C9.86496 0.393118 9.46594 0.851224 9.33176 1.33433C9.27629 1.53404 9.23068 2.14341 9.23039 2.68833L9.22981 3.67906L7.30109 3.72261C5.14231 3.77124 4.57951 3.89019 3.37043 4.55298C2.3966 5.08687 1.24856 6.29771 0.747872 7.31909C-0.0647259 8.97681 0.00128967 7.25005 0.00128967 26.844C0.00128967 46.4022 -0.0616987 44.717 0.729317 46.3313C1.45666 47.816 2.86682 49.0427 4.53078 49.6384L5.37238 49.9397H24.0736H42.7747L43.556 49.6647C45.7501 48.8924 47.3698 47.1496 47.9744 44.9104C48.1349 44.3164 48.1458 43.1586 48.1458 26.844C48.1458 7.24449 48.2123 8.97798 47.3962 7.31275C46.8225 6.14214 45.6595 4.98267 44.4837 4.40894C43.3386 3.85015 42.4993 3.69947 40.5327 3.69947H38.9173L38.9167 2.69849C38.9161 1.50952 38.8114 1.07378 38.4192 0.627005C37.5724 -0.33735 35.9573 -0.133835 35.4051 1.00679C35.24 1.3479 35.2064 1.6104 35.2064 2.55845V3.69947H24.0813H12.9563L12.924 2.44673C12.8949 1.31197 12.8697 1.16177 12.6566 0.851028C12.1226 0.0727081 11.1596 -0.212839 10.3488 0.166653ZM9.24719 8.55786C9.29133 9.89302 9.44016 10.3059 10.0313 10.7341C10.7422 11.2492 11.647 11.1986 12.3218 10.6061C12.8455 10.1462 12.9407 9.82779 12.9407 8.53657V7.4104H24.0736H35.2064V8.53657C35.2064 9.82779 35.3016 10.1462 35.8253 10.6061C36.5139 11.2106 37.4608 11.2409 38.1938 10.6817C38.7114 10.2869 38.8572 9.84829 38.8999 8.55786L38.9379 7.4104H40.4864C41.8069 7.4104 42.1136 7.4398 42.5684 7.61001C43.2403 7.86138 43.8405 8.43745 44.176 9.15308L44.4349 9.70533V26.844V43.9827L44.1797 44.5198C43.8739 45.1634 43.3472 45.7061 42.7357 46.0074L42.2864 46.2288H24.0736H5.86066L5.40881 46.0061C4.7841 45.6984 4.26877 45.1693 3.96721 44.5263L3.71223 43.9827V26.844C3.71223 10.5633 3.72102 9.68579 3.88762 9.3147C4.16828 8.6898 4.52873 8.22661 4.95266 7.94605C5.65227 7.48306 5.94846 7.42466 7.63264 7.41724L9.2092 7.4104L9.24719 8.55786ZM12.3824 16.9325C10.8974 17.6838 10.6813 19.6197 11.9601 20.7143C13.8906 22.3668 16.6623 20.0694 15.4145 17.8509C14.9997 17.1136 14.4078 16.7531 13.5383 16.7082C12.9927 16.6799 12.8124 16.7149 12.3824 16.9325ZM22.6575 16.8733C21.8335 17.2556 21.3392 18.0465 21.3392 18.9827C21.3392 19.9462 21.8366 20.6988 22.7265 21.0816C23.6224 21.467 24.5775 21.2634 25.2834 20.5365C26.3496 19.4386 26.0071 17.5672 24.6221 16.9223C24.003 16.634 23.2154 16.6144 22.6575 16.8733ZM32.7874 16.8891C30.7255 17.9356 31.3095 21.0677 33.6019 21.2578C35.0569 21.3785 36.1774 20.2367 36.0584 18.7548C35.9993 18.0181 35.6878 17.4986 35.0266 17.0338C34.6723 16.7848 34.5005 16.735 33.9063 16.7085C33.338 16.6834 33.125 16.7177 32.7874 16.8891ZM23.2435 25.9676C22.0474 26.146 21.2742 27.1585 21.3559 28.4397C21.4049 29.2096 21.7257 29.7492 22.3821 30.1655C22.9393 30.5188 23.5215 30.6122 24.1922 30.4556C24.8717 30.297 25.6323 29.5568 25.8258 28.8659C26.2807 27.241 24.923 25.717 23.2435 25.9676ZM33.3827 25.9782C32.81 26.0792 32.4468 26.2888 32.058 26.743C30.9911 27.9894 31.5068 29.8612 33.0687 30.4123C34.5279 30.9271 36.0853 29.8044 36.0853 28.2377C36.0853 27.6062 35.8871 27.0997 35.4699 26.6648C34.916 26.0873 34.1652 25.8403 33.3827 25.9782ZM12.377 26.1717C11.2887 26.7105 10.8085 28.1464 11.3521 29.2366C11.7567 30.048 12.4987 30.4989 13.429 30.4989C14.5211 30.4989 15.3274 29.8886 15.6355 28.8288C15.7711 28.3621 15.778 28.1935 15.6794 27.7528C15.5334 27.1004 15.0772 26.4904 14.5123 26.1922C13.9327 25.8864 12.9723 25.8771 12.377 26.1717ZM12.7454 35.2898C12.1785 35.4723 11.6231 35.9361 11.3578 36.4482C11.0513 37.0399 11.0623 37.9804 11.3825 38.5594C11.6991 39.1318 12.3206 39.5935 12.9706 39.7389C14.5469 40.0917 16.0321 38.6064 15.6794 37.0301C15.3835 35.7078 13.9985 34.8863 12.7454 35.2898ZM22.9349 35.2801C22.3322 35.4756 21.9531 35.7865 21.63 36.3499C21.3911 36.7665 21.341 36.9638 21.341 37.4885C21.341 40.0126 24.6783 40.6815 25.7258 38.3674C26.5053 36.6455 24.7411 34.694 22.9349 35.2801ZM33.3021 35.2312C31.5927 35.676 30.9164 37.7051 32.0568 38.9673C32.5639 39.5287 33.0819 39.7678 33.7904 39.7678C36.2054 39.7678 36.9799 36.5419 34.8283 35.4442C34.3677 35.2091 33.7291 35.1201 33.3021 35.2312Z" fill="black"/>
</svg>

const chevronLeftSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1119 0.0964987C23.8855 0.17062 23.512 0.343276 23.2818 0.48019C23.0517 0.617202 17.8271 5.77482 11.6717 11.9417C2.62988 21.0006 0.435644 23.2481 0.24834 23.6426C-0.0826172 24.3398 -0.0828123 25.5815 0.247949 26.2793C0.58877 26.9982 22.9224 49.3351 23.6445 49.6794C24.0403 49.8681 24.2899 49.9121 24.9629 49.9121C25.673 49.9121 25.8729 49.8729 26.3458 49.6406C26.9829 49.3277 27.5315 48.7645 27.8294 48.1174C28.1367 47.4498 28.1252 46.1863 27.8059 45.5176C27.6185 45.1253 25.6029 43.0568 17.553 34.9951L7.5335 24.961L17.5517 14.9268C28.759 3.70148 28.038 4.51623 28.0302 3.08595C28.0272 2.54728 27.9684 2.22199 27.8075 1.85626C27.537 1.24123 26.8224 0.524624 26.2105 0.254995C25.6158 -0.00701693 24.6509 -0.0799661 24.1119 0.0964987Z" fill="black"/>
</svg>


const chevronRightSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2498 0.105519C1.63066 0.310695 1.30293 0.514503 0.86289 0.968019C0.254199 1.59526 0.0075198 2.21079 0.00878934 3.09985C0.0107425 4.53579 -0.710351 3.72124 10.4911 14.9407L20.5093 24.9749L10.4911 35.009C-0.710351 46.2285 0.0107425 45.4139 0.00878934 46.8499C0.0075198 47.7558 0.256446 48.3594 0.902637 49.0173C1.52383 49.6499 2.15576 49.9115 3.08164 49.9196C4.54111 49.9324 3.66572 50.7177 16.3223 38.0404C25.4816 28.8659 27.6049 26.6911 27.7911 26.2932C28.1213 25.5879 28.1231 24.3454 27.7951 23.6565C27.6075 23.2625 25.3901 20.9921 16.3223 11.9093C6.30908 1.87974 5.01572 0.617726 4.47676 0.350636C3.76895 -4.76139e-05 2.86768 -0.0991687 2.2498 0.105519Z" fill="black"/>
</svg>






export const InputLikeButton = styled.div`
border: 0.5px solid ${LIGHTGREY};
border-radius: 5px;
height: 58px;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 10px;
min-width: 300px;
&.selected{
    border: 2px solid ${BLUE};
}
`
const DatePickerContainer = styled.div`
position: absolute;
top: 100%;
left:0;
transition: 0.3s ease-in;
transform-origin: top left;
z-index:98;
`

const InputLikeButtonStyle= styled(InputLikeButton)`
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
const DatePickerInput = ({ min}) => {
    const [open, setOpen] = useState()
    const [value, setValue] = useState(new Date())


  return (
    <OutsideClick value={open} setValue={setOpen}>
        <InputLikeButtonStyle className={`${open?"selected":""}`} style={{position: 'relative'}} >
                        <div onClick={()=>setOpen(previous=>!previous)}>
                            <p >{value?value.toLocaleString("ro-RO", {year:"numeric", month: 'long', day: 'numeric' }):"Alegeti Data"}</p>
                            <CircleButton color={LIGHTGREY} icon={open?closeSvg:calendarSvg}></CircleButton>
                        </div>
        
                            {open?
                            <DatePickerContainer>
                                <DatePicker min={min} value={value} setValue={setValue}></DatePicker>
                            </DatePickerContainer>:null}
                        </InputLikeButtonStyle>
    </OutsideClick>
  )
}

export default DatePickerInput


const CalendarContainer = styled.div`
background: white;
width: fit-content;
border-radius: 5px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
background-color: white;
z-index: 99;
`
const MonthContainer = styled.div`
background: ${BLACK};
display: flex;
justify-content: space-between;
align-items: center;
height: 7vh;
padding: 10px;

`


const Days = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
>p{
    font-weight: 500;
}
`

const Dates = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
flex-grow: 1;
grid-gap: 10px;
height: 34.13vh;
width: 40vh;
padding: 10px;
background-color: white;
`

const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
>*{
    margin-left: 20px;
}`

const DateInstance = styled.button`
border: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: 0.3s;
cursor: pointer;
background-color: ${props => props.selected? BLUE:"transparent"};
box-shadow: ${props => props.selected? "5px 5px 10px rgba(174, 174, 192, 0.4), -5px -5px 10px #FFFFFF":"none"};

:hover{
    box-shadow: ${props => props.disabled?"5px 5px 10px rgba(174, 174, 192, 0.4), -5px -5px 10px #FFFFFF":"none"}
}

>p{
    font-weight: 500;
}
`

const Month = styled.div`
>p{
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
}
`


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
const DatePicker = ({value, setValue, min})=>{

   


const [datesArray, setDatesArray] = React.useState([])
const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth())
const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear())
const firstDayOfMonth = () => {
    const firstDay = new Date(new Date().getFullYear(), selectedMonth, 1);
    var lastDay = new Date(new Date().getFullYear(), selectedMonth + 1, 0);
   let array = firstDay.getDay()==0?new Array(6):new Array(firstDay.getDay())
   array = [...array, ...range(1, lastDay.getDate())]
   setDatesArray(previous=>[...array])

};

// useDidMountEffect(()=>{

//     setValue(null)
// },[selectedMonth])

useEffect(()=>{
    firstDayOfMonth(selectedMonth)

},[selectedMonth])



useEffect(()=>{
    if(selectedMonth>11){
        setSelectedMonth(0)
        setSelectedYear(selectedYear+1)
    }else if(selectedMonth<0){
        setSelectedMonth(11)
        setSelectedYear(selectedYear-1)
    }
},[selectedMonth])

    return(
        <CalendarContainer>
            <MonthContainer>
            
                <Month><p>{new Date(selectedYear, selectedMonth).toLocaleString("ro-RO",{month: 'long', year:"numeric"})}</p></Month>
                <Buttons>
                    <CircleButton color="#F5F5F5" onClick={()=>selectedYear<=min.getFullYear() && selectedMonth<=min.getMonth()?null:setSelectedMonth(previous=>--previous)} icon={chevronLeftSvg}></CircleButton>
                    <CircleButton color="#F5F5F5" onClick={()=>setSelectedMonth(previous=>++previous)} icon={chevronRightSvg}></CircleButton>
                </Buttons>
            </MonthContainer>
            <Days>
                <p>S</p>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
            </Days>
            <Dates>
            {datesArray.map(date => <DateInstance 
            disabled={selectedMonth<=min&&min.getFullYear() && selectedMonth<=min.getMonth() && date<min.getDate()} 
            selected={value && value.getFullYear()==selectedYear && value.getMonth()==selectedMonth && value.getDate()==date} 
            onClick={()=>setValue(new Date(selectedYear,selectedMonth,date))} 
            style={{opacity: date?1:0}}><p style={{color:selectedMonth<=min&&min.getFullYear() && selectedMonth<=min&&min.getMonth() && date<min&&min.getDate()?LIGHTGREY:DARKBLUE}}>{date}</p></DateInstance>)}
                
            </Dates>
        </CalendarContainer>
    )
}

