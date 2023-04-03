import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap'; import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

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
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card className='card'>
                        <Card.Body>
                            <h2 className='text-center mb-4' style={{ color: 'black' }}>Log In</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                        </Card.Body>
                        <Form >
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required />
                            </Form.Group>

                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className='w-100 mt-4' type='submit' onClick={handleSubmit}>
                                Log In
                            </Button>
                        </Form>

                    </Card>
                </div>
            </Container>
            <div className="w-100 text-center mt-2" style={{ color: 'black' }}>
                Need an account ? <Link to="/sign-up">Sign up</Link>
            </div>
        </>);

}

export default Login;