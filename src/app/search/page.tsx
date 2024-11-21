"use client"

import React from 'react'
import { FaFilter } from 'react-icons/fa';
import {FlightCard} from '../../components/FlightCard'

const flights = [
  {
    airlineLogo: '/qatar-logo.png',
    airlineName: 'Qatar Airways',
    departureTime: '22:05',
    departureLocation: 'LOS1',
    stops: 1,
    flightDuration: '12h 50m',
    arrivalTime: '02:40',
    arrivalLocation: 'JFK T8',
    price: '150,000',
    limitedSeats: false,
  },
  {
    airlineLogo: '/emirate-logo.png',
    airlineName: 'Emirates',
    departureTime: '14:45',
    departureLocation: 'LOS1',
    stops: 0,
    flightDuration: '32h 50m',
    arrivalTime: '10:15',
    arrivalLocation: 'JFK T1',
    price: '200,000',
    limitedSeats: true,
  },
  {
    airlineLogo: '/alaska-logo.png',
    airlineName: 'Alaska',
    departureTime: '14:45',
    departureLocation: 'LOS1',
    stops: 0,
    flightDuration: '32h 50m',
    arrivalTime: '10:15',
    arrivalLocation: 'JFK T1',
    price: '200,000',
    limitedSeats: false,
  },
  {
    airlineLogo: '/delta-logo.png',
    airlineName: 'Delta',
    departureTime: '14:45',
    departureLocation: 'LOS1',
    stops: 0,
    flightDuration: '32h 50m',
    arrivalTime: '10:15',
    arrivalLocation: 'JFK T1',
    price: '200,000',
    limitedSeats: false,
  },
  {
    airlineLogo: '/continental-logo.png',
    airlineName: 'Qatar',
    departureTime: '14:45',
    departureLocation: 'LOS1',
    stops: 0,
    flightDuration: '32h 50m',
    arrivalTime: '10:15',
    arrivalLocation: 'JFK T1',
    price: '200,000',
    limitedSeats: false,
  },
];



export default function Search () {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Purple Container */}
      <div className='h-[100px] bg-primary relative'>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[#FAFAFA] text-center font-bold mb-4 text-[17px] leading-[22px]'>
          FlyBoku
        </div>
      </div>

      <div className='flex items-center justify-between bg-[#F5F5F5] px-4 py-2 h-[50px]'>
        {/* Left Section */}
        <div className='flex-1 items-center space-x-2'>
          <h1 className='text-lg font-semibold text-[#0F294C]'>
            Available flights
          </h1>
        </div>

        {/* Right Section */}

        <div className='flex items-center space-x-2 text-[10px]'>
          <FaFilter className='text-[#9FA9B7] w-4 h-4' />
          <span className='text-[#9FA9B7]'>Sort by:</span>
          <button className='px-2 py-[2px] font-medium text-primary bg-purple-100  border border-transparent'>
            Cheapest
          </button>
          <button className='px-2 py-[2px] font-medium text-[#0F294C] bg-white border border-gray-300 hover:border-gray-400'>
            Fastest
          </button>
        </div>
      </div>

      <div className=' text-foreground py-6 px-[15px] pt-0 space-y-6s '>
        {/* <div className='w-full h-[1px] bg-[#F5F5F5]ss bg-red-700 mt-2' /> */}
        <div className='w-full h-[1px] bg-[#F5F5F5]ss bg-gray-300' />
        <div className='text-sm font-bold text-primary mb-6'>Cheapest</div>

        <div className='space-y-4'>
          {flights.map((flight) => (
            <FlightCard {...flight} />
          ))}
        </div>
      </div>
    </div>
  );
}
