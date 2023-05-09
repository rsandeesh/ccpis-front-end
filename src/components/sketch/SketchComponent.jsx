import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Sketch = ({ backImage, result }) => {
    const canvasRef = useRef();

    useEffect(() => {
        if(result !== null) {
            const image = new Image();
            image.src = backImage;
            image.onload = function () {
                new p5((p5) => {
                    const canvas = p5.createCanvas(image.width * 0.3, image.height * 0.3);
                    canvas.parent(canvasRef.current);
                    p5.noLoop();
                    const tempArray = [];
                    for (let i = 0; i < result.length; i++) {
                        const arrayLength = Object.keys(result[i]).length;
                        for (let j = 0; j < arrayLength; j++) {
                            tempArray.push(result[i]['b' + j]);
                        }
                    }
                    p5.stroke(255, 0, 0);
                    p5.noFill();
                    for (let i = 0; i < tempArray.length; i++) {
                        p5.rect(
                            tempArray[i][1][0],
                            tempArray[i][1][1],
                            tempArray[i][1][2] - tempArray[i][1][0], tempArray[i][1][3] - tempArray[i][1][1]
                        );
                        p5.text(tempArray[i][0], tempArray[i][1][0] + 10, tempArray[i][1][1] + 30);
                    }
                    p5.textSize(30);
                    p5.strokeWeight(2);
                });
            };
            // image.onerror = function () {
            //     const p5 = new p5((p5) => {
            //         p5.noCanvas();
            //     });
            //     p5.remove();
            // };
        }
    }, [backImage, result]);

    return <div ref={canvasRef}></div>;
};

export default Sketch;