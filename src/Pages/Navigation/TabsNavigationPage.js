import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import TabsNavigation from '../../ComponentsLibrary/Navigation/TabsNavigation.tsx'

const TabsNavigationPage = () => {
  return (
    <Routes>
      <Route path={""} element={<div style={{height:"100%", width:"100%"}}>
        <TabsNavigation nav={[
            {name:"Page 1", to:"page1"},
            {name:"Page 2", to:"page2"},
            {name:"Page 3", to:"page3"},
        ]}></TabsNavigation>
        <Outlet></Outlet>
    </div>}>
      <Route path="page1" element={<div className='full flex items-center justify-center'>Page 1</div>}></Route>
      <Route path="page2" element={<div className='full flex items-center justify-center'>Page 2</div>}></Route>
      <Route path="page3" element={<div className='full flex items-center justify-center'>Page 3</div>}></Route>
    </Route>
    </Routes>
    
  )
}

export default TabsNavigationPage