import React from 'react';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import StatsSection from '../Components/StatsSection';
import MailUs from '../Components/MailUs';

const Home = () => {
  return (
    <div>
      <title>ToyTopia - Home</title>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <StatsSection></StatsSection>
      <MailUs></MailUs>
    </div>
  );
};

export default Home;
