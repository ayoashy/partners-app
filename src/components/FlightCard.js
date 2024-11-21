'use client';

import Link from 'next/link';
import React from 'react';
import { GiAirplaneDeparture } from 'react-icons/gi';

export const FlightCard = ({
  airlineLogo,
  airlineName,
  departureTime,
  departureLocation,
  stops,
  flightDuration,
  arrivalTime,
  arrivalLocation,
  price,
  limitedSeats,
}) => {
  return (
    <Link href='/flight/details'>
      <div>
        <div className='p-4 px-0 rounded-lg flex justify-between items-center'>
          {/* Flight Details */}
          <div className='flex items-center gap-4'>
            {/* Airline Logo */}
            <div className='w-[30px] h-[30px]'>
              <img
                src={airlineLogo}
                alt={airlineName}
                className='h-[30px] w-[30px] rounded'
              />
            </div>

            {/* Flight Information */}
            <div>
              <div className='flex items-center justify-between gap-4 text-secondary w-[180px]'>
                {/* Departure Info */}
                <div className='flex flex-col'>
                  <span className='text-[16px] font-semibold text-[#0F294C]'>
                    {departureTime}
                  </span>
                  <span className='text-[10px] text-[#58667B]'>
                    {departureLocation}
                  </span>
                </div>

                {/* Middle Section (Stops and Flight Duration) */}
                <div className='flex flex-col items-center'>
                  <div className='text-xs'>
                    {stops} Stop{stops > 1 ? 's' : ''}
                  </div>
                  <div className='flex items-center gap-1'>
                    <div className='w-[3px] h-[1px] bg-primary'></div>
                    <div className='w-[8px] h-[1px] bg-primary'></div>
                    <div className='w-[4px] h-[1px] bg-primary'></div>
                    <GiAirplaneDeparture className='w-3 h-3 text-primary' />
                    <div className='w-[3px] h-[1px] bg-primary'></div>
                    <div className='w-[8px] h-[1px] bg-primary'></div>
                    <div className='w-[3px] h-[1px] bg-primary'></div>
                  </div>
                  <div className='text-xs'>{flightDuration}</div>
                </div>

                {/* Arrival Info */}
                <div className='flex flex-col items-center'>
                  <span className='text-[16px] font-semibold text-[#0F294C]'>
                    {arrivalTime}
                  </span>
                  <span className='text-[10px] text-[#58667B]'>
                    {arrivalLocation}
                  </span>
                </div>
              </div>

              {/* Airline Name */}
              <p className='text-[#9BA4B1] text-[10px]'>{airlineName}</p>
            </div>
          </div>

          {/* Price and Availability */}
          <div className='flex flex-col items-center justify-between'>
            <div className='text-xl font-bold text-primary'>
              <span className='text-[#58667B] text-[14px]'>₦</span> {price}
            </div>
            {limitedSeats && (
              <div className='text-xs text-red-600 ml-auto'>{'< 5 left'}</div>
            )}
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#F5F5F5]ss bg-gray-300 mt-2' />
      </div>
    </Link>
  );
};
