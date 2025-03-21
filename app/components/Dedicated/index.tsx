import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/comma.png" alt="" width={450} height={500} className="mx-auto md:mx-0 border-2 border-gray-200 rounded-3xl hover:scale-105 transition-transform duration-300 animate-fade-in-left hover:shadow-xl" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block animate-fade-in-down" />
                        <h2 className="text-4xl lg:text-60xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start animate-slide-in-left">
                            <span className="animate-gradient bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 bg-clip-text text-black">
                                Discover the ancient wisdom of Vedic astrology with our expert panditji.
                            </span>
                        </h2>
                        <p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start animate-fade-in-up hover:scale-105 transition-transform duration-300"> 
                            Since childhood, Pandit Rajesh was drawn to astrology, learning the sacred scriptures under the mentorship of renowned gurus in Ujjain. His expertise extends beyond astrology, encompassing spiritual healing, mantra chanting, and performing precise poojas for different life problems.
                        </p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32  text-center lg:text-start animate-bounce hover:animate-pulse transition-all duration-300">
                            --Rajesh Sharma
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
