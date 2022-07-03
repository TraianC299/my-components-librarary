import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { device, BLUE } from '../../Assets/Styles'
import CircleButton from '../Buttons/CircleButton'
import useDidMountEffect from '../../Hooks/useDidMountEffect.ts'
import { BLUE, device } from '../../Constants'


 const getBrowser = function() {        
    try {
        var e;
        var f = e.width;
    } catch(e) {
        var err = e.toString();

        if(err.indexOf("not an object") !== -1) {
            return "safari";
        } else if(err.indexOf("Cannot read") !== -1) {
            return "chrome";
        } else if(err.indexOf("e is undefined") !== -1) {
            return "firefox";
        } else if(err.indexOf("Unable to get property 'width' of undefined or null reference") !== -1) {
            if(!(false || !!document.documentMode) && !!window.StyleMedia) {
                return "edge";
            } else {
                return "IE";
            }
        } else if(err.indexOf("cannot convert e into object") !== -1) {
            return "opera";
        } else {
            return undefined;
        }
    }
};
const chevronLeftSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1119 0.0964987C23.8855 0.17062 23.512 0.343276 23.2818 0.48019C23.0517 0.617202 17.8271 5.77482 11.6717 11.9417C2.62988 21.0006 0.435644 23.2481 0.24834 23.6426C-0.0826172 24.3398 -0.0828123 25.5815 0.247949 26.2793C0.58877 26.9982 22.9224 49.3351 23.6445 49.6794C24.0403 49.8681 24.2899 49.9121 24.9629 49.9121C25.673 49.9121 25.8729 49.8729 26.3458 49.6406C26.9829 49.3277 27.5315 48.7645 27.8294 48.1174C28.1367 47.4498 28.1252 46.1863 27.8059 45.5176C27.6185 45.1253 25.6029 43.0568 17.553 34.9951L7.5335 24.961L17.5517 14.9268C28.759 3.70148 28.038 4.51623 28.0302 3.08595C28.0272 2.54728 27.9684 2.22199 27.8075 1.85626C27.537 1.24123 26.8224 0.524624 26.2105 0.254995C25.6158 -0.00701693 24.6509 -0.0799661 24.1119 0.0964987Z" fill="black"/>
</svg>


const chevronRightSvg=<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2498 0.105519C1.63066 0.310695 1.30293 0.514503 0.86289 0.968019C0.254199 1.59526 0.0075198 2.21079 0.00878934 3.09985C0.0107425 4.53579 -0.710351 3.72124 10.4911 14.9407L20.5093 24.9749L10.4911 35.009C-0.710351 46.2285 0.0107425 45.4139 0.00878934 46.8499C0.0075198 47.7558 0.256446 48.3594 0.902637 49.0173C1.52383 49.6499 2.15576 49.9115 3.08164 49.9196C4.54111 49.9324 3.66572 50.7177 16.3223 38.0404C25.4816 28.8659 27.6049 26.6911 27.7911 26.2932C28.1213 25.5879 28.1231 24.3454 27.7951 23.6565C27.6075 23.2625 25.3901 20.9921 16.3223 11.9093C6.30908 1.87974 5.01572 0.617726 4.47676 0.350636C3.76895 -4.76139e-05 2.86768 -0.0991687 2.2498 0.105519Z" fill="black"/>
</svg>
const GlobalContainer = styled.div`
position: relative;
height: 100%;
width: 100%;`

const Container = styled.div`
 display: flex;
 width: 100%;
 height: 140vw;
 margin: 0 auto;
 overflow-x: scroll;
 scroll-snap-type: x mandatory;
 transition: all 0.2s ease-in-out;



 @media ${device.laptopSmall}{
    height: 100%;
    position: relative;

}

@media ${device.tabletSmallPortrait}{
    height: 30vh;

}
`


const Child = styled.div`
position: relative;
 margin: 0rem;
overflow: hidden;
 scroll-snap-align: center;
 flex: 0 0 80%;
 box-shadow: 2px 2px 10px rgba(19, 21, 19, 0.25);
 background-color: white;
 transition: all 0.1s ease-in-out;
 >img{
 width: 100%;
 height: 100%;
 object-fit: cover;

 }


@media ${device.laptopSmall}{
    flex: 0 0 1280px;
}
@media ${device.tabletSmallPortrait}{
    flex: 0 0 70%
}
`


const Navigation = styled.div`
display:none;

@media ${device.laptopSmall}{
position: absolute;
top: calc(50% - 50px);
padding:20px;
display: flex;
z-index:1;
width:100%;
justify-content: space-between;
/* transform: translate(50%, 50%); */
display: auto;
}`


const ImageSlider = ({images=[]}) => {
    const [slide, setSlide] = React.useState(0)
    const containerRef = React.useRef(null)
    const browserRef = React.useRef(getBrowser())
    
    useDidMountEffect(()=>{
            if(browserRef.current === 'safari'){
                containerRef.current.scrollLeft = slide * containerRef.current.clientWidth*0.7
            }else{
                document.getElementById(`slide ${slide}`).scrollIntoView({behavior: 'smooth', block:"nearest", inline: "nearest", })
            }
    },[slide])

    


  return (
    <GlobalContainer>
        <Container ref={containerRef}>
        
               { images.map((image, index) => <Child selected={index==slide}  key={index} id={`slide ${index}`} className="child">
                    <img src={image}></img>
                </Child>)}
                
        </Container>
            <Navigation>
                <CircleButton style={{height:"50px", width: "50px"}} onClick={()=>slide==0?setSlide(0):setSlide(previous=>--previous)} icon={chevronLeftSvg} color={BLUE}></CircleButton>
                <CircleButton style={{height:"50px", width: "50px"}} onClick={()=>slide==images.length-1?setSlide(images.length-1):setSlide(previous=>++previous)} icon={chevronRightSvg} color={BLUE}></CircleButton>
            </Navigation>
    </GlobalContainer>
  )
}

export default ImageSlider