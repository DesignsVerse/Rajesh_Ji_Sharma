"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Rahul Sharma",
        profession: "Business Owner",
        comment: "Astro Rajesh Sharma's predictions were incredibly accurate! His guidance helped me overcome financial obstacles and make better business decisions. Highly recommended!",
        imgSrc: "/images/testimonial/boy-2.png",
    },
    {
        name: "Sneha Mehta",
        profession: "Marketing Manager",
        comment: "I was facing uncertainty in my personal life, and Pandit Ji’s insights gave me much-needed clarity. His remedies were simple yet effective. Thank you for your guidance!",
        imgSrc: "/images/testimonial/girl-3.avif",
    },
    {
        name: "Pooja Verma",
        profession: "Interior Designer",
        comment: "I was struggling in my career, but after consulting Astro Rajesh Sharma, I found new opportunities and success. His advice truly changed my life!",
        imgSrc: "/images/testimonial/girl-1.png",
    },
    {
        name: "Shourya Sharma",
        profession: "Software Engineer",
        comment: "Pandit Ji’s readings are not just predictions; they are life-changing insights. His remedies helped me find peace and success in both personal and professional life.",
        imgSrc: "/images/testimonial/random1.jpg",
    },
    {
        name: "Neha Kapoor",
        profession: "Chartered Accountant",
        comment: "I was facing continuous financial struggles, but after following Astro Rajesh Sharma’s remedies, I saw a significant improvement. His knowledge of astrology is remarkable!",
        imgSrc: "/images/testimonial/girl-2.png",
    },
    {
        name: "Vikas Malhotra",
        profession: "Senior HR Manager",
        comment: "Astro Rajesh Sharma's deep astrological knowledge helped me make the right decisions in my career and personal life. His predictions were spot on, and his remedies worked wonders!",
        imgSrc: "/images/testimonial/boy-3.png",
    },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true, // Enable autoplay
            speed: 500,
            autoplaySpeed: 2000, // Time between slides
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
            <div className="bg-testimonial pt-40 pb-2 lg:py-2" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3 animate-fade-in-up hover:scale-105 transition-transform duration-300">See what others are saying.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
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