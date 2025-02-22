"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "5 min",
        heading: 'The Power of Astrology',
        heading2: 'How the Stars Influence Life!',
        name: "Published on AstroSage",
        date: 'feb 5, 2021',
        imgSrc: '/images/articles/output 1.jpg',
    },
    {
        time: "5 min",
        heading: 'How Astrology Shapes Your Life: ',
        heading2: 'The Power of Your Birth Chart',
        name: "Published on Cafe Astrology",
        date: 'may 1, 2022',
        imgSrc: '/images/articles/output 2.jpg',
    },
    {
        time: "5 min",
        heading: 'Love & Zodiac: ',
        heading2: 'Find Perfect Astrological Match!',
        name: "Published on GaneshaSpeaks+9",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/output 3.jpg',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon", 
        date: 'june 19, 2021',
        imgSrc: '/images/articles/output 6.jpg',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Astrology & Success: ',
        name: "Aligning Your Life with the Stars",
        date: 'August 25, 2023',
        imgSrc: '/images/articles/output.jpg',
    },
    {
        time: "5 min",
        heading: '"Zodiac Secrets: ',
        heading2: 'How Sign Influences Personality!',
        name: "Published on AstroSeek",
        date: 'july 20, 2024',
        imgSrc: '/images/articles/output 3.jpg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest animate-bounce">ARTICLES</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold animate-fade-in-down">Our latest post.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto hover:opacity-80 transition-opacity duration-300" />

                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img transition-all duration-300 transform hover:-translate-y-1">{items.time} read</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black hover:text-blue transition-colors duration-300'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black hover:text-blue transition-colors duration-300'>{items.heading2}</h4>

                                    <div className="animate-fade-in-up">
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75 hover:opacity-100 transition-opacity duration-300'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75 hover:opacity-100 transition-opacity duration-300'>{items.date}</h3>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
