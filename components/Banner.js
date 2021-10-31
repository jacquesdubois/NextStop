import Image from 'next/image';

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-no-repeat bg-center bg-fixed'>
            <Image
                src='/splash-image.png'
                layout='fill'
                objectFit='cover'
            />
        </div>
    )
}

export default Banner
