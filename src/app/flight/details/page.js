'use client';

import React from 'react';

const FlightDetails = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f5]'>
      <div className='h-[100px] bg-primary relative'>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[#FAFAFA] text-center font-bold mb-4 text-[17px] leading-[22px]'>
          FlyBoku
        </div>
      </div>
      {/* new section */}
      <div className='max-w-lg mx-auto px-[10px] py-[8px] bg-[#f5f5f5] rounded-lg shadow-md'>
        {/* Flight Details Section */}
        <div className='border-b p-[16px] mb-4 bg-white h-[100px] rounded-md'>
          <h2 className='text-[16px] font-semibold text-purple-800 mb-[8px]'>
            Flight Details
          </h2>
          <div className='flex items-center justify-between'>
            <p className='text-[10px] text-gray-700'>
              Lagos (LOS 1) - New York (JFK) | Wed, 16 Nov |{' '}
              <span>14:45 – 02:40</span>
            </p>
            <button className=' text-gray-500 text-xs hover:text-gray-700'>
              ▼
            </button>
          </div>
          <div className='w-full h-[1px] bg-[#F5F5F5]ss bg-gray-300 mt-4' />
        </div>

        {/* Passenger Info Section */}
        <div className='border-b p-[16px] mb-4 bg-white  rounded-md'>
          <div className='mb-6'>
            <h3 className='text-purple-800 text-[16px] font-medium mb-2'>
              Passenger Info
            </h3>
            <ul className='text-[12px] text-gray-600 list-disc pl-4 mb-4'>
              <li>
                Please make sure that you enter the name exactly as it appears
                on the ID that will be used when checking in.
              </li>
              <li>Once confirmed, the booking cannot be changed.</li>
            </ul>
            {/* Input Fields */}
            <div className='space-y-3'>
              <input
                type='text'
                placeholder='Given names'
                className='w-full border rounded-md p-2 text-[12px] text-gray-700 focus:ring focus:ring-purple-300 h-[50px]'
              />
              <input
                type='text'
                placeholder='Last name (surname)'
                className='w-full border rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-purple-300 text-[12px] h-[50px]'
              />
              <select
                className='w-full border rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-purple-300 [12px] h-[50px]
'
              >
                <option className='text-[12px]'>Gender</option>
                <option className='text-[12px]'>Male</option>
                <option className='text-[12px]'>Female</option>
              </select>
              <input
                type='text'
                placeholder='ID type'
                className='w-full border rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-purple-300 text-[12px] h-[50px]'
              />
              <input
                type='text'
                placeholder='ID number'
                className='w-full border rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-purple-300 text-[12px]
 h-[50px]'
              />
              <input
                type='date'
                placeholder='Expiration date'
                className='w-full border rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-purple-300 [12px] h-[50px]'
              />
            </div>
            {/* Add Passenger Button */}
            {/* <button className='mt-4 flex items-center text-blue-600 text-sm font-medium'>
              <span className='mr-2 text-xl'>➕</span> Add passenger
            </button> */}
            <button className='w-full py-3 bg-[#F1F4FB] text-[#0F294C] font-medium flex items-center justify-center gap-2 rounded-lg shadow-sm hover:bg-[#E4E8F2] transition mt-[8px]'>
              <span className='flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0F294C] text-[#0F294C] text-sm font-bold'>
                +
              </span>
              Add passenger
            </button>
          </div>

          <div className='w-full flex items-center justify-between bg-white py-4 rounded-lg'>
            {/* Price */}
            <div className='text-left'>
              <span className='text-[#58667B] text-sm font-semibold mr-1'>
                ₦
              </span>
              <span className='text-[#722A8D] text-[20px] font-bold'>
                1,000,000
              </span>
            </div>

            {/* Proceed Button */}
            <button className='bg-[#132866] text-white text-sm font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#0F1F5E] transition h-[50px] w-[170px]'>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
