import React, { useState } from 'react';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const [people, setPeople] = useState('');
  const [dates, setDates] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log({ city, people, dates });
  };

  return (
    <div className=" flex items-center justify-center p-4 bg-gray-100 rounded-[35px] h-[90px] w-[1000px]">
      {/* City Name Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start'>
          <p>Location</p>
          <p>icon</p>
        </div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {/* Number of People Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start'>
          <p>icon</p>
          <p>Guests</p>
        </div>
        <input
          type="number"
          placeholder="Number of people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          min="1"
        />
      </div>
      {/* Dates Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start'>
          <p>icon</p>
          <p>Date</p>
        </div>
        <input
          type="date"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {/* Search Button */}
      <div className="flex-1 px-2">
        <button
          onClick={handleSearch}
          className="w-full h-12 bg-secondary text-black shadow-custom-button rounded-custom-button 
                     hover:bg-white hover:border hover:border-secondary hover:text-black"
        >
          Search
        </button>
      </div>
    </div>
  );
}
