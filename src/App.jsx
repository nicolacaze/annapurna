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
      <motion.div
        initial={{ flexBasis: '300px' }}
        animate={{ flexBasis: '600px' }}
        transition={{ duration: 1, type: 'tween' }}
        className={classes.image__container}
      >
        <img src={picture} alt="story-picture" />
      </motion.div>
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
        <Link to="/">Back</Link>
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

const DayOne = ({ nodeRef }) => {
  const [rect] = nodeRef.current.getClientRects();

  return (
    <motion.div
      initial={{
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
      }}
      animate={{ width: '100vw', height: '100vh', x: 0, y: 0 }}
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

DayOne.propTypes = {
  nodeRef: PropTypes.object.isRequired,
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

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={heroPicture} alt="mountains" />
    </div>
  );
};

const Story = ({ picture, subTitle, title, children }, ref) => {
  return (
    <article ref={ref} id="story-day-one" className={classes.story}>
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

const StoryWithRef = React.forwardRef(Story);

const MainPage = (props, ref) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, type: 'tween' }}
      > */}
      <Hero />
      <main className={classes.main}>
        <Link to={'/day-1'}>
          <StoryWithRef
            ref={ref}
            subTitle="केरा"
            title="Day 1"
            picture={storyPicture}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </StoryWithRef>
        </Link>
        {/* <Link to={'/day-2'}>
          <Story subTitle="केरा" title="Day 2" picture={storyPicture}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </Story>
        </Link>
        <Link to={'/day-3'}>
          <Story subTitle="केरा" title="Day 3" picture={storyPicture}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
            amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing
            enim eu turpis.
          </Story>
        </Link> */}
      </main>
      <footer style={{ background: 'pink' }}></footer>
      {/* </motion.div> */}
    </>
  );
};

const MainPageWithRef = React.forwardRef(MainPage);

const App = () => {
  const nodeRef = React.useRef();

  const setRef = (element) => {
    const isComponentMounting = !!element;
    console.log('SETREF CALLED', element);
    if (isComponentMounting) {
      nodeRef.current = element;
    }
  };

  return (
    <AnimatePresence>
      <Routes>
        <Route index element={<MainPageWithRef ref={setRef} />} />
        <Route path="/day-1" element={<DayOne nodeRef={nodeRef} />} />
        <Route path="/day-2" element={<DayTwo />} />
        <Route path="/day-3" element={<DayThree />} />
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
