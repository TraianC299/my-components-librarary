import React from 'react'
import { Outlet,Route , Routes} from 'react-router-dom'
import TabsNavigation from '../../ComponentsLibrary/Navigation/TabsNavigation.tsx'
import OptionSelector from '../../ComponentsLibrary/Input/OptionSelector'
import MultipleOptionSelector from '../../ComponentsLibrary/Input/MultipleOptionSelector.tsx'
const OptionSelectorPage = () => {
    const [mosValue, setMosValue] = React.useState([])
    const [osValue, setOsValue] = React.useState('')
  return (
    <Routes>
        <Route path="" element={<div className='full flex column'>
        <TabsNavigation nav={[
            {name:"Option Selector", to:"option-selector"},
            {name:"Multiple Option Selector", to:"multiple-option-selector"},
        ]}></TabsNavigation>
        <div className='full flex justify-center items-center'><Outlet></Outlet></div>
        </div>}>
        <Route path={"option-selector"} element={<OptionSelector label={"Options Selector"}></OptionSelector>}></Route>
        <Route path={"multiple-option-selector"} element={<MultipleOptionSelector value={mosValue} setValue={setMosValue} options={names}></MultipleOptionSelector>}></Route>
        
        </Route>
    </Routes>
  )
}

export default OptionSelectorPage


const names = [{name:"John",id:1},{name:"Jane",id:2},{name:"Jack",id:3},{name:"Jill",id:4}]