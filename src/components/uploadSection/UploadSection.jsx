import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';

import Upload from '../upload/Upload';
import Footer from '../footer/Footer';
import Navbar from '../navBar/Navbar';
import './index.css';
import Sketch from "react-p5";
import backImage from '../../assets/images/fish.jpg';

const UploadSection = () => {
    let x = 0.0;
    let y =  1024.4383544921875;
let img;
    const [p5, setP5] = useState(null);
    const [imgSrc, setImgSrc] = useState([])
    const [image, setImage] = useState(null)

    const getImages = (imgArr:string[]) => {
        // setImgSrc(imgArr)
    }
    const setup = (p5, canvasParentRef) => {
        setP5(p5);
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
           let cvs =  p5.createCanvas(1066, 1066).parent(canvasParentRef);

        p5.loadImage(backImage,img => {
            console.log(img);
            // console.log(backImage);
            p5.image(img,0,0);
            p5.rect(0.8836984038352966,
                839.2400512695312,
                238.73464965820312,
                1213.122314453125);
            p5.background(220, 10);
            p5.draw();
        })
    };

    const draw = (p5) => {

        // p5.background(0);
        // p5.ellipse(x, y, 973.2594604492188, 1400.0);
        // p5.draw();
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        // x++;
    };

    return (
        <>
            <Navbar />
            <Container className='upload-container' style={{ marginTop: '115px', marginBottom: '115px' }}>
                <Row>
                    <Col xs={12} sm={12} lg={6}>

                        <Card>
                            <Card.Header>Upload Image</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Upload Image To See The Results</Card.Title> */}
                                <div className="upload-widger">
                                    <Upload response={getImages} />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} sm={12} lg={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Sketch setup={setup} draw={draw} />
                                {/*{*/}
                                {/*    imgSrc.map((value,index) =>*/}
                                {/*        <img key={index} src={value} alt="sds"/>*/}
                                {/*    )*/}
                                {/*}*/}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default UploadSection