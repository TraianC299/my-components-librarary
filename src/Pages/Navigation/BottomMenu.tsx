import React, { useRef, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../Constants'
// import { device } from '../../Styles'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    position: fixed;
    bottom:0;
    left:0;
    background: white;
    padding-left: 10vw;
    padding-right: 10vw;
    transition: 0.2s;
    z-index:999;

    @media ${device.laptopSmall}{
        height: 50vh;
        flex-direction: column;
        width: fit-content;
        top: 5vh;
        left: 15vw;
        padding: 20px;
        border: 3px solid black;
    }
    `

const MenuItem = styled(NavLink)`
    display: flex;
    height: 20px;
    width :20px;
    >div{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 2px solid black;
        overflow: hidden;

        >img{
            height: 100%;
            overflow: hidden;
        }
    }`
const BottomMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    let lastScrollTop = useRef(1).current;



  // const showMenuFunction = (e) => {
  //   var st = window.pageYOffset || document.documentElement.scrollTop;  
  //   if (st > lastScrollTop){
  //      setShowMenu(true);
  //   } else {
  //       setShowMenu(false);

  //   }
  //   lastScrollTop = st;
  // }

  // useEffect(()=>{
  //   document.addEventListener('scroll', showMenuFunction)
  // },[])


    return (
        <Container  style={{marginBottom: showMenu?"-10vh":"0vh"}}>
            <MenuItem  to="/">
            {({ isActive }) => (
              isActive?
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L0 6V18H16V6L8 0Z" fill="#323232"/>
              </svg>
                :
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.5L14 7V16H2V7L8 2.5ZM8 0L0 6V18H16V6L8 0Z" fill="#323232"/>
              </svg>
            )}
            
</MenuItem>
            <MenuItem to="/add-post">
            {({ isActive }) => (
              isActive?
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V1.99992C20 0.899922 19.1 0 18 0ZM11 12H13V9H16V7H13V4H11V7H8V9H11V12Z" fill="#323232"/>
<rect x="11" y="4" width="2" height="8" fill="white"/>
<rect x="16" y="7" width="2" height="8" transform="rotate(90 16 7)" fill="white"/>
</svg>

                :
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H6V2H18V14ZM11 12H13V9H16V7H13V4H11V7H8V9H11V12Z" fill="#323232"/>
                </svg>
            )}
            
</MenuItem>
            <MenuItem to="/search"> 
            {({ isActive }) => (
              isActive?
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.51 11.01H11.72L11.44 10.74C12.42 9.6 13.01 8.12 13.01 6.51C13.01 2.92 10.1 0.0100002 6.51 0.0100002C2.92 0.0100002 0.0100002 2.92 0.0100002 6.51C0.0100002 10.1 2.92 13.01 6.51 13.01C8.12 13.01 9.6 12.42 10.74 11.44L11.01 11.72V12.51L16.01 17.5L17.5 16.01L12.51 11.01ZM6.51 10.01C5 10 3.01 9 3.01 6.51C3.01 4.5 4.5 3 6.51 3.01C8 3.01 10.01 4.02 10.01 6.51C10.01 8 9 10.01 6.51 10.01Z" fill="#323232"/>
</svg>


                :
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#323232"/>
</svg>
            )}
            
</MenuItem>

<MenuItem to="/profile">
    <div >
        <img src={"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="}></img>
    </div>
</MenuItem>
        </Container>
    )
}




export default BottomMenu