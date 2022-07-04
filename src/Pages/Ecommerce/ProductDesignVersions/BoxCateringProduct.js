import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DARKBLUE, BLUE } from '../../../Constants'
import PreloadImage from '../../../ComponentsLibrary/Utilities/PreloadImage'

const cartSvg = <svg width="380" height="481" viewBox="0 0 380 481" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M173.317 1.44202C153.143 5.10302 135.022 14.865 120.836 29.713C103.1 48.277 93.975 71.507 93.975 98.094V107.963H74.185C52.522 107.963 46.618 108.894 37.55 113.742C27.19 119.28 17.444 131.611 14.061 143.463C12.918 147.469 0.00200121 410.166 1.21386e-06 429.463C-0.000998786 434.963 0.615996 441.78 1.37 444.613C5.816 461.312 20.696 475.311 37.774 478.861C45.256 480.417 334.716 480.414 342.176 478.858C359.384 475.269 374.104 461.422 378.58 444.613C379.334 441.78 379.951 434.963 379.95 429.463C379.948 410.166 367.032 147.469 365.889 143.463C362.506 131.611 352.76 119.28 342.4 113.742C333.346 108.902 327.418 107.963 305.905 107.963H286.255L285.701 94.213C284.861 73.348 280.248 58.61 269.503 42.462C248.877 11.463 209.84 -5.18498 173.317 1.44202ZM203.475 33.462C221.594 37.254 238.418 50.271 246.773 66.963C251.871 77.151 253.934 86.266 253.958 98.713L253.975 107.963H189.975H125.975L125.992 98.713C126.029 78.979 132.05 63.767 144.914 50.902C160.502 35.315 181.889 28.946 203.475 33.462ZM324.291 140.412C328.835 142.032 331.637 144.408 333.694 148.386C334.919 150.755 336.431 177.057 341.625 286.388C345.155 360.679 347.915 425.288 347.759 429.963C347.43 439.82 345.911 442.727 339.409 445.948C335.39 447.94 333.681 447.963 189.975 447.963C46.269 447.963 44.56 447.94 40.541 445.948C33.937 442.676 32.517 439.869 32.205 429.463C32.056 424.513 34.808 360.134 38.32 286.398C45.375 138.284 44.53 147.269 51.831 142.729L55.475 140.463L159.475 139.952C216.675 139.67 276.3 139.353 291.975 139.245C313.883 139.096 321.358 139.366 324.291 140.412ZM103.216 175.958C95.379 180.736 94.185 188.378 98.957 203.201C103.755 218.103 109.826 227.829 121.961 240.055C136.093 254.292 148.164 261.295 167.475 266.46C176.949 268.994 196.753 269.53 207.301 267.537C238.154 261.709 263.041 243.049 276.899 215.353C281.903 205.35 285.353 193.008 284.718 187.375C283.813 179.349 277.491 173.963 268.975 173.963C260.629 173.963 255.185 178.549 252.946 187.463C248.486 205.223 236.677 221.039 221.655 229.371C201.966 240.294 177.597 240.131 158.218 228.948C150.642 224.576 140.074 214.198 135.692 206.827C133.612 203.327 130.562 196.148 128.914 190.873C125.924 181.3 123.566 177.796 118.291 175.085C114.762 173.272 106.872 173.729 103.216 175.958Z" fill="black"/>
</svg>

const trashSvg = <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#323232"/>
</svg>


