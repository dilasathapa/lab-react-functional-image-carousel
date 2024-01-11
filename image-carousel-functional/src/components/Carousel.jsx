import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex, setCurrIndex] = useState(0);
    function moveBackward(){
        if(currIndex <= 0){
            setCurrIndex(images.length-1)
        }else{
            setCurrIndex(currIndex-1)
        }
    }

    function moveForward(){
        if(currIndex == images.length-1){
            setCurrIndex(0)
        }else{
            setCurrIndex(currIndex+1)
        }
    }
    return (
        <>
            <div className="container-parent" style={{
                display: "flex"
            }}>
                <button onClick={moveBackward}>-</button>
                <h2>{images[currIndex].title}</h2>
                <img src={images[currIndex].img} alt="" />
                <h3>{images[currIndex].subtitle}</h3>
                <button onClick={moveForward}>+</button>
            </div>



        </>
    )
}

// batching 
// context API
// props-drilling

// function incrementCount() {
//     setCurrIndex((count) => count + 1)  //1
//     setCurrIndex((c) => c + 1) // 2
//     setCurrIndex((d) => d + 1) //3

// }

/* <h2>{currIndex}</h2>
        <button onClick={incrementCount}>increment</button> */


export default Carousel;