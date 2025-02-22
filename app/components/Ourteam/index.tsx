import Image from "next/image";

const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-15xl sm:text-65xl font-bold text-center hover:scale-105 transition-transform duration-300">Pandit ji awards only the best.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 animate-fade-in-up hover:scale-105 transition-transform duration-300">&ldquo;Pandit Ji Honors Only the Best: Excellence Deserves Recognition!&rdquo;</h3>
            <h2 className="text-2xl font-medium text-center pt-10 animate-pulse hover:scale-105 transition-transform duration-300">&ldquo;Pandit Ji Rajesh has received so many awards!&rdquo; <br /> Jyotish Ratna Award,
                Navagraha Jyotish Puraskar,
                Divya Drishti Award.</h2>

            <div className='grid grid-cols-1 my-16 relative overflow-hidden group'>
                <Image 
                    src="/images/team/real 1.jpg" 
                    alt="office-image" 
                    height={684} 
                    width={1200}
                    className="transition-all duration-700 ease-in-out transform hover:scale-110 
                             hover:rotate-2 hover:brightness-110 hover:contrast-125
                             group-hover:shadow-2xl rounded-lg
                             animate-fadeIn motion-safe:animate-float"
                    style={{
                        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
                        animation: "float 6s ease-in-out infinite"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            </div>
        </div>
    )
}

export default index;