const massSvg = <svg width="447" height="448" viewBox="0 0 447 448" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.575 0.740627C34.858 6.63263 11.733 27.7976 2.344 57.6976L0 65.1626V223.663V382.163L2.343 389.663C10.82 416.798 30.365 436.343 57.5 444.82L65 447.163H223.5H382L389.5 444.82C416.635 436.343 436.18 416.798 444.657 389.663L447 382.163V223.663V65.1626L444.656 57.6976C436.056 30.3096 417.855 11.9376 390 2.52763L383 0.162628L226 0.0126265C139.3 -0.0693735 67.019 0.256627 64.575 0.740627ZM382.919 34.4166C397.993 40.1576 408.006 50.5116 413.137 65.6626C414.922 70.9326 415 77.5426 415 223.663C415 369.783 414.922 376.393 413.137 381.663C408.006 396.814 397.993 407.168 382.919 412.909L377 415.163L228 415.444C138.684 415.612 76.597 415.349 73 414.787C54.721 411.93 40.221 399.95 34.297 382.81L32 376.163V223.663C32 77.5426 32.078 70.9326 33.863 65.6626C39.837 48.0216 52.87 36.4516 71 32.6926C73.2 32.2356 142.95 31.9306 226 32.0126L377 32.1626L382.919 34.4166ZM205 64.7916C166.311 68.4816 129.877 84.4776 96.5 112.427C86.125 121.115 69.406 138.13 66.4 143.059C63.687 147.509 63.853 155.407 66.75 159.705C69.582 163.905 140.468 220.128 146.352 222.841C154.453 226.575 161.328 223.646 167.787 213.705C176.549 200.224 187.903 191.045 202.892 185.326C210.449 182.443 211.883 182.233 224 182.233C236.094 182.233 237.56 182.447 245.035 185.3C259.581 190.851 269.395 198.429 278.328 211.005C287.24 223.55 292.808 226.072 302 221.729C307.792 218.992 378.504 162.78 381.215 158.758C384.448 153.961 384.325 147.182 380.912 142.053C376.949 136.098 361.147 120.43 350 111.404C305.525 75.3896 257.098 59.8226 205 64.7916ZM236.36 96.6856C268.116 99.4956 294.656 109.902 322 130.261C330.355 136.482 343 147.531 343 148.611C343 149.556 299.986 183.663 298.794 183.663C298.323 183.663 295.251 180.93 291.969 177.59C280.417 165.835 262.225 155.579 246.297 151.841L239.5 150.246V136.602C239.5 124.067 239.315 122.685 237.226 119.585C233.734 114.402 228.988 111.663 223.5 111.663C218.012 111.663 213.266 114.402 209.774 119.585C207.687 122.682 207.499 124.075 207.493 136.561L207.486 150.163L200.697 151.799C184.598 155.679 166.543 165.876 155.031 177.59C151.749 180.93 148.672 183.663 148.194 183.663C147.536 183.663 109.264 154.041 104.064 149.507C103.115 148.68 110.971 141.056 120.137 133.907C148.945 111.439 177.392 99.5966 209.5 96.7066C221.977 95.5836 223.896 95.5816 236.36 96.6856Z" fill="black"/>
</svg>



const priceSvg = <svg width="481" height="481" viewBox="0 0 481 481" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M286 1.05897C263.025 3.10297 240.761 12.645 223.951 27.653C220.349 30.869 170.612 80.525 113.424 138C16.2994 235.612 9.23244 242.946 6.20544 249.266C-2.77956 268.023 -1.71356 288.156 9.16744 305.223C12.0084 309.678 36.2944 334.619 92.8354 391.148L172.5 470.796L181.108 474.915C197.849 482.925 214.518 482.921 231 474.901L239.5 470.765L346.317 364.133C405.067 305.485 455.356 254.575 458.072 251C467.704 238.318 475.448 220.776 478.488 204.75C480.755 192.801 480.738 51.253 478.469 42.542C473.769 24.499 458.878 9.10097 440 2.76597C433.593 0.614974 432.511 0.581974 364.5 0.398974C326.55 0.296974 291.225 0.593974 286 1.05897ZM433.423 41.402C435.735 42.757 438.511 45.564 439.792 47.843L442.062 51.882L441.781 125.691L441.5 199.5L438.676 207.49C437.123 211.885 434.249 218.185 432.289 221.49C427.514 229.542 219.593 438.225 213.5 441.081C208.613 443.372 204.129 443.493 199.218 441.465C194.061 439.337 42.5834 288.174 39.9214 282.5C37.6434 277.645 37.4904 272.157 39.4984 267.35C41.2324 263.201 242.642 60.765 252.5 53.263C259.574 47.88 270.628 42.527 278.72 40.567C283.384 39.437 298.475 39.151 356.912 39.083L429.324 39L433.423 41.402ZM335.347 79.043C322.783 81.269 310.746 87.992 302.167 97.577C275.987 126.827 287.61 173.442 324.623 187.63C329.827 189.625 333.932 190.382 341.5 190.74C359.125 191.574 371.251 186.811 384.04 174.034C398.195 159.891 403.491 142.583 399.502 123.5C395.314 103.466 379.207 85.983 360 80.624C352.777 78.609 341.777 77.904 335.347 79.043ZM349.477 117.115C351.665 117.723 355.109 119.874 357.131 121.896C365.592 130.356 364.164 143.769 354.126 150.135C342.486 157.517 327.341 150.157 326.214 136.571C325.437 127.193 330.581 119.761 339.764 116.996C343.599 115.841 344.947 115.858 349.477 117.115Z" fill="black"/>
</svg>





