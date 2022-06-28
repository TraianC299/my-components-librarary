import React from 'react'
import Button from '../../ComponentsLibrary/Buttons/Button'

const ButtonPage = () => {
  return (
    <div className='flex column' style={{gridGap:"10px"}}>
        <Button></Button>
        <Button ghost></Button>
    </div>
  )
}

export default ButtonPage