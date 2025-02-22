import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Pandit Rajesh Sharma is a highly respected and knowledgeable astrologer hailing from Ujjain, Madhya Pradesh, one of India’s most sacred cities known for its rich spiritual heritage. With a deep-rooted passion for Vedic astrology and ancient spiritual science.',
        link: 'Learn more'
    },
    {
        heading: "Pooja.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Poojas play a vital role in bringing peace, prosperity, and protection. Rituals like Navgraha Pooja help neutralize malefic planetary effects, Maha Lakshmi Pooja attracts wealth, and Maha Mrityunjaya Pooja promotes health and longevityConducted with sacred mantras and rituals.',
        link: 'Learn more'
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'At Panditrajeshsharma, we are dedicated to bringing clarity, guidance, and positivity into your life through the ancient wisdom of astrology. Our expert astrologers provide accurate horoscope readings, personalized birth chart analysis etc.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest animate-fade-in-up hover:scale-105 transition-transform duration-300'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold animate-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:text-black transition-colors duration-500'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;