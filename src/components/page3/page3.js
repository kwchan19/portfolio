import { useState } from 'react';
import './page3.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Page3() {
    const [projects, setProjects] = useState([
        {
            company: "Toon Tracker",
            logo: "/toons.jpg",
            img: '/toons.jpg',
            role: 'Personal Project',
            tasks: [
                "Designed and developed an iOS mobile application using Swift that allows users to search for their favourite comics and save them to their list.",
                "Built web scrapers in Python to acquire data on over 10,000 comic titles, including descriptions, chapters, and release dates, resulting in a database of over 100,000 rows.",
                "Optimized the web scrapers to reduce scraping time by over 50%, resulting in faster data acquisition and improved user experience.",
                "Utilized Firebase APIs to retrieve data from the database with an average response time of less than 1 second, improving the overall performance of the mobile application"
            ],
            secondPage: "/toondemo.png"
        },
        {
            company: "Sorceror's Expedition",
            logo: "/rpggame.jpg",
            img: '/rpggame.jpg',
            role: 'Personal Project',
            tasks: [
                "Designed and developed a Java executable application of a game that allows users to play a Pokemon-style adventure game.",
                "Implemented a variety of game features including turn-based battles, character movement, and interactive environments.",
                "Utilized object-oriented programming principles to create modular code for increased efficiency and maintainability.",
                "Optimized game performance through efficient resource management and multi-threading techniques."
            ],
            secondPage: "/rpgscreenshot.png"
        },
        {
            company: "Fine Hygienic Holding",
            logo: "/chatbot.png",
            img: "/fine.png",
            role: 'Full Stack Developer',
            tasks: [
                "Led the development and deployment of an AI-powered chatbot service to the company's WhatsApp Business profile, resulting in a 20% decrease in the average time spent on repetitive HR inquiries.",
                "Utilized microservices architecture to create an AWS-based infrastructure for the chatbot service, ensuring high availability and scalability.",
                "Developed the chatbot to perform various tasks, including product purchases, e-commerce lead management, meeting room booking, and vacation request submission.",
                "Optimized the chatbot's performance to increase the efficiency of the HR department by 10% on average.",
                "Conducted rigorous testing and debugging to ensure the chatbot's smooth operation, minimizing code-breaking errors."

            ],
            secondPage: "/flowchart.png"
        },
        {
            company: "Mayven Software",
            logo: "/socialmedia.jpg",
            img: '/mayven.png',
            role: 'Co-Founder & Lead Developer',
            tasks: [
                "Led development efforts in the successful launch of a social media mobile application for both iOS and Android platforms.",
                "Conducted code reviews and optimization to reduce API calls to the database by 25%, improving app performance and reducing server load.",
                "Debugged live products, addressing urgent code-breaking errors to ensure optimal user experience and minimize downtime.",
                "Implemented a user data caching system, resulting in a 40% reduction in data retrieval time and improved overall application performance."
            ],
            secondPage: "/mayvendemo.png"
        },
        {
            company: "Little Guy Games",
            logo: "/superracer.png",
            img: '/lgg.png',
            role: 'Full Stack Developer',
            tasks: [
                "Upgraded web application from Vue/Nuxt.js to JavaScript/Next.js.",
                "Optimized transaction speed of the web application by implementing Fauna database services to store transactions and reducing reliance on the Solana blockchain, resulting in a 20% improvement in user satisfaction.",
                "Created API endpoints to secure all database calls, resulting in a 50% reduction in security vulnerabilities.",
                "Implemented background API tasks to query, insert, and update database rows for user-owned NFTs in their Solana wallet, resulting in a 40% decrease in errors.",
                "Completed front-end design work using React.js/Tailwind/SASS, resulting in a 15% increase in user interface responsiveness.",
                "Improved existing code infrastructure by reducing the runtime of multiple API calls up to 50%, using database caching (10+ seconds to 5-8 seconds per request), resulting in a 25% decrease in server load."
            ],
            secondPage: "/superracerdemo.png"
        },
        {
            company: "Fine Hygienic Holding",
            logo: "/bi.png",
            img: '/fine.png',
            role: 'Business Intelligence Developer',
            tasks: [
                "Developed and deployed a Streamlit web application using Python on Windows Server 2022, allowing for real-time editing and display of inventory data. Increased department productivity by 25%.",
                "Optimized Oracle SQL querying processes, reducing load times by 85%, resulting in a 30% increase in system performance.",
                "Maintained a web application and Oracle SQL database with over 500k rows of inventory data, ensuring 99.9% uptime and minimal system downtime.",
                "Organized and documented complex SQL queries of over 1000 lines of code into plain English, improving collaboration and understanding of the system by 50%.",
                "Designed and managed PowerBI dashboards to display sales data & leads, providing insights for data-driven decision-making, resulting in a 10% increase in sales.",
                "Scheduled automated daily PowerBI dataset fetches through the cloud using Power Automate, saving 5 hours of manual labor per week."
            ]
        }
    ])

    const [index, setIndex] = useState(0);

    function ReturnDivs() {
        return projects.map((val, ind) => {
          
                return (
                   
                        <button id={ind} className= "sideCompanyBtn" onClick={()=>{
                            setIndex(ind);
                        }}><img src={val.logo} className={index == ind ? "companySideImageActive" : "companySideImage"}></img></button>
                
                )
            
        });
    }

    function ReturnList() {
        return projects[index].tasks.map((val, ind) => {
            return (
                <li>
                    {val}
                </li>
            )
        });
    }


    return (
        <div className='page3div'>
            <div className="page3 container">
                <h1 className='heading'>My Projects</h1>
                <h2 className='subheading'>A Showcase of My Software Development Projects</h2>
                <div className='companiesDiv'>
                    <div className='sidebarCompanies'>
                        <ReturnDivs/>
                    </div>
                    <div className='mainCompany'>
                        <div className='companyButton'>
                            
                            <Carousel className='carousel' interval={null}>
                                <Carousel.Item>
                                    <div className='carousel-div'>
                                        <div className='carousel-flexbox'>
                                            <img src={projects[index].img} className='companyLogoMains'></img>
                                            <h1>{projects[index].company}</h1>
                                        </div>
                                        <div className='job-description'>
                                            <h2>{projects[index].role}</h2>
                                            <ul>
                                                <ReturnList/>
                                            </ul>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='secondPage'>
                                        {
                                            projects[index].secondPage ? (
                                                <img src={projects[index].secondPage}></img>
                                            ):(
                                                <div className='noImage'>Cannot show demo due to privacy</div>
                                            )
                                        }
                                       
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}