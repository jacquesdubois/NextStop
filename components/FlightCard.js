import Image from 'next/image';

function FlightCard({ img, distance, location }) {
    return (
        <div className='flex items-center m-6 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative h-16 w-20'>
                <Image className='rounded-lg'
                    src={img}
                    layout='fill'
                />
            </div>
            <div>
                <h2 className='font-semibold text-lg'>{location}</h2>
                <h3 className='text-gray-500 italic font-light text-sm'>{distance} miles</h3>
            </div>
        </div>
    )
}

export default FlightCard