const peopleSvg = <svg width="480" height="352" viewBox="0 0 480 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M223.016 0.940066C201.178 5.22507 181.531 19.0151 170.055 38.1141C162.288 51.0391 158.974 63.2101 158.963 78.8531C158.935 115.973 183.348 146.874 219.904 155.992C231.738 158.944 249.792 158.286 261.441 154.478C278.502 148.902 294.321 136.89 303.96 122.192C325.151 89.8821 320.079 47.8521 291.792 21.3531C280.321 10.6071 268.692 4.45607 254.01 1.36807C246.289 -0.256933 230.244 -0.477934 223.016 0.940066ZM245.441 32.8391C269.86 36.8071 287.689 61.2421 283.941 85.6031C282.619 94.1891 277.205 105.369 271.55 111.187C244.609 138.908 198.176 124.312 191.753 86.1031C187.606 61.4341 204.149 38.0771 229.441 32.8921C235.089 31.7341 238.568 31.7231 245.441 32.8391ZM73.7294 84.4041C58.3104 88.1431 40.9134 102.006 34.1734 115.925C28.0194 128.634 26.0054 144.296 28.9004 156.92C32.8654 174.211 45.2604 189.969 60.9994 197.727C79.8294 207.01 96.9994 207.008 115.941 197.722C131.087 190.297 143.06 175.549 147.499 158.853C149.963 149.585 149.719 135.351 146.941 126.353C140.631 105.911 123.006 89.1451 102.827 84.3881C94.9884 82.5401 81.3874 82.5481 73.7294 84.4041ZM372.441 84.3401C340.357 93.0401 320.697 124.439 327.431 156.224C331.046 173.286 344.425 190.508 359.941 198.074C393.499 214.437 432.92 198.112 444.99 162.853C448.044 153.932 448.766 138.667 446.551 129.847C440.943 107.513 423.571 89.9831 401.481 84.3681C394.191 82.5151 379.226 82.5011 372.441 84.3401ZM100.451 117.755C113.11 123.354 119.589 138.232 115.498 152.306C114.187 156.815 112.646 159.278 108.616 163.308C91.2744 180.65 62.4154 170.196 60.2004 145.77C58.2624 124.398 80.4924 108.926 100.451 117.755ZM399.695 118.249C413.757 125.435 419.439 142.14 412.586 156.147C409.408 162.641 405.605 166.178 398.08 169.637C393.51 171.738 391.664 172.033 385.58 171.635C377.272 171.093 372.149 168.795 366.746 163.188C355.141 151.145 356.495 131.159 369.593 121.169C378.271 114.55 390.194 113.393 399.695 118.249ZM230.577 186.02C208.977 187.685 188.805 194.745 168.941 207.594C159.19 213.901 140.231 232.298 134.5 241.012L130.778 246.672L124.61 243.785C83.8744 224.724 31.6134 245.52 9.5644 289.565C3.4264 301.827 0.783396 312.526 0.227396 327.353C-0.238604 339.798 -0.157603 340.501 2.1144 343.829C9.3804 354.468 22.4634 354.621 29.5204 344.15C31.2274 341.617 31.7524 338.957 32.1794 330.674C33.0914 312.991 39.1354 298.911 50.7724 287.355C66.7784 271.46 88.7674 265.354 107.18 271.69C110.887 272.965 114.182 274.435 114.504 274.955C114.826 275.476 113.934 279.378 112.521 283.627C108.545 295.591 106.085 308.094 104.783 322.96C103.598 336.493 103.605 336.594 106.016 341.459C109.24 347.962 113.679 350.853 120.441 350.853C124.184 350.853 126.584 350.22 128.989 348.6C134.703 344.749 136.222 340.899 137.081 328.094C138.781 302.765 145.986 281.26 159.187 262.111C165.971 252.271 181.686 237.484 191.747 231.473C205.935 222.998 224.106 217.868 239.941 217.868C255.782 217.868 273.968 223.004 288.119 231.473C297.497 237.086 311.759 250.152 318.865 259.641C332.757 278.19 341.042 301.885 342.801 328.094C343.66 340.899 345.179 344.749 350.893 348.6C353.298 350.22 355.698 350.853 359.441 350.853C366.203 350.853 370.642 347.962 373.866 341.459C376.277 336.594 376.284 336.493 375.099 322.96C373.797 308.094 371.337 295.591 367.361 283.627C365.948 279.378 365.056 275.476 365.378 274.955C365.7 274.435 368.995 272.965 372.702 271.69C391.115 265.354 413.104 271.46 429.11 287.355C440.747 298.911 446.791 312.991 447.703 330.674C448.13 338.957 448.655 341.617 450.362 344.15C457.419 354.621 470.502 354.468 477.768 343.829C480.04 340.501 480.121 339.798 479.655 327.353C479.277 317.264 478.581 312.385 476.548 305.565C471.549 288.798 463.418 275.433 450.8 263.244C423.745 237.106 385.984 229.415 355.272 243.785L349.104 246.672L345.382 241.012C343.335 237.9 336.661 230.344 330.551 224.223C314.735 208.377 300.027 199.172 279.612 192.342C263.058 186.803 247.105 184.746 230.577 186.02Z" fill="black"/>
</svg>



