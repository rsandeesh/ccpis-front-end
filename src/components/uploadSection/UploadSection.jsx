import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';

import Upload from '../upload/Upload';
import Footer from '../footer/Footer';
import Navbar from '../navBar/Navbar';
import './index.css';
import Sketch from "react-p5";
import backImage from '../../assets/images/test.jpg';
import BoundingBox from '../drawBox/DrawBoundingBox';
import DrawSketch from "../sketch/DrawSketch";
import SketchElement from "../sketch/SketchElement";

const UploadSection = () => {
    const [patterns, setPatterns] = useState([]);
    const [result, setResult] = useState(null);


    let dataa;

    const boundingBox = {
        x: 0,
        y: 779.0324096679688,
        height: 445.69482421875,
        width: 1098.7904052734375,
    }

    const [p5, setP5] = useState(null);
    const [imgSrc, setImgSrc] = useState([])

    const [bbox, setBbox] = useState(null)


    const handleChildResponse = (data) => {
        console.log('INSIDE PARENT -->', data);
        setResult(data);
        // createSketch(data)
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
                                    <Upload patterns={setPatterns} onResponse={handleChildResponse} />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} sm={12} lg={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                {result && <SketchElement result={result}/>}
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