import React from 'react'
import backImage from "../../assets/images/test.jpg";
import Sketch from "react-p5";
import SketchElement from "./SketchElement";


const DrawSketch = (data:{dataList:any[]}) => {
    console.log(data);
    return(
        <>
            {
                data && data.dataList && data.dataList.map(selectedData=> <SketchElement key={selectedData} resultObj={selectedData}/>)
            }
        </>
    )
}
export default DrawSketch


// <Sketch key={'jey'}
// setup={(p5, canvasParentRef) => {
//     const image = new Image();
//     image.src=backImage;
//     image.onload = function (){
//         p5.createCanvas(image.width*0.3, image.height*0.3).parent(canvasParentRef);
//         p5.noLoop();
//     }
// }}
// draw={(p5) => {
//     p5.scale(0.3)
//     const x = resultObj;
//     console.log(resultObj);
//     console.log(typeof(resultObj));
//     const tempArray = [];
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i]);
//         const arrayLength = Object.keys(x[i]).length
//
//         for (let j = 0; j < arrayLength; j++) {
//             console.log(x[i]['b' + j]);
//             tempArray.push(x[i]['b' + j])
//         }
//     }
//
//     const image = p5.loadImage(backImage, () => {
//         p5.image(image, 0, 0);
//         p5.stroke(255, 0, 0);
//         p5.noFill();
//         for (let i = 0; i < tempArray.length; i++) {
//             p5.rect(
//                 tempArray[i][1][0],
//                 tempArray[i][1][1],
//                 tempArray[i][1][2]-tempArray[i][1][0],  tempArray[i][1][3]-tempArray[i][1][1]
//             );
//             p5.text(tempArray[i][0],tempArray[i][1][0]+10,tempArray[i][1][1]+30);
//         }
//         p5.textSize(30);
//         p5.strokeWeight(2)
//     });
// }}
// />