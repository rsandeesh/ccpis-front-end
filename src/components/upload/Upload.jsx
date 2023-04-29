import React, { useState } from 'react'
import './index.css'
import FileUpload from '../fileUpload/FileUpload';
import FileList from '../fileList/fileList';
import { Button } from 'react-bootstrap';
import { detectPatterns } from '../../api/detect/DetectApi';

const Upload = (imgRes: { response: () => {} }) => {
    const [files, setFiles] = useState([])
    const [imgSrc, setImgSrc] = useState([])

    const removeFile = (filename) => {
        const files1 = files.filter(file => file.name !== filename);
        setFiles(files1)
    }
    const addFile = (event) => {
        const file = event.target.files[0];
        file.isUploading = true;
        const tempArr = [...files, file];
        setFiles(tempArr)
    }
    // function createImageFromArray(array)
    // {
    //     const numPixels = array.length / 3;
    //     const width = Math.sqrt(numPixels);
    //     const height = width;
    //
    //     // Create a new canvas element
    //     const canvas = document.createElement('canvas');
    //     canvas.width = 300;
    //     canvas.height = 300;
    //
    //     // Get the canvas context and create a new ImageData object
    //     const context = canvas.getContext('2d');
    //     const imageData = new ImageData(300, 300);
    //
    //     // Set the pixel values of the ImageData object from the array
    //     const pixelData = imageData.data;
    //     for (let i = 0; i < width * height; i++) {
    //         pixelData[i * 4] = array.get(i, 0);
    //         pixelData[i * 4 + 1] = array.get(i, 1);
    //         pixelData[i * 4 + 2] = array.get(i, 2);
    //         pixelData[i * 4 + 3] = 255; // Set alpha to 255 for opaque image
    //     }
    //
    //     // Draw the ImageData object onto the canvas
    //     context.putImageData(imageData, 0, 0);
    //
    //     // Convert the canvas to an image element
    //     const image = new Image();
    //     image.src = canvas.toDataURL();
    //
    //     return image;
    // }

    function drawBoundingBoxesOnImage(image, results) {
        // Create a new canvas element with the same dimensions as the image
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image onto the canvas
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        // Loop through the results and draw a bounding box for each object
        results.forEach(result => {
            const { x, y, width, height, classLabel } = result;
            context.beginPath();
            context.rect(x, y, width, height);
            context.lineWidth = 2;
            context.strokeStyle = 'red';
            context.stroke();

            // Add the class label as text next to the bounding box
            context.font = '14px Arial';
            context.fillStyle = 'red';
            context.fillText(classLabel, x, y - 5);
        });

        // Convert the canvas to an image element
        const resultImage = new Image();
        resultImage.src = canvas.toDataURL();

        return resultImage;
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const filesArr = files
        console.log(filesArr)
        let formData = new FormData();
        console.log(files)

        for (let index = 0; index < filesArr.length; index++) {
            formData.append('files[]', filesArr[index]);
        }

        await detectPatterns(formData).then((value: string[]) => {
            console.log(value)
            const imageArray = [];
            value.forEach(value1 => {
                const tempJson = JSON.parse(value1);
                imageArray.push('data:image/jpg;base64, ' + tempJson.base64Img)
            })
            console.log(imageArray);
            setImgSrc(imageArray);
            imgRes.response(imageArray)
            // console.log(value.data);
            // const unitArray = new Uint8Array(value);

            // console.log(createImageFromArray(unitArray));
            // console.log(unitArray);
            //     var blob = new Blob( [ unitArray ], { type: "image/jpeg" } );
            //     var urlCreator = window.URL || window.webkitURL;
            //     var imageUrl = urlCreator.createObjectURL( blob );
            //
            //
            //
            // const canvas = document.getElementById('canvas');
            // const ctx = canvas.getContext('3d');
            // const arr = new Uint8ClampedArray(8820000);
            //
            // // Iterate through every pixel
            //         for (let i = 0; i < arr.length; i += 4) {
            //             arr[i + 0] = 0;    // R value
            //             arr[i + 1] = 190;  // G value
            //             arr[i + 2] = 0;    // B value
            //             arr[i + 3] = 255;  // A value
            //         }

            // let imageData = new ImageData(4*unitArray, 700,700);
            //
            // ctx.putImageData(imageData, 20, 20);
        })
    }

    return (
        <div className='upload'>
            <FileUpload
                addFile={addFile}
            />
            <FileList files={files}
                removeFile={async (filename) => removeFile(filename)}
            />
            <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
        </div>
    );
}

export default Upload;