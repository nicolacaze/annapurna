import React from 'react';

import heroPicture from '../static/rohit.jpg';

import * as classes from '../style.module.scss';

const Hero = () => {
  return (
    <div id="hero" className={classes.hero}>
      <img src={heroPicture} alt="mountains" />
    </div>
  );
};

export default Hero;
