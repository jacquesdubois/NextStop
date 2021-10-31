function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mt-10 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How AirBnB Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>AirBnB Plus</p>
                <p>AirBnB Lux</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Referrals Accepted</p>
                <p>This is not a real site</p>
                <p>It's a clone</p>
                <p>Modeled after Sonny Sangha's on YouTube</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Hire</p>
                <p>Jacques</p>
                <p>As a Fullstack Engineer</p>
                <p>For your company</p>
                <p>jacquesadubois@gmail.com</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Legal</p>
                <p>Submit Report</p>
                <p>Other</p>
            </div>
        </div>
    )
}

export default Footer
