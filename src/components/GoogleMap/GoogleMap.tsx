import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  className?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize map with Dhaka coordinates
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 23.8103, lng: 90.4125 },
        zoom: 12,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          }
        ]
      });

      // Add markers for tracking locations
      const locations = [
        { lat: 23.8103, lng: 90.4125, title: 'Dhaka GPO' },
        { lat: 23.7697, lng: 90.3684, title: 'Mohammadpur Housing' },
        { lat: 22.3569, lng: 91.7832, title: 'Chaktai TSO' }
      ];

      locations.forEach((location, index) => {
        new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.title,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="${index === 0 ? '#006fee' : index === 1 ? '#006a4e' : '#dc2626'}"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(24, 24)
          }
        });
      });

      // Add route between locations
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: '#006fee',
          strokeWeight: 4
        }
      });
      directionsRenderer.setMap(map);

      directionsService.route({
        origin: locations[0],
        destination: locations[2],
        waypoints: [{ location: locations[1], stopover: true }],
        travelMode: google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        }
      });
    }
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
};