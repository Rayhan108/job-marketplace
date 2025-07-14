import Banner from '@/app/component/home/Banner';
import Features from '@/app/component/home/Features';
import Stats from '@/app/component/home/Stats';
import React from 'react';

const HomePage = () => {
    return (
        <div>
        <Banner/>
        <Stats/>
        <Features/>
        </div>
    );
};

export default HomePage;