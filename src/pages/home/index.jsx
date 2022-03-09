import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Hero from '../../components/Hero';
import Story from '../../components/Story';
import storyPicture from '../../static/cam-adams.jpg';
import { pictures } from '../../assets';

import * as classes from '../../style.module.scss';

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        key={'main-page'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, type: 'tween' }}
      >
        <Hero />
        <main id="main" className={classes.main}>
          <Link to={'/day-1'}>
            <Story subTitle="केरा" title="Day 1" picture={pictures.dayOne}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              sit amet commodo nulla facilisi. Eget sit amet tellus cras
              adipiscing enim eu turpis.
            </Story>
          </Link>
          <Link to={'/day-2'}>
            <Story subTitle="केरा" title="Day 2" picture={pictures.dayTwo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              sit amet commodo nulla facilisi. Eget sit amet tellus cras
              adipiscing enim eu turpis.
            </Story>
          </Link>
          <Link to={'/day-3'}>
            <Story subTitle="केरा" title="Day 3" picture={pictures.dayThree}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              sit amet commodo nulla facilisi. Eget sit amet tellus cras
              adipiscing enim eu turpis.
            </Story>
          </Link>
        </main>
        <footer style={{ background: 'pink' }}></footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
