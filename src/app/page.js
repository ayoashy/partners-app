'use client'
import { useState } from 'react';
import { OneWayComponent } from '../components/OneWayComponent';
import { RoundTripComponent } from '../components/RoundTripComponent';
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const MultiCityComponent = () => (
    <div className='p-4 text-center'>Content for Multi-City</div>
  );

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Purple Container */}
      <div className='h-[100px] bg-primary relative'>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[#FAFAFA] text-center font-bold mb-4 text-[17px] leading-[22px]'>
          FlyBoku
        </div>
      </div>

      {/* Tab Section */}
      <div className='flex justify-around bg-white shadow-md py-2'>
        {['One-Way', 'Round Trip', 'Multi-City'].map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-center py-2 text-[12px] font-medium relative
            ${activeTab === index ? 'text-primary' : 'text-[#7A7A7A]'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
            {activeTab === index && (
              <span className='absolute left-0 right-0 bottom-[-8px] h-[2px] bg-purple-700' />
            )}
          </button>
        ))}
      </div>

      {/* Render Content Based on Active Tab */}
      <div className='bg-white mt-4 shadow-md rounded p-4'>
        {activeTab === 0 && <OneWayComponent />}
        {activeTab === 1 && <RoundTripComponent />}
        {activeTab === 2 && <MultiCityComponent />}
      </div>
    </div>
  );
}
