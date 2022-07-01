import React from 'react'
import Button from '../../ComponentsLibrary/Buttons/Button'
import Modal from '../../ComponentsLibrary/Navigation/Modal.tsx'
import styled from 'styled-components';
import { BLUE } from '../../Constants';



const Container = styled.div`
height: 400px;;
width: 400px;
background: ${BLUE};
justify-content:start;
padding: 20px;
>*{
    color: white;
}`
const ModalPage = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
    <Modal
    open={open}
    setOpen={setOpen}>
        <Container className='flex column'>
            <h1>This a modal</h1>
            <p>It is quiet nice, you can have any children inside the Modal. Also of you click somewhere outside your children the modal will close. Isn't that cool?????</p>
        </Container>
    </Modal>
    <Button onClick={()=>setOpen(true)}>Open Modal</Button></>
  )
}

export default ModalPage