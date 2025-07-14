import Banner from '@/app/component/home/Banner';
import Features from '@/app/component/home/Features';
import Join from '@/app/component/home/Join';
import Stats from '@/app/component/home/Stats';
import React from 'react';

const HomePage = () => {
    return (
        <div>
        <Banner/>
        <Stats/>
        <Features/>
        <Join/>
        </div>
    );
};

export default HomePage;