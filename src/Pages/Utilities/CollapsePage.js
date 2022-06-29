import React, { useState } from 'react'
import Button from '../../ComponentsLibrary/Buttons/Button'
import Collapse from '../../ComponentsLibrary/Utilities/Collapse'

const CollapsePage = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Button onClick={()=>setOpen(previous=>!previous)}>Toggle Collapse</Button>
        <Collapse on={open}>
        <h1>This is a title</h1>
        </Collapse>
    </div>
  )
}

export default CollapsePage