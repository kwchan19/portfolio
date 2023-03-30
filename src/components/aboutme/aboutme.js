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

                        I am a highly motivated software developer with

                        <div className='rainbow-about rainbow_text_animated-about'>three years of experience</div>

                        in full stack development, business intelligence, and AI-powered solutions. I have a strong passion for building innovative, user-centric applications that solve real-world problems and provide value to the end-user.

                        <br></br><br></br>With a keen eye for detail and a commitment to excellence, I have demonstrated the ability to optimize application performance, reduce server load, and improve user interface responsiveness. I have a proven track record of collaborating with team members to deliver high-quality products, on time and within budget.

                        <br></br><br></br>In my previous roles, I have successfully led development efforts, optimized SQL querying processes, and deployed complex web applications. I have also designed and managed PowerBI dashboards and implemented background API tasks to ensure data-driven decision-making and minimize downtime.

                        In addition to my technical skills, I am a quick learner and adaptable problem solver who is always seeking to expand my knowledge and skillset. I believe that effective communication, attention to detail, and a strong work ethic are essential to achieving success in the software development industry.

                        <br></br><br></br>I am excited to bring my experience and passion for software development to your next project. Let's work together to build something great!

                    </div>
                    <div className='user_image'>
                        <img src="/user.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}