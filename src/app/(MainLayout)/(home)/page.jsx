import Banner from '@/app/component/home/Banner';
import Features from '@/app/component/home/Features';
import Join from '@/app/component/home/Join';
import Stats from '@/app/component/home/Stats';
import React from 'react';
import { IoMdPlay } from 'react-icons/io';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <Features />
      <Join />
      {/* Feedback Button */}
      <div className="fixed top-96 right-4">
        <button className="bg-[#679046]  text-white px-4 py-2 md:py-3 rounded-md text-sm font-medium w-[100px] md:w-auto relative z-10">
          Feedback!!!
        </button>
        <IoMdPlay
          size={40}
          className="text-[#679046] rotate-180 absolute top-4 md:top-6 right-4 z-0"
        />
      </div>
    </div>
  );
};

export default HomePage;