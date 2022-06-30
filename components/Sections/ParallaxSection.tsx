import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const ParallaxSection = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/img/parallax-background.jpg', speed: -20 }]}
      className="h-96 lg:h-[46rem]"
    />
  );
};
