import React from 'react'
import Button from '../../ComponentsLibrary/Buttons/Button'
import Snackbar from '../../ComponentsLibrary/Feedback/Snackbar.tsx'
import { BLUE } from '../../Constants'

const SnackbarPage = () => {
    const [open, setOpen] = React.useState("")
  return (
    <>
        <Button onClick={()=>{setOpen("This is an example of a snackbar")}}>Open Snackbar</Button>
        <Snackbar open={open} color={BLUE} setOpen={setOpen} textColor="white"></Snackbar>
    </>
  )
}

export default SnackbarPage