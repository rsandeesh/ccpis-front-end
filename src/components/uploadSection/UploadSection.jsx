import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from 'react-bootstrap';

import Upload from '../upload/Upload';
import Footer from '../footer/Footer';
import Navbar from '../navBar/Navbar';
import './index.css';
import SketchElement from "../sketch/SketchElement";
import {Chip} from "@mui/material";

const UploadSection = () => {
    const [patterns, setPatterns] = useState([]);
    const [result, setResult] = useState(null);
    const [files, setFiles] = useState(null)
    const [labels, setLabels] = useState(null)

    const handleChildResponse = (data) => {
        console.log('INSIDE PARENT -->', data);
        setResult(data);
        const labelList=[];
        for (let i = 0; i < data.length; i++) {
            const arrayLength = Object.keys(data[i]).length
            for (let j = 0; j < arrayLength; j++) {
                labelList.push(data[i]['b' + j][0])
            }
        }
        setLabels([...new Set(labelList)])
    };

    const setFilesResponse = (data) => {
        console.log('INSIDE Files -->', data);
        setFiles(data);
    };

    const handleClick = (data)=>{
        console.log(data.target.textContent);
        window.open('/services?type='+data.target.textContent,"_self")
    }

    return (
        <>
            <Navbar/>
            <Container className='upload-container' style={{marginTop: '115px', marginBottom: '115px'}}>
                <Row>
                    <Col xs={12} sm={12} lg={12}>

                        <Card>
                            <Card.Header>Upload Image</Card.Header>
                            <Card.Body>
                                <div style={{width:'100%'}}>
                                    <Upload patterns={setPatterns} onResponse={handleChildResponse} setFiles={setFilesResponse}/>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    {
                        result &&
                        <Col xs={12} sm={12} lg={12}>
                            <Card>
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    {result && <SketchElement result={result} files={files}/>}


                                </Card.Body>
                            </Card>
                        </Col>
                    }

                    {
                        result &&
                        <Col xs={12} sm={12} lg={12}>
                            <Card>
                                <Card.Header>PATTERNS FOUND</Card.Header>
                                <Card.Body style={{display:'inline-flex'}}>
                                    {result && labels && labels.map((data,index)=>{
                                        return ( <Col xs={12} sm={12} lg={2}>
                                            <Chip label={data} onClick={handleClick}/>
                                        </Col>)
                                    })}
                                </Card.Body>
                            </Card>
                        </Col>
                    }

                </Row>
            </Container>
            <Footer/>
        </>

    )
}

export default UploadSection