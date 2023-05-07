import React, {useEffect} from 'react'
import backImage from "../../assets/images/test.jpg";
import Sketch from "react-p5";


const SketchElement = ({result}) => {
    console.log(result);
    let p5Instance;

    return (
        <div>
            {result.map((image,index) => {
                console.log(image);
                return (
                    <div id={'canvas-parent'+index} key={image.id}>
                        <Sketch

                            setup={(p5, canvasParentRef) => {
                                p5Instance = p5;
                                const image = new Image();
                                image.src = backImage;
                                image.onload = function () {
                                    p5.createCanvas(image.width * 0.3, image.height * 0.3).parent(canvasParentRef);
                                    // p5.noCanvas();
                                    p5.noLoop();
                                }
                                image.onerror = function () {
                                    p5.noCanvas();
                                }
                            }}

                            draw={() => {
                                if (!p5Instance) return;
                                p5Instance.scale(0.3)
                                const x = result;
                                const tempArray = [];
                                for (let i = 0; i < x.length; i++) {
                                    const arrayLength = Object.keys(x[i]).length
                                    for (let j = 0; j < arrayLength; j++) {
                                        tempArray.push(x[i]['b' + j])
                                    }
                                }

                                const image = p5Instance.loadImage(backImage, () => {
                                    p5Instance.image(image, 0, 0);
                                    p5Instance.stroke(255, 0, 0);
                                    p5Instance.noFill();
                                    for (let i = 0; i < tempArray.length; i++) {
                                        p5Instance.rect(
                                            tempArray[i][1][0],
                                            tempArray[i][1][1],
                                            tempArray[i][1][2] - tempArray[i][1][0], tempArray[i][1][3] - tempArray[i][1][1]
                                        );
                                        p5Instance.text(tempArray[i][0], tempArray[i][1][0] + 10, tempArray[i][1][1] + 30);
                                    }
                                    p5Instance.textSize(50);
                                    p5Instance.strokeWeight(2)
                                });
                            }}
                        />
                     </div>
                );
            })}
        </div>
    )
    // return arr;
}
export default SketchElement