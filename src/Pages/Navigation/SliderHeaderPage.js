import React from 'react'
import SliderHeader from '../../ComponentsLibrary/Navigation/SliderHeader'

const SliderHeaderPage = () => {
    const [selected, setSelected] = React.useState(0)
  return (
   <SliderHeader selected={selected} setSelected={setSelected} steps={[
         "Step 1",
            "Step 2",   
            "Step 3",   
   ]}></SliderHeader>
  )
}

export default SliderHeaderPage