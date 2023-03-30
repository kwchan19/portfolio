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
                <h2 className='aboutMeSubheader'>Click the icons below to view my backend, frontend, and technology stack</h2>
                <div className='content'>
                    <button id="btn1" className='database' onClick={()=>{
                        if(isLoading == false) {
                            setProgress(0);
                        }
                        
                    
                    }}><svg className={ index == 0 ? "activeImage":"notActiveImage" } xmlns="http://www.w3.org/2000/svg" width="199.801" height="249.635" viewBox="0 0 199.801 249.635">
                    <g id="database-svgrepo-com" transform="translate(-2.51)">
                      <path id="Path_7" data-name="Path 7" d="M102.406,42.809c-46.9,0-86.149-13.746-96.878-32.356A20.41,20.41,0,0,0,2.51,20.646v30.39c0,23.493,44.722,42.509,99.9,42.509s99.905-19.016,99.905-42.509V20.646a20.3,20.3,0,0,0-3.027-10.193C188.565,29.062,149.321,42.809,102.406,42.809Z" transform="translate(0 93.293)" />
                      <path id="Path_8" data-name="Path 8" d="M102.406,49.117c-46.9,0-86.149-13.806-96.878-32.336A20.1,20.1,0,0,0,2.51,26.944v30.41c0,23.473,44.722,42.509,99.9,42.509s99.905-19.036,99.905-42.509V26.944a20.014,20.014,0,0,0-3.027-10.153C188.565,35.311,149.321,49.117,102.406,49.117Z" transform="translate(0 149.771)" />
                      <path id="Path_9" data-name="Path 9" d="M199.572,4.334c-1.935,17.19-44.623,30.956-97.156,30.956C49.9,35.29,7.195,21.524,5.259,4.334A20.35,20.35,0,0,0,2.51,14.061V44.441c0,23.512,44.722,42.509,99.9,42.509s99.905-19,99.905-42.509V14.061A20.117,20.117,0,0,0,199.572,4.334Z" transform="translate(0 38.681)"/>
                      <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="97.335" cy="32.167" rx="97.335" ry="32.167" transform="translate(5.081 0)"/>
                    </g>
                  </svg>
                  
                  </button>
                    <div className='progressBarDiv'>
                        <div id="progressDbToTools" className="">
                        
                        </div>
                    </div>
                    <button id="btn2" className='toolsBtn' onClick={()=>{
                       if(isLoading == false) {
                            setProgress(1);
                       }
                    
                    }}><svg className={ index == 1 ? "activeImage":"notActiveImage" } xmlns="http://www.w3.org/2000/svg" width="489.101" height="491.723" viewBox="0 0 489.101 491.723">
                        <g id="tools" transform="translate(-11.5 501.723)">
                        <path id="Path_1" data-name="Path 1" d="M36.3-500.6A35.126,35.126,0,0,0,14.1-481l-2.6,5.5V-312c0,161,0,163.6,2,168.9,2.7,7.3,10.8,16.1,17.7,19.2,5.3,2.4,5.7,2.4,48.3,2.9l43,.5.5,8.1c.7,11.5,2,12.7,16.7,15.5,6.7,1.2,7.3,1.6,9.3,6.7,1.2,3.1,1.1,3.5-3.9,11-8.4,12.8-8.7,12.1,13.2,33.9,21.8,21.9,21.1,21.6,33.8,13.2,7.6-5,7.9-5,11.4-3.8,2,.8,4,1.8,4.4,2.4.4.5,1.5,4.8,2.4,9.5,1.4,7.1,2.2,9,4.7,11.2l3,2.8h50.8l3-2.5c2.5-2.1,3.2-3.8,4.7-11.5,1.8-9.5,2.1-9.9,7.2-11.9,3.1-1.3,3.6-1.1,11.2,3.8,12.9,8.3,12,8.6,33.8-13.2,21.9-21.8,21.6-21.1,13.2-33.9-5-7.5-5.1-7.9-3.9-11,2-5.1,2.6-5.5,9.3-6.7,14.7-2.8,16-4,16.7-15.5l.5-8.1,7-.3,7-.3L407-74.3c29.6,48.8,33.3,53.8,42.2,58.2,15.9,7.7,36.2,2,45.7-12.7a35.822,35.822,0,0,0,2.7-33.7c-1.3-2.8-17.7-30.2-36.5-60.9l-34.1-56v-6.2a67.87,67.87,0,0,1,1.6-13.1c2-8.2,2.1-24,.3-30.3-1.1-3.6-1.4-29.7-1.9-126.5l-.5-122-2.8-5.3a35.636,35.636,0,0,0-16.3-15.8l-5.9-2.9L221-501.7C73.6-501.8,39.7-501.6,36.3-500.6Zm352.5,38.2c2,1.4,2.2,2.3,2.2,11.4,0,7.6-.4,10.2-1.6,11.4C388-438.2,376.6-438,279-438s-109-.2-110.4-1.6c-1.2-1.2-1.6-3.8-1.6-11.4,0-9.1.2-10,2.2-11.4S183.3-464,279-464,386.8-463.8,388.8-462.4Zm-322,.8c8.6,4.7,7.8,18.4-1.3,22.2-4.4,1.8-5.9,1.8-10.2-.3-12-5.7-8-23.3,5.2-23.2A14.371,14.371,0,0,1,66.8-461.6Zm36.6,1.6c5.7,5.1,6,12.5.6,17.9a12.33,12.33,0,0,1-21-8.7A12.18,12.18,0,0,1,103.4-460Zm34.5-.5c3.9,3.4,5.6,8.5,4.2,12.7-2.5,7-9.3,10.9-15.5,8.8a12.476,12.476,0,0,1-4.6-21.3C126.2-464,133.5-464.1,137.9-460.5ZM408-332.9v67.1l-2.2-1.6c-13.5-9.5-24.9-13.7-39.4-14.4-9.4-.4-10.3-.3-12.3,1.7-4,4-2.9,6.9,10.4,28.7,6.9,11.3,12.5,20.9,12.5,21.5s-2.5,5.2-5.5,10.3l-5.4,9.3-11.3.6c-8.4.5-11.4.4-12-.6-12.5-21.1-25.8-41.4-27.6-42.3-5.9-2.9-10.4,1.8-15.5,16.5-5.8,16.6-4.6,34.2,3.3,50.6,9.7,19.9,27.5,33.5,48.1,36.6,4.1.6,8.4,1.3,9.5,1.5,1.2.2,3.1,2,4.3,3.9l2,3.5H204.7c-156,0-162.4-.1-165.7-1.9a20.129,20.129,0,0,1-5.8-5.1L31-150.3V-400H408Zm-19.5,71.7c6.8,3.4,18.4,15.3,21.8,22.4q11.1,23.25.5,46.8c-1.6,3.6-2.8,7.4-2.5,8.5.2,1.1,17.6,30.3,38.7,64.9,35.8,58.7,38.4,63.3,38.8,68.3,1.7,20-22.5,31.2-36,16.7C448.4-35.2,430.4-64,410-97.5c-20.4-33.6-38-61.8-39.2-62.8-1.3-1.1-3.7-1.7-6.7-1.7-24.4,0-46.7-17.5-52.1-40.9-1.4-5.9-.9-24.6.6-26.1.6-.6,4.8,5.3,11.3,15.9,6.3,10.4,11.1,17.3,12.6,17.9,3,1.4,35.2-.4,37.8-2.1C377.1-199.1,393-227,393-230c0-1.5-4-9.2-9.6-18.4-5.2-8.7-9.8-16.4-10.1-17.2C372.6-267.4,381.2-264.9,388.5-261.2ZM281.4-120.1c1,1.6-5.6,13.1-10.2,17.8A50.445,50.445,0,0,1,260-94.6c-5.9,2.8-7.4,3.1-16.5,3.1s-10.6-.3-16.5-3.1a50.445,50.445,0,0,1-11.2-7.7c-4.6-4.7-11.2-16.2-10.2-17.8C206.3-121.3,280.7-121.3,281.4-120.1Zm-94.5,6.8C194.3-89.1,218.5-71,243.5-71s49.2-18.1,56.6-42.3l2.1-6.7h20.9c19.6,0,20.9.1,20.9,1.8,0,1.5-1.5,2.2-7.7,3.6-4.3.9-8.6,2.2-9.5,3-2.2,1.6-9.9,19.9-10.6,24.9-.4,3.3.2,4.8,4.1,10.6l4.5,6.8L314.7-59.2l-10.2,10L298-53.6c-5.6-3.9-7.1-4.4-10.5-4.1-5,.5-23.4,8.2-25.1,10.5-1.4,1.8-1.6,2.7-3.4,11.5L257.9-30H243.5c-16.2,0-14.2,1.2-16.5-10.1-1.4-7.1-3.1-8.7-14.5-13.4-13.2-5.6-15.6-5.6-23.5-.1l-6.5,4.4-10.2-10L162.2-69.3l4.5-6.8c3.9-5.8,4.5-7.3,4.1-10.6-.7-5-8.4-23.3-10.6-24.9-.9-.7-5.2-2.1-9.4-3-6.3-1.4-7.8-2-7.8-3.5,0-1.8,1.2-1.9,20.9-1.9h20.9Z"/>
                        <path id="Path_2" data-name="Path 2" d="M85-350.9A20.76,20.76,0,0,0,73-341c-1.8,3.5-2,5.9-2,23.5,0,18.2-.1,19.6-2,21.5a7.382,7.382,0,0,1-4.3,2c-5.6,0-8.2,8.6-3.8,12.2a8.738,8.738,0,0,0,4.2,1.8,6.97,6.97,0,0,1,3.9,2c1.9,1.9,2,3.3,2,21.5,0,17.2.2,20,1.9,23.3C77.1-225,81.7-223,96.8-223c13.3,0,15.2-.8,15.2-6.8,0-5.8-2.6-7.2-13.8-7.2C84.4-237,85-235.9,85-260.1c0-17.4-.2-19.9-2-23.3-1.9-3.8-1.9-3.9,0-7.7,1.8-3.4,2-5.9,2-23.2,0-23.6-.5-22.7,12.4-22.7,11.6,0,14.6-1.5,14.6-7.6,0-5.4-2.8-6.9-13.9-7.1C92.8-351.8,86.9-351.4,85-350.9Z"/>
                        <path id="Path_3" data-name="Path 3" d="M209.3-351c-1.7.7-9.5,15.3-31.8,60-16.2,32.5-29.5,60.2-29.5,61.5,0,5.5,8.6,8.8,12.3,4.7,2-2.2,59.7-117.9,59.7-119.7,0-1.9-4.1-6.2-6.5-6.8A7.616,7.616,0,0,0,209.3-351Z"/>
                        <path id="Path_4" data-name="Path 4" d="M258.8-350.5c-4.7,2.6-4.6,9.9.2,12.5,1,.5,6.1,1,11.3,1q9.45,0,10.5,1.2c.6.8,1.2,9.6,1.4,21.3.3,17,.7,20.5,2.2,23.7,1.9,3.6,1.9,3.7,0,7.5-1.6,3.3-1.9,6.7-2.2,23.8-.2,11-.8,20.4-1.3,21-.6.5-5.8,1.2-11.6,1.5-10,.5-10.7.6-12.6,3.2-1.3,1.8-1.8,3.4-1.3,5.1,1.2,5.1,2.8,5.7,15.1,5.7,12.4,0,15.5-.8,19.9-4.8,5.8-5.5,6.6-8.7,6.6-29.8,0-17.2.2-19.3,1.8-20.7a6.468,6.468,0,0,1,3.9-1.7c2.7,0,6.3-4.1,6.3-7.3,0-3.1-3.1-6.7-5.8-6.7a8.2,8.2,0,0,1-4-1.6c-2.1-1.5-2.2-2-2.2-21.2,0-18.5-.1-20.1-2.2-24.2-2.7-5.4-7.1-8.5-13.9-9.9C273.8-352.5,262-352.2,258.8-350.5Z"/>
                        <path id="Path_5" data-name="Path 5" d="M118-307.5c-14.3,9.6-21.8,15.2-22.4,16.8-1.9,5.3-.5,6.8,21.4,22.3,11.5,8.2,22.1,15.3,23.5,15.9,5.8,2.1,11.5-4.8,8.2-9.9-.9-1.4-8.9-7.7-17.7-14l-16.1-11.5,16.8-11.3c18.6-12.5,20.4-14.6,16.6-19.6a6.468,6.468,0,0,0-5.4-2.9C140-321.9,136.2-319.7,118-307.5Z"/>
                        <path id="Path_6" data-name="Path 6" d="M220-320c-2.5,2.5-2.6,7.4-.2,9.7,1,1,8.6,6.3,17,11.8,8.3,5.5,15.2,10.3,15.2,10.6,0,.4-7.4,5.9-16.4,12.3s-16.7,12.3-17,13.2c-1.9,4.9,1.6,10.4,6.5,10.4,3.3,0,44.7-29.5,46.9-33.3,2.6-4.7.3-7-22.8-22.5C226.7-322.8,224-324,220-320Z"/>
                        <path id="Path_7" data-name="Path 7" d="M462.5-59.3c-5,1.3-9.5,7.1-9.5,12.3,0,4.6,3.2,9.2,7.7,11.2,4,1.7,4.9,1.8,8.6.6A12.452,12.452,0,0,0,476-53.7a12.616,12.616,0,0,0-3.7-4.1C469.8-59.1,464.9-59.9,462.5-59.3Z"/>
                        </g>
                    </svg>
                  </button>
                    <div className='progressBarDiv'>
                        <div id="progressToolsToPc" className="">
                        
                        </div>
                    </div>
                    <button id="btn3" className='database' onClick={()=>{
                      if(isLoading == false) {
                            setProgress(2);
                      }
                    
                    }}><svg className={ index == 2 ? "activeImage":"notActiveImage" }   xmlns="http://www.w3.org/2000/svg" width="1280" height="982.85" viewBox="0 0 1280 982.85">
                    <g id="pc" transform="translate(0 1115)">
                      <path id="Path_2" data-name="Path 2" d="M39.1-1112.9c-19,5.5-29.9,16-36.1,34.9l-3,9.2v695.3l2.4,8.2c4,14.2,12.4,25.3,23.7,31.3,12.1,6.4-8.9,6,285.4,6,168.5,0,269.6.4,270.5,1,2.3,1.4,2,34.3-.4,46.4-3.7,18.9-12.6,38.2-22.1,48.1l-5,5.3-21,.6c-65.6,2.1-134.9,8.2-176.8,15.7-24.2,4.3-44.1,11.1-46.7,15.8-.5,1.1-1,8-1,15.3,0,13.4,0,13.4,2.8,16,3.5,3.3,5,4.1,14.7,7.2,99.7,32.6,527.3,32.6,627,0,9.7-3.1,11.2-3.9,14.8-7.2,2.7-2.6,2.7-2.6,2.7-16,0-7.3-.5-14.2-1-15.3-2.6-4.7-22.5-11.5-46.7-15.8-41.9-7.5-111.2-13.6-176.8-15.7l-21-.6-5-5.3c-9.5-9.9-18.4-29.2-22.1-48.1-2.4-12.1-2.7-45-.4-46.4.9-.6,102-1,270.5-1,294.3,0,273.3.4,285.4-6,11.3-6,19.7-17.1,23.7-31.3l2.4-8.2v-695.3l-3-9.1c-3.5-10.8-6.6-15.9-13.6-22.7-6.2-5.9-13.1-9.5-23.7-12.4l-7.7-2-593.2.1C64.1-1114.8,45.3-1114.7,39.1-1112.9Zm1160,78.8,2.9,2.9v297.1c0,228.1-.3,297.6-1.2,299.6a10.249,10.249,0,0,1-3.9,4.1c-4.2,2.1-1109.6,2.1-1113.8,0a10.248,10.248,0,0,1-3.9-4.1c-.9-2-1.2-71.5-1.2-299.6v-297.1l2.9-2.9,2.9-2.9H1196.2Z"/>
                    </g>
                  </svg>
                  
                  </button>
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