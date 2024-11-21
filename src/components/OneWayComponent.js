'use client'

import Link from 'next/link';
import { FaUser, FaChild, FaBaby } from 'react-icons/fa';
import AirportModal from '../components/AirportModal'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import { useState } from 'react';

export const OneWayComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [departureAirport, setDepartureAirport] = useState(
    '-- Select Option --'
  );
  const [destinationAirport, setDestinationAirport] = useState(
    '-- Select Option --'
  );
  const [departureDate, setDepartureDate] = useState(new Date()); 

    const handleDateChange = (date) => {
      setDepartureDate(date);
    };

  const handleAirportSelect = (selectedAirport) => {
    if (modalType === 'departure') {
      setDepartureAirport(selectedAirport);
    } else if (modalType === 'destination') {
      setDestinationAirport(selectedAirport);
    }
    setIsModalOpen(false);
  };

  return (
    <div className='p-4 bg-gray-50'>
      {/* Flight Type */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-[#0F294CCC] mb-1'>
          Flight Type
        </label>
        <div className='text-primary font-semibold'>Domestic</div>
      </div>

      {/* purposely left out the space-y class */}
      <div className=''>
        <div className='mb-4'>
          <div
            className='flex items-center justify-between'
            onClick={() => {
              setModalType('departure');
              setIsModalOpen(true);
            }}
          >
            <div>
              <label className='block text-sm font-medium text-[#0F294CCC] mb-1'>
                Departure Airport
              </label>
              <div className='text-gray-400'>{departureAirport}</div>
            </div>
            <span className='text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 9l7 7 7-7'
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Destination Airport */}
        <div className='mb-4'>
          <div
            className='flex items-center justify-between'
            onClick={() => {
              setModalType('destination');
              setIsModalOpen(true);
            }}
          >
            <div>
              <label className='block text-sm font-medium text-[#0F294CCC] mb-1 '>
                Destination Airport
              </label>
              <div className='text-gray-400'>-- Select Option --</div>
            </div>
            <span className='text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 9l7 7 7-7'
                />
              </svg>
            </span>
          </div>
        </div>
        <AirportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelectAirport={handleAirportSelect}
        />
      </div>

      {/* Departure Date */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-[#0F294CCC] mb-1'>
          Departure Date
        </label>
        <div className='text-secondary font-semibold flex items-center justify-between'>

          <DatePicker
            selected={departureDate}
            onChange={handleDateChange}
            dateFormat='EEE, dd MMM' 
            customInput={
              <button className='flex items-center justify-between w-full bg-transparent focus:outline-none text-secondary font-semibold'>
                {format(departureDate, 'EEE, dd MMM')}
                <span className='ml-2 text-gray-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </span>
              </button>
            }
          />
        </div>
      </div>

      {/* Cabin Class */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Cabin Class
        </label>
        <div className='text-secondary font-semibold'>
          Economy/Premium Economy
        </div>
      </div>

      {/* Travelers */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-[#0F294CCC] mb-1'>
          Travellers
        </label>
        <div className='flex items-center justify-between'>
          {/* Travellers Section */}
          <div className='flex items-center'>
            {/* Adult */}
            <div className='flex items-center space-x-1 mx-2'>
              <FaUser className='w-2 h-3 text-[#9FA9B7]' /> {/* Smaller Icon */}
              <div className='text-[#3F5470] text-lg font-semibold'>1</div>
            </div>

            {/* Child */}
            <div className='flex items-center space-x-1 mx-2'>
              <FaChild className='w-2 h-3 text-[#9FA9B7]' />{' '}
              {/* Smaller Icon */}
              <div className='text-[#3F5470] text-lg font-semibold'>0</div>
            </div>

            {/* Infant */}
            <div className='flex items-center space-x-1 mx-2'>
              <FaBaby className='w-2 h-3 text-[#9FA9B7]' /> {/* Smaller Icon */}
              <div className='text-[#3F5470] text-lg font-semibold'>0</div>
            </div>
          </div>

          {/* Dropdown Arrow */}
          <span className='text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 9l7 7 7-7'
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Search Button */}
      <button className='w-full bg-primary text-white py-3 rounded-lg text-center font-medium hover:bg-primary-dark'>
        <Link href='/search' className='block w-full'>
          Search Flight
        </Link>
      </button>
    </div>
  );
};
