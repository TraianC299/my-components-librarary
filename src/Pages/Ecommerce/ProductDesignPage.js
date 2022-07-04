import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import TopNavigation from '../../ComponentsLibrary/Navigation/TopNavigation'
import CommoStoreProduct from './ProductDesignVersions/CommoStoreProduct'

const ProductDesignPage = () => {
  return (
    <Routes>
        <Route path="" element={
            <BaseComponent/>
        }>
            <Route index  element={<CommoStoreProduct 
            price={333}
            title="Commo Store"
            currency={"$"}
            description="A well-crafted product description moves buyers through your conversion funnel. If you add a bit of creativity, your product pages instantly become more compelling, leading to more conversions from casual shoppers. "
            image="https://m.media-amazon.com/images/S/aplus-media/sota/d9b6d1d4-e0ec-4f29-94f2-1005862f733a.__CR0,0,300,300_PT0_SX300_V1___.jpg"
            ></CommoStoreProduct>}></Route>
        </Route>
        
    </Routes>
  )
}


const BaseComponent = () => {
    return(
        <div className='full'>
            <TopNavigation nav={[
                {name:"Commo Store", to:"commo-store"},
            ]}></TopNavigation>
            <Outlet></Outlet>
        </div>
    )
}


export default ProductDesignPage


