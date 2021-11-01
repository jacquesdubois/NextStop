import { StarIcon, HeartIcon } from '@heroicons/react/outline';

function EventInfoCard({ img, title, date, time, venue, address, price }) {
    return (
        <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <img className='rounded-2xl h-full'
                    src={img}
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{venue}</p>
                    <HeartIcon className='h-7 cursor-pointer'/>
                </div>

                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2'/>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{address}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl mr-2'>{date}</p>
                        <p className='text-right font-extralight'>{time}</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-right font-extralight'>Up to </p>
                        <p className='text-lg font-semibold py-2 lg:text-2xl mr-2'>${price}</p>
                        <p className='text-right font-extralight inline'>per Ticket</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInfoCard
