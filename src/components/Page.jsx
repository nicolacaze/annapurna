import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import * as classes from '../style.module.scss';

const Page = ({ children, picture, day, subtitle }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: 'tween' }}
      className={classes.page}
    >
      <div className={classes.image__container}>
        <img src={picture} alt="story-picture" />
      </div>
      <div className={classes.story__content}>
        <div className="content__title">
          <h4>{day}</h4>
          <h2>{subtitle}</h2>
          <hr className={classes.divider} />
        </div>
        <div className="content__text">{children}</div>
        <Link to="/">Back</Link>
      </div>
    </motion.main>
  );
};

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  picture: PropTypes.string,
  day: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Page;
