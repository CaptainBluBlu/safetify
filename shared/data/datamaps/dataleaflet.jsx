import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Popup, CircleMarker, Polyline, Rectangle, Polygon, Circle, useMap, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];

export function Basic() {

  return (
    <React.Fragment >
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='mapleaflet ht-300' id="leaflet1" style={{ height: "300px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </React.Fragment>
  )
}

export function Circledata() {
  const redOptions = { color: 'red' };
  const [center, setCenter] = useState([0, 0]);
  const [address, setAddress] = useState('');

  const coordinates = [
    { lat: 2.9767076303015005, lng: 101.7199776553079, name: 'Hospital Sultan Idris Shah, Serdang' },
    { lat: 3.2197979499139793, lng: 101.58302745530791, name: 'Hospital Sungai Buloh' },
    { lat: 3.2425524681943827, lng: 101.64627589948238, name: 'Hospital Selayang' },
    { lat: 3.171728923240911, lng: 101.70263865899642, name: 'Hospital Kuala Lumpur' },
    { lat: 3.0715075416355666, lng: 101.48999362831727, name: 'Hospital Shah Alam' },
    { lat: 3.1285853954691376, lng: 101.76346097064749, name: 'Hospital Ampang' },
    { lat: 2.993035713019695, lng: 101.79287798598705, name: 'Hospital Kajang' },
    { lat: 2.919875906900511, lng: 101.63079217249172, name: 'Hospital Cyberjaya' }
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  async function reverseGeocode(latitude, longitude) {
    const apiKey = 'bf520338824e4af4bcd7f5ce0b7584ed'; // Replace with your OpenCage Geocoding API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted;
        setAddress(formattedAddress);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error('Error retrieving address details:', error);
      setAddress('Error retrieving address');
    }
  }

  function MapCenter({ center }) {
    const map = useMap();

    useEffect(() => {
      if (center[0] !== 0) {
        const desiredZoomLevel = 15;
        map.flyTo(center, desiredZoomLevel);
      }
    }, [center, map]);

    return null;
  }

  function createCustomIcon() {
    return L.icon({
      iconUrl: '../../../assets/images/png/drop-pin-icon.png', // Replace with the path to your custom drop pin icon
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
  }

  useEffect(() => {
    L.Marker.prototype.options.icon = createCustomIcon();
  }, []);

  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="ht-500" id="leaflet2" style={{ height: '500px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenter center={center} />
        {center[0] !== 0 && (
          <>
            <CircleMarker center={center} pathOptions={redOptions} radius={20}>
              <Popup>
                <h4>Your Current Address</h4>
                {address ? (
                  <p>{address}</p>
                ) : (
                  <p>Loading address...</p>
                )}
              </Popup>
            </CircleMarker>
            {coordinates.map((coordinate, index) => (
              <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={createCustomIcon()}>
                <Popup>
                  <h4>{coordinate.name}</h4>
                </Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>
    </div>
  );
}


export function Popups() {
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const center = [51.51, -0.12];
  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];
  
  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];
  
  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];
  
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  

  return (
    <div>
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="ht-200 ht-sm-300 ht-md-400" id="leaflet3" style={{height:"300px"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </MapContainer>
    </div>
  );
}