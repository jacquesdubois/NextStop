import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelInfoCard from '../components/HotelInfoCard';
import Map from '../components/Map';
import { format } from 'date-fns';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

function Events() {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'MMMM dd, yyyy');
    const formattedEndDate = format(new Date(endDate), 'MMMM dd, yyyy');
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-6 px-6'>
                    <p className='text-xs'>20+ stays from {range} for {numberOfGuests} people</p>

                    <div className='flex justify-between items-center mb-3'>
                        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                        <div className='button flex rounded-full px-5 py-2 items-center align-middle text-center justify-between'>
                            <p className='inline text-lg font-semibold mr-3'>Events</p>
                            <ArrowNarrowRightIcon className='hidden md:inline-flex h-8 m-0 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
                        </div>
                    </div>
                        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                            <p className='button'>Cancellation Flexibility</p>
                            <p className='button'>Type of Place</p>
                            <p className='button'>Price</p>
                            <p className='button'>Rooms and Beds</p>
                            <p className='button'>More Filters</p>
                        </div>

                    {hotelsData.map(({ id, image, address, name, neighborhood, starRating, pricePerNight }) => (
                        <HotelInfoCard
                            key={id}
                            img={image}
                            location={address.streetAddress}
                            description={neighborhood}
                            star={starRating}
                            price={pricePerNight}
                            title={name}
                        />
                    ))}
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map hotels={hotelsData} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Events
