import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { pictures } from '../../assets';

import * as classes from '../../style.module.scss';

const DayOne = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: 'tween' }}
      className={classes.page}
    >
      <div className={classes.image__container}>
        <img src={pictures.dayThree} alt="story-picture" />
      </div>
      <div className={classes.story__content}>
        <div className="content__title">
          <h4>Day 3</h4>
          <h2>केरा</h2>
          <hr className={classes.divider} />
        </div>
        <div className="content__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </p>
        </div>
        <Link to="/">Back</Link>
      </div>
    </motion.main>
  );
};

export default DayOne;
