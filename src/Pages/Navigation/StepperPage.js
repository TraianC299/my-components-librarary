import React from 'react'
import Stepper from '../../ComponentsLibrary/Navigation/Stepper'
import Button from '../../ComponentsLibrary/Buttons/Button'
const StepperPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  return (
    <div className='flex column justify-center items-center'>
      <Stepper
      activeStep={activeStep}
      steps={["Step 1", "Step 2", "Step 3"]}></Stepper>
      <div style={{display:"flex",gridGap:"10px", marginTop:"20px"}}>
        <Button onClick={()=>setActiveStep(previous=>--previous)}>Back</Button>
        <Button onClick={()=>setActiveStep(previous=>++previous)}>Next</Button>
      </div>
    </div>
  )
}

export default StepperPage