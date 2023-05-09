import React from 'react'
import Sketch from "react-p5";
import './index.css'
import backImage from "../../assets/images/test.jpg";

const SketchElement = ({result, files}) => {
    console.log(result);
    console.log(files);

    const handleDownload = (p5) => {
        console.log(p5);
        p5.saveCanvas('name', 'png')
    };

    return (<div>
        {result.map((image, index) => {
            console.log(image);
            console.log(backImage);
            return (<div className={'canvas-parent'} key={index}>
                <Sketch
                    setup={(p5, canvasParentRef) => {
                        if (canvasParentRef) {
                            console.log('p5.focused');
                            const reader = new FileReader();
                            reader.readAsDataURL(files[index]);
                            reader.onload = function () {
                                console.log(reader.result);
                                const image = new Image()
                                image.src = reader.result
                                image.onload = async function () {
                                    p5.createCanvas(image.width * 0.3, image.height * 0.3).parent(canvasParentRef);
                                    p5.noLoop()
                                }
                            };


                        }
                    }}
                    draw={(p5) => {
                        p5.scale(0.3)
                        console.log(result[index]);
                        const x = [result[index]];
                        const tempArray = [];
                        console.log(x);
                        for (let i = 0; i < x.length; i++) {
                            const arrayLength = Object.keys(x[i]).length
                            for (let j = 0; j < arrayLength; j++) {
                                tempArray.push(x[i]['b' + j])
                            }
                        }
                        const reader = new FileReader();
                        reader.readAsDataURL(files[index]);
                        reader.onload = function () {
                            const image = p5.loadImage(reader.result, () => {
                                p5.image(image, 10, 10)
                                p5.stroke(255, 0, 0);
                                p5.noFill();
                                for (let i = 0; i < tempArray.length; i++) {
                                    p5.rect(tempArray[i][1][0], tempArray[i][1][1], tempArray[i][1][2] - tempArray[i][1][0], tempArray[i][1][3] - tempArray[i][1][1]);
                                    p5.text(tempArray[i][0], tempArray[i][1][0] + 10, tempArray[i][1][1] + 30);
                                }
                                p5.textSize(50);
                                p5.strokeWeight(2)
                            });
                        };


                    }}
                />
            </div>);
        })}
    </div>)
}
export default SketchElement