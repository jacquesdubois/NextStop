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

var hotelsData = [
  {
    'id': 263431,
    'name': 'Fairmont Heritage Place, Ghirardelli Square',
    'starRating': 4.7,
    'image': 'https://exp.cdn-hotels.com/hotels/2000000/1860000/1853300/1853240/11492672_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '900 N Point Street',
      'city': 'San Francisco',
      'zip': '94109'
    },
    'pricePerNight': 908.25,
    'neighborhood': 'Fisherman’s Wharf',
    'coordinates': {
      'lat': 37.80551,
      'lng': -122.42206
    }
  },
  {
    'id': 447745,
    'name': 'Mansion on Sutter',
    'starRating': 4.7,
    'image': 'https://exp.cdn-hotels.com/hotels/8000000/7070000/7064400/7064385/e2eafbb9_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '1409 Sutter St',
      'city': 'San Francisco',
      'zip': '94109'
    },
    'pricePerNight': 480.68,
    'neighborhood': 'Lower Pacific Heights',
    'coordinates': {
      'lat': 37.787079,
      'lng': -122.423851
    }
  },
  {
    'id': 195370,
    'name': 'Four Seasons Hotel San Francisco',
    'starRating': 4.6,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/800000/791800/791769/5ebebd26_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '757 Market St',
      'city': 'San Francisco',
      'zip': '94103'
    },
    'pricePerNight': 598.12,
    'neighborhood': 'Union Square',
    'coordinates': {
      'lat': 37.786622,
      'lng': -122.404711
    }
  },
  {
    'id': 235570,
    'name': 'The St. Regis San Francisco',
    'starRating': 4.3,
    'image': 'https://exp.cdn-hotels.com/hotels/2000000/1330000/1322000/1321986/ea65da11_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '125 3rd St',
      'city': 'San Francisco',
      'zip': '94103'
    },
    'pricePerNight': 521.9,
    'neighborhood': 'Downtown San Francisco',
    'coordinates': {
      'lat': 37.78596,
      'lng': -122.40158
    }
  },
  {
    'id': 115783,
    'name': 'Fairmont San Francisco',
    'starRating': 4.4,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/20000/18200/18200/48b0cc8d_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '950 Mason Street Atop Nob Hill',
      'city': 'San Francisco',
      'zip': '94108'
    },
    'pricePerNight': 307.2,
    'neighborhood': 'Nob Hill',
    'coordinates': {
      'lat': 37.792404,
      'lng': -122.410622
    }
  },
  {
    'id': 124533,
    'name': 'The Ritz-Carlton, San Francisco',
    'starRating': 4.6,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/22200/22148/02842ca4_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '600 Stockton St',
      'city': 'San Francisco',
      'zip': '94108'
    },
    'pricePerNight': 450.48,
    'neighborhood': 'Downtown San Francisco',
    'coordinates': {
      'lat': 37.791712,
      'lng': -122.407436
    }
  },
  {
    'id': 141179,
    'name': 'Palace Hotel, a Luxury Collection Hotel, San Francisco',
    'starRating': 4.4,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/27300/27274/cb8526cf_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '2 New Montgomery St',
      'city': 'San Francisco',
      'zip': '94105'
    },
    'pricePerNight': 266.5,
    'neighborhood': 'Financial District',
    'coordinates': {
      'lat': 37.788682,
      'lng': -122.401919
    }
  },
  {
    'id': 115134,
    'name': 'Taj Campton Place',
    'starRating': 4.5,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/23400/23383/068a482b_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '340 Stockton St',
      'city': 'San Francisco',
      'zip': '94108'
    },
    'pricePerNight': 255,
    'neighborhood': 'Union Square',
    'coordinates': {
      'lat': 37.789103,
      'lng': -122.4069
    }
  },
  {
    'id': 108742,
    'name': 'Four Seasons Hotel San Francisco at Embarcadero',
    'starRating': 4.6,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/6600/6505/61f93c42_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '222 Sansome St',
      'city': 'San Francisco',
      'zip': '94104'
    },
    'pricePerNight': 593.12,
    'neighborhood': 'Financial District',
    'coordinates': {
      'lat': 37.792535,
      'lng': -122.400929
    }
  },
  {
    'id': 265998,
    'name': 'Cavallo Point',
    'starRating': 4.4,
    'image': 'https://exp.cdn-hotels.com/hotels/2000000/1890000/1886700/1886656/6d8aa6ba_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '601 Murray Circle',
      'city': 'Sausalito',
      'zip': '94965'
    },
    'pricePerNight': 673.13,
    'neighborhood': 'Sausalito',
    'coordinates': {
      'lat': 37.83724,
      'lng': -122.47854
    }
  },
  {
    'id': 194583,
    'name': 'Omni San Francisco Hotel',
    'starRating': 4.7,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/670000/662400/662368/670df73a_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '500 California St',
      'city': 'San Francisco',
      'zip': '94104'
    },
    'pricePerNight': 197.67,
    'neighborhood': 'Financial District',
    'coordinates': {
      'lat': 37.792928,
      'lng': -122.402712
    }
  },
  {
    'id': 105310,
    'name': 'The Westin St. Francis San Francisco on Union Square',
    'starRating': 4.3,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/26800/26760/70841a4c_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '335 Powell Street',
      'city': 'San Francisco',
      'zip': '94102'
    },
    'pricePerNight': 169,
    'neighborhood': 'Union Square',
    'coordinates': {
      'lat': 37.78773,
      'lng': -122.40822
    }
  },
  {
    'id': 211817,
    'name': 'Argonaut Hotel - a Noble House Hotel',
    'starRating': 4.5,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/920000/915600/915510/49fa748f_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '495 Jefferson St',
      'city': 'San Francisco',
      'zip': '94109'
    },
    'pricePerNight': 281.5,
    'neighborhood': 'Fisherman’s Wharf',
    'coordinates': {
      'lat': 37.80766,
      'lng': -122.420306
    }
  },
  {
    'id': 127103,
    'name': 'JW Marriott San Francisco Union Square',
    'starRating': 4.3,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/2100/2063/0a58e614_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '515 Mason Street',
      'city': 'San Francisco',
      'zip': '94102'
    },
    'pricePerNight': 205.38,
    'neighborhood': 'Union Square',
    'coordinates': {
      'lat': 37.788377,
      'lng': -122.410148
    }
  },
  {
    'id': 145299,
    'name': 'W San Francisco',
    'starRating': 4.3,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/290000/287200/287112/0e73d7e3_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '181 3rd St',
      'city': 'San Francisco',
      'zip': '94103'
    },
    'pricePerNight': 201.03,
    'neighborhood': 'South Beach',
    'coordinates': {
      'lat': 37.785262,
      'lng': -122.400493
    }
  },
  {
    'id': 116987,
    'name': 'Hotel Nikko San Francisco',
    'starRating': 4.5,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/30000/23500/23406/3cce951b_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '222 Mason St',
      'city': 'San Francisco',
      'zip': '94102'
    },
    'pricePerNight': 224.78,
    'neighborhood': 'Downtown San Francisco',
    'coordinates': {
      'lat': 37.785683,
      'lng': -122.409575
    }
  },
  {
    'id': 210688,
    'name': 'Club Quarters Hotel in San Francisco',
    'starRating': 4.2,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/920000/913000/912982/832c79fe_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '424 Clay St',
      'city': 'San Francisco',
      'zip': '94111'
    },
    'pricePerNight': 136.13,
    'neighborhood': 'Financial District',
    'coordinates': {
      'lat': 37.794972,
      'lng': -122.400809
    }
  },
  {
    'id': 600144064,
    'name': 'San Francisco Proper Hotel',
    'starRating': 4.3,
    'image': 'https://exp.cdn-hotels.com/hotels/19000000/18730000/18723300/18723252/41530c2f_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '1100 Market Street',
      'city': 'San Francisco',
      'zip': '94102'
    },
    'pricePerNight': 322.75,
    'neighborhood': 'Downtown San Francisco',
    'coordinates': {
      'lat': 37.78087,
      'lng': -122.41242
    }
  },
  {
    'id': 1055269088,
    'name': 'BEI San Francisco, Trademark Collection by Wyndham',
    'starRating': 4.1,
    'image': 'https://exp.cdn-hotels.com/hotels/33000000/32950000/32946000/32945909/1086dfae_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '50 8th Street',
      'city': 'San Francisco',
      'zip': '94103'
    },
    'pricePerNight': 200.93,
    'neighborhood': 'Mid-Market',
    'coordinates': {
      'lat': 37.777984,
      'lng': -122.413871
    }
  },
  {
    'id': 115718,
    'name': 'Hotel Triton',
    'starRating': 4.1,
    'image': 'https://exp.cdn-hotels.com/hotels/1000000/10000/1200/1110/0fdb0ab1_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    'address': {
      'streetAddress': '342 Grant Ave',
      'city': 'San Francisco',
      'zip': '94108'
    },
    'pricePerNight': 148.2,
    'neighborhood': 'Union Square',
    'coordinates': {
      'lat': 37.790339,
      'lng': -122.405492
    }
  }
];

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
