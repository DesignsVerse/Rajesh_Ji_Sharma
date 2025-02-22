import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black animate-bounce'>🌟 Expert Vedic Astrologer</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold  animate-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-black'>
                            Transform Your<br /> Life's Journey<br />
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image 
                        src="/images/banner/1.webp" 
                        alt="hero-image" 
                        width={700}
                        height={400}
                        className="object-contain ml-auto rounded-[30px]  hover:scale-105 transition-transform duration-300 animate-fade-in-left hover:shadow-xl"
                        priority
                    />
                </div>

            </div>
        </div>
    )
}

export default Banner;
