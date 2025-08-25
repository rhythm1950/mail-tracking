import { useState, useMemo } from 'react';

export interface SearchResult {
  id: string;
  trackingNumber: string;
  status: string;
  location: string;
  date: string;
}

const mockTrackingData: SearchResult[] = [
  {
    id: '1',
    trackingNumber: 'DL633783837BD',
    status: 'Delivered',
    location: 'Mohammadpur Housing',
    date: '7 Jan 25'
  },
  {
    id: '2',
    trackingNumber: 'DS707941988BD',
    status: 'In Transit',
    location: 'Dhaka GPO',
    date: '6 Jan 25'
  },
  {
    id: '3',
    trackingNumber: 'DS706972459BD',
    status: 'Booked',
    location: 'Dhaka GPO',
    date: '5 Jan 25'
  },
  {
    id: '4',
    trackingNumber: 'DG707941988BD',
    status: 'Failed',
    location: 'Chaktai TSO',
    date: '4 Jan 25'
  },
  {
    id: '5',
    trackingNumber: 'DH706972459BD',
    status: 'Received',
    location: 'Mohammadpur Housing',
    date: '3 Jan 25'
  }
];

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    return mockTrackingData.filter(item =>
      item.trackingNumber.toLowerCase().includes(query.toLowerCase()) ||
      item.status.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const search = async (searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (searchQuery && searchResults.length === 0) {
        setError('ট্র্যাক নম্বর সঠিক নয়!');
      } else {
        setError(null);
      }
    } catch (err) {
      setError('অনুসন্ধানে ত্রুটি হয়েছে');
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setError(null);
  };

  return {
    query,
    searchResults,
    isSearching,
    error,
    search,
    clearSearch,
    setQuery
  };
};