import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const Carousel = ({ items }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);

    useEffect(() => {
        setIsPrevDisabled(currentSlide === 0);
        setIsNextDisabled(currentSlide >= items.length - settings.slidesToShow);
    }, [currentSlide, items.length]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow onClick={nextSlide} disabled={isNextDisabled} />,
        prevArrow: <PrevArrow onClick={prevSlide} disabled={isPrevDisabled} />,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    function nextSlide () {
        if (!isNextDisabled) {
            setCurrentSlide((prev) => prev + settings.slidesToScroll);
        }
    }

    function prevSlide () {
        if (!isPrevDisabled) {
            setCurrentSlide((prev) => prev - settings.slidesToScroll);
        }
    }

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <div key={index} className="carousel-item">
                    {item}
                </div>
            ))}
        </Slider>
    );
};

const NextArrow = ({ onClick, disabled }) => {
    return (
        <div className={`arrow next ${disabled ? 'disabled' : ''}`} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );
};

const PrevArrow = ({ onClick, disabled }) => {
    return (
        <div className={`arrow prev ${disabled ? 'disabled' : ''}`} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    );
};

export default Carousel;
