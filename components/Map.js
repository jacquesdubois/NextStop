import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ hotels }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = hotels.map(hotel => ({
        longitude: hotel.coordinates.lng,
        latitude: hotel.coordinates.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });


    return (
        <ReactMapGL
        mapStyle='mapbox://styles/duboisj/ckvfx18ud0nju14mmxdis116o'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {hotels.map((result) => (
            <div key={result.id}>
                <Marker
                    longitude={result.coordinates.lng}
                    latitude={result.coordinates.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p className='cursor-pointer text-2xl animate-bounce'
                        onClick={() => setSelectedLocation(result)}
                    >
                        📌
                    </p>
                </Marker>
                {/* Pop-up that should show if we click on a map marker */}
                {selectedLocation?.coordinates?.lng === result.coordinates.lng && (
                    <Popup
                        closeOnClick={true}
                        onClose={() => setSelectedLocation({})}
                        latitude={result.coordinates.lat}
                        longitude={result.coordinates.lng}
                    >
                        {result.name}
                    </Popup>
                )}
            </div>
        ))}

    </ReactMapGL>
    )
}

export default Map
