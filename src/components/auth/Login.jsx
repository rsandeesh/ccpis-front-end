import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import earthVideo from '../../assets/videos/earthVideo.mp4';
import { useAuth } from "../context/AuthContext";
import "./index.css";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('Failed to log');
        }
        setLoading(false);
    }
    return (
        <>
            <div className='flex justify-start items-center flex-col h-screen w-full h-ful'>
                <div className='relative w-full h-full'>
                    <video
                        src={earthVideo}
                        type="video/mp4"
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay w-full'>

                        <Container className='d-flex align-items-center justify-content-center ' style={{ minHeight: '100vh' }}>
                            <div className='w-100' style={{ maxWidth: '400px' }}>
                                <Card className='card bg-transparent'>
                                    <Card.Body>
                                        <h2 className='text-center mb-4' style={{ color: 'white' }}>Log In</h2>
                                        {error && <Alert variant='danger'>{error}</Alert>}
                                        <Form className='login-card' >
                                            <Form.Group id='email'>
                                                <Form.Label className='labels'>Email</Form.Label>
                                                <Form.Control type='email' ref={emailRef} required />
                                            </Form.Group>

                                            <Form.Group id='password'>
                                                <Form.Label className='labels'>Password</Form.Label>
                                                <Form.Control type='password' ref={passwordRef} required />
                                            </Form.Group>
                                            <Button disabled={loading} className='w-100 mt-4' type='submit' onClick={handleSubmit}>
                                                Log In
                                            </Button>
                                            <div className="w-100 text-center mt-2 text-white" >
                                                Need an account ? <Link to="/sign-up">Sign up</Link>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>

                            </div>

                        </Container>
                    </div>
                </div>
            </div>

        </>);

}

export default Login;