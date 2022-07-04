import React from 'react'
import TopNavigation from '../../ComponentsLibrary/Navigation/TopNavigation'

const TopNavigationPage = () => {
  return (
    <div style={{height:"100%", width:"100%"}}>
        <TopNavigation nav={[
            {name:"Home", to:""},
            {name:"About", to:""},
            {name:"Products", to:""},
        ]}></TopNavigation>
    </div>
  )
}

export default TopNavigationPage