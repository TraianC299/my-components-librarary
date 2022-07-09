import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Card from '../../ComponentsLibrary/Display/ImageCard'
import IconCard from '../../ComponentsLibrary/Display/IconCard'
import TabsNavigation from '../../ComponentsLibrary/Navigation/TabsNavigation.tsx'

const CardPage = () => {
  return (
    <Routes>
        <Route path="" element={<div className='full'>
            <TabsNavigation nav={[
                {name:"Image Card", to:""},
                {name:"Icon Card", to:"icon"},
            ]}></TabsNavigation>
            <div className='flex justify-center items-center full'><Outlet></Outlet></div>
        </div>}>
            <Route index element={<Card text="We’ll prepare your legal documents, file your paperwork, and create all the essential post-incorporation documents. Manage all your documentation in one easily accessible dashboard." header="This is a title" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></Card>}></Route>
            <Route path="icon" element={<IconCard 
            text="We’ll prepare your legal documents, file your paperwork, and create all the essential post-incorporation documents. Manage all your documentation in one easily accessible dashboard." 
            header="This is a title" 
            image="https://docs.snap.com/assets/images/creating-an-icon_creating_an_icon_world_example-a831f0c2b967e422d37120d99c9959e0.png"></IconCard>}></Route>
        </Route>
    </Routes>
  )
}

export default CardPage



