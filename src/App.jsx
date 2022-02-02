import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import PropTypes from 'prop-types';

import * as classes from './style.module.scss';

import storyPicture from './static/cam-adams.jpg';
import heroPicture from './static/rohit.jpg';

const Page = ({ picture, subTitle, title, children }) => {
  return (
    <main className={classes.page}>
      <div className={classes.image__container}>
        <img src={picture} alt="story-picture" />
      </div>
      <div className={classes.story__content}>
        <Link to="/">Back</Link>
        <div className="content__title">
          <h4>{title}</h4>
          <h2>{subTitle}</h2>
          <hr className={classes.divider} />
        </div>
        <div className="content__text">
          <p>{children}</p>
          <p>Read Story</p>
        </div>
      </div>
    </main>
  );
};

Page.propTypes = {
  picture: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

const Story = ({ picture, subTitle, title, children }) => {
  return (
    <article className={classes.story}>
      <div className={classes.image__container}>
        <img src={picture} alt="story-picture" />
      </div>
      <div className={classes.story__content}>
        <div className="content__title">
          <h4>{title}</h4>
          <h2>{subTitle}</h2>
          <hr className={classes.divider} />
        </div>
        <div className="content__text">
          <p>{children}</p>
          <p>Read Story</p>
        </div>
      </div>
    </article>
  );
};

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={heroPicture} alt="mountains" />
    </div>
  );
};

const DayOne = () => {
  return (
    <motion.div
      style={{ width: '100vw', height: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: 'tween' }}
    >
      <Page subTitle="केरा" title="Day 1" picture={storyPicture}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet
        commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim eu
        turpis.
      </Page>
    </motion.div>
  );
};

const DayTwo = () => {
  return (
    <Page subTitle="केरा" title="Day 2" picture={storyPicture}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo
      nulla facilisi. Eget sit amet tellus cras adipiscing enim eu turpis.
    </Page>
  );
};

const DayThree = () => {
  return (
    <Page subTitle="केरा" title="Day 3" picture={storyPicture}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo
      nulla facilisi. Eget sit amet tellus cras adipiscing enim eu turpis.
    </Page>
  );
};

const MainPage = () => {
  const box = React.useRef();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <Hero /> */}
      <main className={classes.main}>
        <Link to={'/story/day-1'}>
          <Story ref={box} subTitle="केरा" title="Day 1" picture={storyPicture}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </Story>
        </Link>
        <Link to={'/story/day-2'}>
          <Story subTitle="केरा" title="Day 2" picture={storyPicture}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </Story>
        </Link>
        <Link to={'/story/day-3'}>
          <Story subTitle="केरा" title="Day 3" picture={storyPicture}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </Story>
        </Link>
      </main>
      <footer style={{ background: 'pink' }}></footer>
    </motion.div>
  );
};
const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/story/day-1" element={<DayOne />} />
        <Route path="/story/day-2" element={<DayTwo />} />
        <Route path="/story/day-3" element={<DayThree />} />
      </Routes>
    </AnimatePresence>
  );
};

Story.propTypes = {
  picture: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default App;
