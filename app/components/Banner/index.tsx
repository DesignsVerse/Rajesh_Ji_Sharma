import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto my-10 sm:py-10 px-6 lg:px-8 overflow-hidden'> 
            <div className='grid grid-cols-1 lg:grid-cols-2 my-1 gap-10 text-black'> {/* Adjusted gap */}
                
                {/* COLUMN-1 */}
                <div className="mx-auto sm:mx-0 flex flex-col items-center lg:items-start">
                    <div className='py-3 text-center lg:text-start mb-6'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black animate-bounce'>
                            🌟 Expert Vedic Astrologer
                        </button>
                    </div>
                    <div className="py-3 text-center lg:text-start mb-6"> 
                        <h1 className='text-xl w-[80%] lg:text-[5vh] leading-tight font-bold animate-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text'>
                            Unlock the Secrets of Your Destiny with Astro Rajesh Sharma – Expert Astrologer & Numerologist.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-lg transition duration-300 bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                    </div>
                </div>
                
                {/* COLUMN-2 */}
                <div className=' lg:flex lg:items-center lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image 
                        src="/images/banner/1.webp" 
                        alt="Astrology banner showcasing expert services" 
                        width={700} 
                        height={400}
                        className="object-contain rounded-[30px] hover:scale-105 transition-transform duration-300 animate-fade-in-left hover:shadow-xl w-full" // Maintain w-full
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;