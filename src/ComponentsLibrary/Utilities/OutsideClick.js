import React, { useEffect, useRef } from 'react'

const OutsideClick = ({children, value, setValue}) => {
    const ref = useRef()


    const handleClickOutside = (event) => {
        if (ref.current.firstChild && !ref.current.firstChild.contains(event.target)) {
            setValue(false);
        }
    };
    useEffect(()=>{
        if(value){
            document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }
    },[value])
  return (
    <div ref={ref}>{children}</div>
  )
}

export default OutsideClick