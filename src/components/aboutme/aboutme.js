import './aboutme.css';
import React, { useState, useEffect } from 'react';

export default function AboutMe() {


    useEffect(() => {

    }, []);

    return (
        <div className="aboutme-div">
            <div className='aboutme container'>
                <div className='aboutme-header'>About Me</div>
                <div className='about-flex-container'>
                    <div className='aboutme-description'>

                        I'm a software developer with over

                        <div className='rainbow-about rainbow_text_animated-about'>three years of experience.</div>

                        As an experienced full-stack developer specializing in web development, I have a strong passion for developing innovative, user-centric applications that solve real-world problems. With a proven track record of optimizing application performance, collaborating with team members, and deploying complex web applications, I am confident in my ability to deliver high-quality products on time and within budget. <br></br><br></br>In addition to web development, I have designed and managed PowerBI dashboards and implemented background API tasks to ensure data-driven decision-making. I am a quick learner and adaptable problem solver who values effective communication, attention to detail, and a strong work ethic. <br></br><br></br>Let's work together to build something great!
                    </div>
                    <div className='user_image'>
                        <img src="/me.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}