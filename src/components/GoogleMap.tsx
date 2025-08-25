import React from 'react';
import { MapPinIcon, NavigationIcon } from 'lucide-react';

interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'delivered' | 'in-transit' | 'failed' | 'booked';
}

const locations: MapLocation[] = [
  { id: '1', name: 'Mohammadpur Housing', lat: 23.7697, lng: 90.3563, status: 'delivered' },
  { id: '2', name: 'Dhaka GPO', lat: 23.7104, lng: 90.4074, status: 'in-transit' },
  { id: '3', name: 'Chaktai TSO', lat: 22.3569, lng: 91.7832, status: 'failed' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return '#059669';
    case 'in-transit': return '#2563eb';
    case 'failed': return '#dc2626';
    case 'booked': return '#7c3aed';
    default: return '#6b7280';
  }
};

export const GoogleMap: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-600">
        {/* Grid pattern to simulate map */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="text-gray-400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Roads */}
        <svg className="absolute inset-0 w-full h-full">
          <path 
            d="M0 200 Q150 180 300 200 Q450 220 600 200" 
            stroke="#d1d5db" 
            strokeWidth="6" 
            fill="none"
            className="dark:stroke-gray-500"
          />
          <path 
            d="M0 350 Q200 330 400 350 Q500 360 600 350" 
            stroke="#d1d5db" 
            strokeWidth="4" 
            fill="none"
            className="dark:stroke-gray-500"
          />
          <path 
            d="M150 0 Q170 200 150 400 Q130 500 150 576" 
            stroke="#d1d5db" 
            strokeWidth="4" 
            fill="none"
            className="dark:stroke-gray-500"
          />
          <path 
            d="M450 0 Q430 150 450 300 Q470 450 450 576" 
            stroke="#d1d5db" 
            strokeWidth="4" 
            fill="none"
            className="dark:stroke-gray-500"
          />
          
          {/* Delivery Route */}
          <path 
            d="M100 200 L300 200 L500 200 L400 350 L200 350" 
            stroke="#006a4e" 
            strokeWidth="3" 
            strokeDasharray="8 4" 
            fill="none"
          />
        </svg>
        
        {/* Location Markers */}
        {locations.map((location, index) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{
              left: `${20 + index * 25}%`,
              top: `${35 + (index % 2) * 30}%`,
            }}
          >
            <div 
              className="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
              style={{ backgroundColor: getStatusColor(location.status) }}
            >
              <MapPinIcon className="w-3 h-3 text-white" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {location.name}
            </div>
          </div>
        ))}
        
        {/* Current Location Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
          </div>
        </div>
      </div>
      
      {/* Map Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white dark:bg-gray-800 px-2 py-1 rounded">
        © Google Maps
      </div>
      
      {/* Navigation Control */}
      <div className="absolute top-4 right-4">
        <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <NavigationIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};