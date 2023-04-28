import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';

import Upload from '../upload/Upload';
import Footer from '../footer/Footer';
import Navbar from '../navBar/Navbar';
import './index.css';

const UploadSection = () => {
    const [imgSrc, setImgSrc] = useState([])
const getImages = (imgArr:string[]) => {
    setImgSrc(imgArr)
}
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
                                {
                                    imgSrc.map((value,index) =>
                                        <img key={index} src={value} alt="sds"/>
                                    )
                                }
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