export const VariantBanner = styled.span`
position: absolute;
width: fit-content;
border-radius: 0px 5px;
padding-left: 10px;
padding-right: 10px;
bottom:0;
left:0;
background-color: ${BLUE};
display: flex;
align-items: center;
justify-content: center;
>p{
    color:black;
}
`
 
const Container = styled.div`
    position: relative;
    padding-bottom:1.8rem;
>.item-header{
    position: absolute;
    text-align: left;
    height: 1.5rem;
    bottom:0;
    left:0;
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 70%;
}


@media (orientation: landscape) and (min-width: 700px) {
    padding-bottom:1.7rem;

}
`



const MainContainer = styled.div`
height:100%;
display: flex;
align-items: start;
justify-content: space-around;
>.item-text-info{
    height:calc(100% - 60px);
    margin-left:5px;
    width:fit-content;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
>.item-image{
    width: 80%;
    position: relative;
    padding-bottom: 80%;
    >a{
        
        >div{
            position:absolute;
            bottom:-30px;
            right:-30px;
        }
        >.preload-image{
            position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
            >img{
                
        width: 100%;
        height: 100%;
        object-fit: contain;
            }
        
    }}
}`




const Icon = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    >p{
        font-size:0.9rem;
        font-weight: 500;
        color:${DARKBLUE};

    }
    >svg{
        height: 2vh;
        width: 2vh;
        color:${DARKBLUE};
        margin-bottom:5px;
    }

