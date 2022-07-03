import React from 'react'
import ImageSlider from '../../ComponentsLibrary/Display/ImageSlider'

const ImageSliderPage = () => {
  return (
    <ImageSlider images={[
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "https://www.pixelstalk.net/wp-content/uploads/2016/04/Photos-Landscape-Wallpaper-HD-Backgrounds.jpg"
    ]}></ImageSlider>
  )
}

export default ImageSliderPage