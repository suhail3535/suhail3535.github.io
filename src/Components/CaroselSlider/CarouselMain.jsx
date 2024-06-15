import React, { useState } from 'react';
import Carousel from './Carousel';
import './Carousel.css';
import fashion from '../images/fashion.png';
import { Box, Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import zakat from "../images/zakat.png";
import zym from "../images/zim.png";
import dict from "../images/dictonary.png";
import car from "../images/caradd.png";
import cctns from "../images/cctns.png";
import zeros from "../images/zeros.png";
import dinesh from "../images/dn.png";
import rctproject from "../images/rctproject.png";
import todoapp from "../images/new111.jpg";
import final from "../images/final.png";
import triphub from "../images/2.png";
import toptrip from "../images/3.png";
import todonew from "../images/todonew.png";
import shop from "../images/shopper.png";
function CaroselMain () {
    const items = [
        {
            title: 'Fashion Frenzy',
            description: 'Fashion Frenzy is an ECommerce Website & is a clone of Anthropologie. With a vast collection of fashion and clothing products, we offer a seamless shopping experience.',
            techStack: ['React', 'Redux', 'JavaScript', 'Node Js', 'Express Js', 'MongoDB', 'Chakra-UI'],
            githubLink: 'https://github.com/suhail3535/alive-run-138',
            liveLink: 'https://faishonfrenzyecom.vercel.app/',
            imgSrc: fashion, // Path to the fashion image
        },
        {
            title: 'Raj Police Theft Vehicle Module(Demo)',
            description: "Introducing CCTNS Raj Police Portal's 'E-FIR Vehicle Theft Module': an online platform enabling civilians to report vehicle thefts seamlessly. This responsive UI is currently under development, designed to streamline reporting for enhanced public safety.",
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'React-toastify', 'Ant-Design', 'Chakra-UI'],
            githubLink: 'https://github.com/your-repo-link', // Replace with the actual GitHub link
            liveLink: 'https://your-live-link.com', // Replace with the actual live link
            imgSrc: cctns, // Path to the police image
        },
        {
            title: 'Freelance Frontend Developer | Client: Bangladesh',
            description: 'Developed a responsive and user-friendly website UI using React.js and component libraries. Collaborated with the client to deliver a high-quality product, focusing on seamless navigation and an intuitive user experience.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'React-toastify', 'Ant-Design', 'Chakra-UI'],
            githubLink: 'https://github.com/your-repo-link', // Replace with the actual GitHub link
            liveLink: 'https://your-live-link.com', // Replace with the actual live link
            imgSrc: zakat, // Path to the bangladesh image
        },
        {
            title: 'AeroWear',
            description: 'Aerowear is known for its trendy and affordable clothing, with a focus on casual wear such as t-shirts, hoodies, and jeans. The brand also offers a range of accessories such as bags.',
            techStack: ['React', 'Redux', 'Json Server', 'HTML', 'CSS', 'JavaScript', 'Chakra-UI'],
            githubLink: 'https://github.com/your-repo-link', // Replace with the actual GitHub link
            liveLink: 'https://your-live-link.com', // Replace with the actual live link
            imgSrc: rctproject, // Path to the aerowear image
        },
        {
            title: 'Fitness World',
            description: 'Fitness World: Your ultimate destination for wellness. Explore tailored workout plans, nutrition tips, and community support. Achieve your fitness goals today!',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Material-UI', 'Chakra-UI'],
            githubLink: 'https://github.com/your-repo-link', // Replace with the actual GitHub link
            liveLink: 'https://your-live-link.com', // Replace with the actual live link
            imgSrc: zym, // Path to the fitness image
        },
        {
            title: 'Login Management System',
            description: "Masai School's student login management system allows students to access upcoming lectures, assignments, and the daily schedule.",
            techStack: ['React', 'Redux', 'Json Server', 'HTML', 'CSS', 'JavaScript', 'Chakra-UI', 'Material-UI'],
            githubLink: 'https://github.com/your-repo-link', // Replace with the actual GitHub link
            liveLink: 'https://your-live-link.com', // Replace with the actual live link
            imgSrc: final, // Path to the login management system image
        },
        // Repeat the item structure for other items if needed
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3;
    const isNextDisabled = currentIndex >= items.length - itemsPerPage;

    const handleNext = () => {
        if (!isNextDisabled) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const renderItems = items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
        <div className='project_card' key={index}>
            <div className='card_img'>
                <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className='details'>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
            </div>
            <div className='project-tech-stack'>
                Tech Stack:
                {item.techStack.map((tech, i) => (
                    <div key={i}>{tech}</div>
                ))}
            </div>
            <Box className='project-card-btn'>
                <Button size={['xs', 'sm', 'sm', 'sm']}>
                    <a href={item.githubLink} target='_blank' rel='noreferrer'>
                        Source Code
                    </a>
                    &nbsp;
                    <FaGithub />
                </Button>
                <Button size={['xs', 'sm', 'sm', 'sm']}>
                    <a href={item.liveLink} target='_blank' rel='noreferrer'>
                        Live
                    </a>
                    &nbsp;
                    <IoEyeSharp style={{ marginTop: '5px' }} />
                </Button>
            </Box>
        </div>
    ));

    return (
        <div className='main_slider_app'>
            <h1 className='heading'>Projects</h1>
            <div className='carousel-container'>
                <div className='arrow prev' onClick={handlePrev} style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}>
                    &lt;
                </div>
                <Carousel items={renderItems} />
                <div className='arrow next' onClick={handleNext} style={{ visibility: isNextDisabled ? 'hidden' : 'visible' }}>
                    &gt;
                </div>
            </div>
        </div>
    );
}

export default CaroselMain;
