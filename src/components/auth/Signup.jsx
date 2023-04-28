import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import earthVideo from '../../assets/videos/earthVideo.mp4';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            console.log(error);
            setError('Failed to create an account');
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
                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay w-full '>

                        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                            <div className='w-100 ' style={{ maxWidth: '400px' }}>
                                <Card className='card bg-transparent'>
                                    <Card.Body>
                                        <h2 className='text-center mb-4' style={{ color: 'white' }}>Sign up</h2>
                                        {error && <Alert variant='danger'>{error}</Alert>}

                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group id='email'>
                                                <Form.Label className='labels'>Email</Form.Label>
                                                <Form.Control type='email' ref={emailRef} required />
                                            </Form.Group>

                                            <Form.Group id='password'>
                                                <Form.Label className='labels'>Password</Form.Label>
                                                <Form.Control type='password' ref={passwordRef} required />
                                            </Form.Group>

                                            <Form.Group id='password-confirm'>
                                                <Form.Label className='labels'>Password Confirmation</Form.Label>
                                                <Form.Control type='password' ref={passwordConfirmRef} required />
                                            </Form.Group>
                                            <Button disabled={loading} className='w-100 mt-4' type='submit' >
                                                Sign up
                                            </Button>
                                        </Form>
                                        <div className="w-100 text-center text-white mt-2 link" style={{ color: 'black' }}>
                                            Already have an account ? <Link to='/login'>Log In</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>
                    </div>
                </div>

            </div>

        </>);
}

export default Signup;