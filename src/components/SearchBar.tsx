import { ChevronDownIcon, SearchIcon, XIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { useSearch } from "../hooks/useSearch";

interface SearchBarProps {
  onTrackingSelect?: (trackingNumber: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onTrackingSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { query, searchResults, isSearching, error, search, clearSearch } = useSearch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    search(value);
    setIsOpen(value.length > 0);
  };

  const handleTrack = () => {
    if (inputValue.trim()) {
      search(inputValue);
      onTrackingSelect?.(inputValue);
      setIsOpen(false);
    }
  };

  const handleSelectResult = (trackingNumber: string) => {
    setInputValue(trackingNumber);
    onTrackingSelect?.(trackingNumber);
    setIsOpen(false);
    clearSearch();
  };

  const handleClear = () => {
    setInputValue('');
    clearSearch();
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-end gap-2 w-full">
        <div className="inline-flex items-end gap-4 pt-2 pb-0 px-0">
          <div className="inline-flex flex-col items-start gap-1">
            <div className="flex flex-col w-[300px] h-[52px] items-start justify-end rounded-[4px_4px_0px_0px]">
              <div className="flex flex-col items-start gap-2.5 w-full bg-white dark:bg-gray-800 rounded-md border border-[#d5d6da] dark:border-gray-600">
                <div className="flex items-center px-4 py-1.5 w-full rounded-[4px_4px_0px_0px] relative">
                  <div className="h-8 items-center justify-between flex-1 flex">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="আইটেম আইডি / ডেলিভারি ট্র্যাকিং নম্বর দিন"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleTrack();
                        }
                      }}
                    />
                    <div className="flex items-center gap-2">
                      {inputValue && (
                        <button
                          onClick={handleClear}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          <XIcon className="w-3 h-3 text-gray-400" />
                        </button>
                      )}
                      {isSearching ? (
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleTrack}
            className="w-[148px] h-auto bg-[#008563] hover:bg-[#006b4f] dark:bg-[#006b4f] dark:hover:bg-[#005a42] rounded-[100px] px-6 py-2"
          >
            <span className="[font-family:'Noto_Serif_Bengali',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              ট্র্যাক
            </span>
            <SearchIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {error && (
          <div className="inline-flex items-center justify-center gap-2 px-0 py-3">
            <span className="[font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-rose-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
              {error}
            </span>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onClick={() => handleSelectResult(result.trackingNumber)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {result.trackingNumber}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {result.location} • {result.date}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  result.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  result.status === 'In Transit' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  result.status === 'Failed' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {result.status}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};