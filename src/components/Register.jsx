import React, { useState } from 'react'
import earthVideo from '../assets/earthVideo.mp4';
import { Button, Form } from 'react-bootstrap';


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
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
                    <div className='auth-form-container'>
                        <Form className='flex flex-col '>
                            <Form.Group className="mb-3  flex flex-col " controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group className="mb-3 flex flex-col" controlId="formBasicPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="name" placeholder="Enter last name" />
                            </Form.Group>

                            <Form.Group className="mb-3 flex flex-col" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Agree terms and conditions" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <button className='link-btn m-3' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;