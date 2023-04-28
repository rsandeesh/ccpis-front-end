import React, { useState } from "react";
import "../../App.css";
import { Button } from "../button/Button";
import "./index.css";
import video1 from '../../assets/videos/video-1.mp4';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


function HeroSection() {

    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            navigate('/');
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div className="hero-container">
            <video src={video1} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>Let's take a closer look at cummulus clouds</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={console.log("hey")}
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
                <Button onClick={handleLogout}>Log out</Button>
            </div>
        </div>
    );
}

export default HeroSection;
