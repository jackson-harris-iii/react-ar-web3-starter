import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Center, Spinner } from '@chakra-ui/react';
// import the mapbox-gl styles so that the map is displayed correctly

const RtsView = ({ playerPosition, nearbyWayspots, loadingNearbyWayspots }) => {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = useState<mapboxgl.Map>(null);
  const [geoLocateControl, setGeoLocateControl] = useState(null);

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === 'undefined' || node === null) return;

    const center = playerPosition?.lat
      ? [playerPosition?.lng, playerPosition?.lat]
      : [-74.5, 40];

    console.log('map center', center);

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        'pk.eyJ1IjoiamFja3Nvbi1uaWFudGljIiwiYSI6ImNsZTdneXVreTA1aW0zdm82bXMyeGp6Z24ifQ.IWg4qKLFC0s-OHvF7ojaAw',
      style: 'mapbox://styles/jackson-niantic/cle7h092b001t01qlrj3ztjos',
      center,
      zoom: 13,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
        zoom: 13,
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    mapboxMap.addControl(geolocate);

    // save the map object to useState
    setMap(mapboxMap);
    setGeoLocateControl(geolocate);

    return () => {
      mapboxMap.remove();
    };
  }, [playerPosition]);

  useEffect(() => {
    if (Array.isArray(nearbyWayspots) && map && nearbyWayspots.length > 0) {
      console.log('nearbyWayspots', nearbyWayspots);
      const geojson = {
        type: 'FeatureCollection',
        features: nearbyWayspots.map((marker) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: {
              lat: marker.lat,
              lng: marker.lng,
            },
          },
        })),
      };
      console.log('heres the map', map);
      console.log('heres the geojson', geojson);

      map.on('load', () => {
        geojson.features.forEach((marker) => {
          // create a DOM element for the marker
          const markerIcon = document.createElement('div');
          markerIcon.className = 'location-marker';
          markerIcon.style.backgroundImage = 'url(/location-marker.png)';
          markerIcon.style.width = 30 + 'px';
          markerIcon.style.height = 42 + 'px';
          new mapboxgl.Marker(markerIcon)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        });

        // map.addSource('wayspots', {
        //   type: 'geojson',
        //   data: geojson,
        // });

        // map.addLayer({
        //   id: 'wayspots-layer',
        //   type: 'circle',
        //   source: 'wayspots',
        //   paint: {
        //     'circle-radius': 4,
        //     'circle-stroke-width': 2,
        //     'circle-color': 'red',
        //     'circle-stroke-color': 'white',
        //   },
        // });

        if (geoLocateControl) {
          geoLocateControl.trigger();
        }
      });
    }
  }, [nearbyWayspots, map]);

  return (
    <>
      {loadingNearbyWayspots?.loading ? (
        <p>still getting the lay of the land...</p>
      ) : null}
      <Center>
        <div ref={mapNode} style={{ width: '100vw', height: '75vh' }} />
      </Center>
    </>
  );
};

export default RtsView;
