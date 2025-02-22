"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'web-designer',
        name: 'shoruya sharma',
        imgSrc: '/images/wework/boy 1.png',
    },
    {
        profession: 'software engineer',
        name: 'rahul sharma',
        imgSrc: '/images/wework/boy 6.png',
    },
    {
        profession: 'data engineer',
        name: 'sneha jain',
        imgSrc: '/images/wework/girl 3.png',
    },
    {
        profession: 'Chartered Accountant',
        name: 'Neha kapoor',
        imgSrc: '/images/wework/girl 1.png',
    },
    {
        profession: 'entrepreneur',
        name: 'vijay sharma',
        imgSrc: '/images/wework/na.png',
    },
    {
        profession: 'desinger',
        name: 'shakti kapoor',
        imgSrc: '/images/wework/ha.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 6000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2 animate-fade-in-up hover:scale-105 transition-transform duration-300">Client Testimonials</h3>
                        <h3 className="text-sm sm:text-xl text-center font-bold text-black justify-center lg:mr-48 my-2 animate-fade-in-down hover:scale-105 transition-transform duration-300">Discover how our pooja services have transformed the lives of our clients. Read their testimonials and see the positive impact of our rituals on their spiritual journeys.</h3>

                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto" />
                                    <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
