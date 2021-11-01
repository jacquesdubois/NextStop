import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function HotelInfoCard({ img, location, title, description, star, price }) {
    return (
        <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <img className='rounded-2xl h-full'
                    src={img}
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{description}</p>
                    <HeartIcon className='h-7 cursor-pointer'/>
                </div>

                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2'/>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{location}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <StarIcon className='h-10 text-red-400 block'/>
                        <p className='pl-2 text-lg font-semibold pb-2 lg:text-2xl'>{star}</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl inline mr-2'>${price}</p>
                        <p className='text-right font-extralight inline'>per Night</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelInfoCard
