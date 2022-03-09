import React from 'react';

import { pictures } from '../assets';

import * as classes from '../style.module.scss';

const Hero = () => {
  return (
    <div id="hero" className={classes.hero}>
      <img src={pictures.hero} alt="mountains" />
    </div>
  );
};

export default Hero;
