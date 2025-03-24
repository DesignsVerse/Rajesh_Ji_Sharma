"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    desc: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: 'Rajesh Sharma',
        desc: 'Astro Rajesh Sharma provided deep insights into my life. His guidance has been truly life-changing.',
        imgSrc: '/images/wework/boy 1.png',
    },
    {
        name: 'Anita Verma',
        desc: 'I was facing career struggles, but after a consultation, I found clarity and success. Highly recommended!',
        imgSrc: '/images/wework/girl 3.png',
    },
    {
        name: 'Vikas Mehra',
        desc: 'The numerology session helped me align my business name for prosperity. The results have been amazing!',
        imgSrc: '/images/wework/boy 6.png',
    },
    {
        name: 'Neha Kapoor',
        desc: 'Rajesh Ji’s astrology readings are accurate and practical. His remedies have improved my personal life significantly.',
        imgSrc: '/images/wework/girl 1.png',
    },
    {
        name: 'Amit Sharma',
        desc: 'I was skeptical at first, but his astrological insights about my health and relationships were spot on!',
        imgSrc: '/images/wework/na.png',
    },
    {
        name: 'Pooja Malhotra',
        desc: 'The best numerologist I have ever consulted. His name correction suggestion worked wonders for my career!',
        imgSrc: '/images/wework/ha.png',
    },
];


// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 7000,
            autoplaySpeed: 7000,
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
            <div className="bg-wework ">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2 animate-fade-in-up hover:scale-105 transition-transform duration-300">Client Testimonials</h3>
                        <h3 className="text-sm sm:text-xl text-center w-100 text-black justify-center lg:mr-48 my-2 animate-fade-in-down hover:scale-105 transition-transform duration-300">Discover how our pooja services have transformed the lives of our clients. Read their testimonials and see the positive impact of our rituals on their spiritual journeys.</h3>

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
                                <h4 className='text-2xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-[15px] font-normal p-4 pt-4 pb-2 opacity-50'>{items.desc}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
