import React, { useState } from 'react'
import earthVideo from '../../../assets/videos/earthVideo.mp4';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./index.css";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  }

  const createUser = (e) => {
    e.preventDefault();
    const user = {
      name: { name },
      email: { email },
      country: { country },
      password: { password }
    };
    console.log(user);
    navigate('/login');
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
            <Form className='flex flex-col ' onSubmit={createUser}>
              <Link to="/" className="logo">
                CCPIS
                <i className="fab fa-typo3" />
              </Link>
              <Form.Group className='mb-3 flex flex-col' onChange={(e) => setName(e.target.value)}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
              </Form.Group>
              <Form.Group className='mb-3 flex flex-col' onChange={(e) => setName(name + e.target.value)}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
              </Form.Group>
              <Form.Group className='mb-3 flex flex-col' onChange={(e) => setEmail(e.target.value)}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3 flex flex-col' onChange={(e) => setCountry(e.target.value)}>
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" required />
              </Form.Group>
              <Form.Group className='mb-3 flex flex-col'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className='mb-3 flex flex-col' onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create an account
              </Button>
            </Form>
            <button className='link-btn m-3' onClick={navigateToLogin}>Already have an account? Login here.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;