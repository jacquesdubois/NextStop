function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <svg className='h-7 w-7 mr-1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none' viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                    />
                </svg>
                <span className='font-bold tracking-wider'>NextStop</span>
            </div>
            <div className='flex items-center space-x-4 justify-end cursor-pointer my-auto'>
                <button className='py-2 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5'>Signup</button>
            </div>
        </header>
    )
}

export default Header
