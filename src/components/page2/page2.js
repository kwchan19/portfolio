import './page2.css';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Backend from './backend';
import Tools from './tools';
import FrontEnd from './frontend';

export default function Page2() {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function disableAllButtons() {
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
    }

    function enableAllButtons() {
        const buttons = document.getElementsByTagName("button");
        for (const button of buttons) {
            button.disabled = false;
        }
    }

    function setProgress(ind) {
        setIsLoading(true);
        if(index == 0) { // If current index is at DB
            if(ind == 1) { // If user wants to switch to Tools
                document.getElementById("progressDbToTools").classList.remove('progressBarRemove');
                document.getElementById("progressDbToTools").classList.add('progressBar');
            }
            else if(ind == 2) { // If user wants to switch to PC
                document.getElementById("progressDbToTools").classList.remove('progressBarRemove');
                document.getElementById("progressDbToTools").classList.add('progressBar');
                setTimeout(() => {  
                    document.getElementById("progressToolsToPc").classList.remove('progressBarRemove');
                    document.getElementById("progressToolsToPc").classList.add('progressBar');
                }, 1300);
            }
        }
        else if (index == 1) { // If current index is at Tools
            if(ind == 0) { // If user wants to switch to DB
                document.getElementById("progressDbToTools").classList.remove('progressBar');
                document.getElementById("progressDbToTools").classList.add('progressBarRemove');
            }
            else if(ind == 2) { // If user wants to switch to PC
                document.getElementById("progressToolsToPc").classList.remove('progressBarRemove');
                document.getElementById("progressToolsToPc").classList.add('progressBar');
            }
        }
        else if (index == 2) { // If current index is at PC
            if(ind == 0) { // If user wants to switch to DB
                document.getElementById("progressToolsToPc").classList.remove('progressBar');
                document.getElementById("progressToolsToPc").classList.add('progressBarRemove');
                setTimeout(() => {  
                    document.getElementById("progressDbToTools").classList.remove('progressBar');
                    document.getElementById("progressDbToTools").classList.add('progressBarRemove');
                }, 1300);
            }
            else if(ind == 1) { // If user wants to switch to Tools
                document.getElementById("progressToolsToPc").classList.remove('progressBar');
                document.getElementById("progressToolsToPc").classList.add('progressBarRemove');
            }
        }

        setTimeout(() => {  
            setIndex(ind);
            setIsLoading(false);
        }, 1300);
       
    }

    function ReturnList(){
        if(isLoading == false) {
            if(index == 0) {
                return (
                    <Backend/>
                )
            }
            else if(index == 1) {
                return (
                    <Tools/>
                )
            }
            else if(index == 2) {
                return (
                    <FrontEnd />
                )
            }
        }
        else {
            return (
                <div/>
            )
        }
    }

    return (
        <div className='page2'>
            <div className='container'>
                <h1 className='aboutMeHeader'>Skills & Expertise</h1>
                <h2 className='aboutMeSubheader'>Backend, Frontend, and Technology Stack</h2>
                <div className='content'>
                    <button id="btn1" className='database' onClick={()=>{
                        if(isLoading == false) {
                            setProgress(0);
                        }
                        
                    
                    }}><img src="/database.png"></img></button>
                    <div className='progressBarDiv'>
                        <div id="progressDbToTools" className="">
                        
                        </div>
                    </div>
                    <button id="btn2" className='toolsBtn' onClick={()=>{
                       if(isLoading == false) {
                            setProgress(1);
                       }
                    
                    }}><img src="/tools.png"></img></button>
                    <div className='progressBarDiv'>
                        <div id="progressToolsToPc" className="">
                        
                        </div>
                    </div>
                    <button id="btn3" className='database' onClick={()=>{
                      if(isLoading == false) {
                            setProgress(2);
                      }
                    
                    }}><img src="/pc.png"></img></button>
                </div>
                <ReturnList/>
            </div>
        </div>
    );
}

/*

 <div className='page2'>
            <div className='image'>

            </div>
            <div className='content container'>
                <div className='experiences'>
                    <div className='may2017'>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                        <div className='internship'>
                            <h1 className='date'>MAY 2017</h1>
                            <p className='description'>In May 2017, I traveled to Dubai for an internship where I learned Full Stack development, gaining valuable skills, and contributing to real-world projects.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='coop1'>
                            <h1 className='date'>MAY 2018</h1>
                            <p className='description'>In May 2017, I traveled to Dubai for an internship where I learned Full Stack development, gaining valuable skills, and contributing to real-world projects.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='coop2'>
                            <h1 className='date'>JAN 2019</h1>
                            <p className='description'>In May 2017, I traveled to Dubai for an internship where I learned Full Stack development, gaining valuable skills, and contributing to real-world projects.</p>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>

        
.image {
    width: 100%;
    height: 100%;
    position: absolute;
}

.image::before {    
    content: "";
    background-image: url('../../../public/dubai.jpg');
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
}

.experiences {
    display: flex;
    width: 100%;
}

.content {
    display: flex;
    color: white;
    flex-direction: column;
    
    height: 100%;
    justify-content: center;

}

.date {
    font-size: 45px;
    font-weight: 400;
}
.description {
    margin-top: 20px;
    font-size: 17px;
    line-height: 40px;
}

.may2017 {
    width: 50%;
    color: white;
}
.caption {
    color: white;
}

.internship {
    
    margin-top: 50px;
}

.coop1 {
    
    margin-top: 50px;
}

.coop2 {
  
    margin-top: 50px;
}

.carousel {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
    width: 100%;
}
        */