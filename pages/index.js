import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FlightCard from '../components/FlightCard';
import Footer from '../components/Footer'
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NextStop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <Fade bottom>
            <h2 className='text-3xl font-semibold pb-5'>Popular Destinations</h2>
          </Fade>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {flightData?.map(({ img, distance, location }) => (
              <Fade left>
                <FlightCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              </Fade>
            ))}
          </div>
        </section>

        <section className='z-0'>
            <Fade bottom>
              <h3 className="mt-16 text-left text-3xl font-semibold pb-5">Living</h3>
            </Fade>
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
              <div className="rounded overflow-hidden cursor-pointer h-[350px] hover:scale-105 transition transform duration-200 ease-out">
                <Fade left>
                  <img className="w-full h-80 overflow-hidden rounded-lg shadow-inner"
                    src='/cabin.jpeg'
                    alt="cabin"
                  />
                </Fade>
                <Fade left>
                  <div className="pt-1">
                    <h3 className="font-semibold text-lg text-left">Luxury Getaways</h3>
                  </div>
                </Fade>
              </div>
              <div className="rounded overflow-hidden cursor-pointer h-[350px] hover:scale-105 transition transform duration-200 ease-out">
                <Fade right>
                  <img className="w-full h-80 rounded-lg shadow-inner"
                    src='/family.jpeg'
                    alt="family"
                  />
                </Fade>
                <div className="pt-1">
                  <Fade right>
                    <h3 className="font-semibold text-lg text-left">Budget Friendly</h3>
                  </Fade>
                </div>
              </div>
            </div>
        </section>

        <section className='z-0'>
          <Fade bottom>
            <h3 className="text-left text-3xl font-semibold mt-16 pb-5">Events Near You</h3>
          </Fade>
          <div className="py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
              <Fade bottom delay={600}>
                <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer"
                  src='/art.jpeg'
                  alt="art"
                />
              </Fade>
              <Fade bottom delay={600}>
                <div className="px-1 py-1">
                  <div className="text-lg font-semibold mb-2 text-left">Arts</div>
                </div>
              </Fade>
            </div>
            <div className="rounded overflow-hidden cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
              <Fade bottom delay={300}>
                <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer"
                  src='/sports.jpeg'
                  alt="sports"
                />
              </Fade>
              <Fade bottom delay={300}>
                <div className="px-1 py-1">
                  <div className="text-lg font-semibold mb-2 text-left">Sports</div>
                </div>
              </Fade>
            </div>
            <div className="rounded overflow-hidden cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
              <Fade bottom>
                <img className="w-full h-4/5 rounded-lg shadow-inner cursor-pointer"
                src='/music.jpeg'
                alt="music"
                />
              </Fade>
              <Fade bottom>
                <div className="px-1 py-1">
                  <div className="text-lg font-semibold mb-2 text-left">Music</div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

var flightData = [
  {
    location: 'Miami',
    img: '/MI.jpeg',
    distance: '2,590',
  },
  {
    location: 'New York',
    img: '/NY.jpeg',
    distance: '2,572',
  },
  {
    location: 'Las Vegas',
    img: '/LV.jpeg',
    distance: '417',
  },
  {
    location: 'Washington, DC',
    img: '/Washington.jpg',
    distance: '2,436',
  },
  {
    location: 'Chicago',
    img: '/Chicago.jpg',
    distance: '1,855',
  },
  {
    location: 'Boston',
    img: '/Boston.jpg',
    distance: '2,693',
  },
  {
    location: 'Los Angeles',
    img: '/LosAngeles.jpg',
    distance: '348',
  },
  {
    location: 'Atlanta',
    img: '/Atlanta.jpg',
    distance: '2,135',
  },
  {
    location: 'Seattle',
    img: '/Seattle.jpg',
    distance: '590',
  },
  {
    location: 'Dallas',
    img: '/Dallas.jpg',
    distance: '1,481',
  },
  {
    location: 'Phoenix',
    img: '/Phoenix.jpg',
    distance: '653',
  },
  {
    location: 'Nashville',
    img: '/Nashville.jpg',
    distance: '1,959',
  },
];