@media (orientation: landscape) and (min-width: 700px) {
    >p{
        font-size:0.9rem;
        font-weight: 500;
        color:${DARKBLUE};

    }
    >svg{
        height: 1.1rem;
        width: 1.1rem;
        color:${DARKBLUE};
        margin-bottom:3px;
    }
}
@media (orientation: portrait) and (min-width: 700px) {
    >p{
        font-size:1rem;
        font-weight: 500;
        color:${DARKBLUE};

    }
    >svg{
        height: 1.2rem;
        width: 1.2rem;
        color:${DARKBLUE};
        margin-bottom:10px;
    }
}
`




const AddToCartButtonStyle = styled.button`
border: none;
cursor: pointer;
    width: 80px;
    height: 80px;
    background-color: ${BLUE};
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
    align-self: flex-end;
    border-radius: 25px;
    position:absolute;
    bottom:0;
    right:0;
    margin-right: 10px;
    transition: 0.2s;

    >svg{
        height:40%;
        width:40%;
    }

    :hover{
        transform: scale(1.1);
    }
    `


const SkeletonImage = styled.div`

    width: 80%;
    position: relative;
    padding-bottom: 80%;
        
        >div{
            position:absolute;
            bottom:-30px;
            right:-30px;
        }
        >.preload-image{
            position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
            >img{
                
        width: 100%;
        height: 100%;
        object-fit: contain;
            }
        
    }

        `
const BoxCateringProduct = ({title, prep_time, price, discount, item_id, image, withVariants, variantNumber, people_nr, quantity, mandatory_preorder, variant_id, category_id, visible}) => {
    // const [deleteItem, setDeleteItem] = useState(false)
    // const {cart, setCart} = useCart()
    // const {translateDinamically, language} = useLanguage()
    // const {data, loading} = useData()
    const [loading, setLoading] = useState(true)

   


    const addToCartFunction = () => {
        // if(cart.some(element=>element.variant_id==variant_id )){
        //     setDeleteItem(true)
        //     return
        // }

        // const itemObject = {
        //         cartQuantity:1, 
        //         variant_id:variant_id, 
        //         title:title,
        //         image: image,
        //         discount: discount,
        //         variantNumber:variantNumber,
        //         item_id:item_id, 
        //         price:discount?discount:price,
        //         category_id:category_id,
        //         prep_time:prep_time,
        // }

        // if(mandatory_preorder){
        //     setCart(previous=>[...previous, {...itemObject, mandatory_preorder: true, prep_time:prep_time}])
        // }else{
        //     setCart(previous=>[...previous, {...itemObject}])
        // }

    }




    
  





// useEffect(()=>{
//     if(deleteItem){
//         setCart(previous=>[...previous.filter(element=>element.variant_id!=variant_id)])
//     }else{
//         return
//     }

// },[deleteItem])

// if(loading || visible){
//     return(
//         <SkeletonVersion></SkeletonVersion>
//     )
// }


    return (

        <Container>
      
        <MainContainer>
            <div className="item-image">
                <Link 

                to={``}
                state={{goBackSafe:true ,variantNumber:variantNumber}}>
                    <PreloadImage lazy placeholder={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC"} alt={title} src={image}></PreloadImage>
                    {withVariants?<VariantBanner><p>{variantNumber}</p></VariantBanner>:null}
                </Link>
            </div>
            <div className="item-text-info">
                {people_nr&&<Icon>
                        {peopleSvg}
                        <p>{people_nr}</p>
                    </Icon>}
                {quantity&&
                    <Icon>
                        {massSvg}
                        <p>{quantity} {"kg"}</p>
                    </Icon>}

                    <Icon>
                        {priceSvg}
                        <p>{price} {"$"}</p>
                    </Icon>
                    

            </div>

        </MainContainer>
                        <p className="item-header">{title}</p>

            <div className="custom-item">
            </div>
            <AddToCartButtonStyle className="add-to-cart-button" aria-label="Add to cart" type="button" name="Adauga in Cart"  onClick={addToCartFunction}>
            {true?trashSvg:cartSvg}
        </AddToCartButtonStyle>
        </Container>
    )
}


export default BoxCateringProduct
