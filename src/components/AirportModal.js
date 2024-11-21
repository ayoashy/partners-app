import { useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';


const AirportModal = ({ isOpen, onClose, onSelectAirport }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const airports = [
    { code: 'ACC', name: 'Accra Kotoka Int’l Airport', country: 'Ghana' },
    {
      code: 'ADD',
      name: 'Addis Ababa Bole Int’l Airport',
      country: 'Ethiopia',
    },
    {
      code: 'ALG',
      name: 'Algiers Houari Boumediene Airport',
      country: 'Algeria',
    },
    { code: 'AMS', name: 'Amsterdam Schiphol Airport', country: 'Netherlands' },
    {
      code: 'ATH',
      name: 'Athens Eleftherios Venizelos Int’l Airport',
      country: 'Greece',
    },
    {
      code: 'ATL',
      name: 'Atlanta Hartsfield-Jackson Int’l Airport',
      country: 'USA',
    },
    { code: 'AKL', name: 'Auckland Airport', country: 'New Zealand' },
  ];

  const [selectedAirport, setSelectedAirport] = useState(null);

  const filteredAirports = airports.filter(
    (airport) =>
      airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  const handleSelectAirport = (airportCode) => {
    setSelectedAirport(airportCode);
    onSelectAirport(airportCode); 
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end'>
      <div className='bg-white w-full max-w-md rounded-t-2xl shadow-lg'>
        <div className='flex items-center justify-between px-6 py-4 border-b'>
          <h2 className='text-lg font-bold text-[#132866]'>Select Airport</h2>
          <button onClick={onClose}>
            <AiOutlineClose className='text-xl text-[#132866]' />
          </button>
        </div>

        <div className='px-6 py-4'>
          <div className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2'>
            <AiOutlineSearch className='text-lg text-gray-400' />
            <input
              type='text'
              placeholder='Search'
              className='flex-1 outline-none text-sm text-gray-700'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className='max-h-[300px] overflow-y-auto'>
          {filteredAirports.map((airport) => (
            <div
              key={airport.code}
              onClick={() => handleSelectAirport(airport.code)}
              className={`px-6 py-4 flex items-center justify-between cursor-pointer ${
                selectedAirport === airport.code
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div>
                <p className='text-sm font-semibold text-[#132866]'>
                  {airport.code} {airport.name}
                </p>
                <p className='text-xs text-gray-500'>{airport.country}</p>
              </div>
              {selectedAirport === airport.code && (
                <AiOutlineCheck className='text-primary' />
              )}
            </div>
          ))}
        </div>

        <div className='h-1 bg-gray-200 rounded-b-lg mx-auto my-4 w-16'></div>
      </div>
    </div>
  );
};

export default AirportModal;
