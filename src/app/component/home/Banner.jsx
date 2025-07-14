
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {
    return (
      <div className=" bg-[#E8EFE3] flex items-center justify-center px-4 py-16 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Connect Chefs with <span className="text-[#679046]">Restaurants</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Find the perfect culinary talent or your next kitchen opportunity
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Discover Profiles Button */}
          <button className="bg-[#679046] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 w-ful sm:w-auto">
            Discover Profiles
            <FaSearch className="w-5 h-5" />
          </button>

          {/* Get Started Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 w-ful sm:w-auto">
            Get Started Now
            <MdArrowOutward  className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    );
};

export default Banner;