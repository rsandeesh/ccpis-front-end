import React, { useState } from 'react'
import earthVideo from '../assets/earthVideo.mp4';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import jwt_decode from "jwt-decode";
import { Button, Form } from 'react-bootstrap';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const responseGoogle = (response) => {
        console.log(response.credential);
        var decoded = jwt_decode(response.credential);
        console.log(decoded);
        localStorage.setItem('user', JSON.stringify(decoded));
        const { name, sub, picture } = decoded;

        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture,
        }


        // client.createIfNotExists(doc)
        //     .then(() => {
        //         navigate('/', { replace: true })
        //     })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
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
                    <div className='p-5'>
                        {/* <img src={logo} width='130px' alt='logo' /> */}
                    </div>
                    <div className='auth-form-container'>
                        <Form className='flex flex-col '>
                            <Form.Group className="mb-3  flex flex-col " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 flex flex-col" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <div className='flex flex-col shadow-2x1 justify-center m-3 items-center items-baseline'>
                                <Form.Label>Sign-in with google</Form.Label>
                                <GoogleOAuthProvider clientId="640093599683-nq3442ef2dupr5dh9vkg8kh34ejs2h2m.apps.googleusercontent.com">
                                    <GoogleLogin
                                        render={(renderProps) => (
                                            <button
                                                type='button'
                                                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none flex flex-col'
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                <FcGoogle className='mr-4' /> Sign in with google
                                            </button>
                                        )}
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy="single_host_origin"
                                    />
                                </GoogleOAuthProvider>
                            </div>
                        </Form>
                        <button className='link-btn m-3 ' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;