import Image from 'next/image';
import { SearchIcon, UsersIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Banner({ placeholder }) {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[610px] 2xl:h-[700px]'>
            <Image
                src='/splash-image.png'
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute top-9 w-full text-center items-center flex-col mb-0'>
                <p className='text-xl sm:text-2xl font-semibold text-white'>Not sure where to go? Perfect.</p>
                <div className='flex bg-white items-center md:border-2 rounded-full py-2 md:shadow-sm w-1/2 mx-auto mt-3'>
                    <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                        type='text'
                        placeholder={placeholder || 'Search for a destination...'}
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
                </div>
                {searchInput && (
                    <div className='flex w-full justify-center items-center mt-1'>
                        <div className='flex flex-col mx-auto'>
                            <DateRangePicker
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['#FD5B61']}
                                onChange={handleSelect}
                            />
                            <div className='flex items-center text-left border-t border-b py-2 bg-white'>
                                <h2 className='text-xl flex-grow font-semibold bg-white pl-5 bt-gray-600'>Number of Guests</h2>
                                <UsersIcon className='h-5'/>
                                <input className='w-12 pl-2 text-lg outline-none text-red-400'
                                    type='number'
                                    value={numberOfGuests}
                                    min={1}
                                    onChange={e => setNumberOfGuests(e.target.value)}
                                />
                            </div>
                            <div className='flex bg-white py-2'>
                                <button className='flex-grow text-gray-500'
                                    onClick={e => setSearchInput('')}
                                >
                                    Cancel
                                </button>
                                <button className='flex-grow text-red-400 border-l'
                                    onClick={() => search()}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Banner
