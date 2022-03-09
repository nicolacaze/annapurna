import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import storyPicture from '../../static/cam-adams.jpg';
import Journal from './journal.mdx';

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
        <img src={storyPicture} alt="story-picture" />
      </div>
      <div className={classes.story__content}>
        <div className="content__title">
          <h4>Day 2</h4>
          <h2>केरा</h2>
          <hr className={classes.divider} />
        </div>
        <div className="content__text">
          <Journal />
        </div>
        <Link to="/">Back</Link>
      </div>
    </motion.main>
  );
};

export default DayOne;
