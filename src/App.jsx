import React from 'react';

import PropTypes from 'prop-types';

import * as classes from './style.module.scss';

import StoryPicture from './static/cam-adams.jpg';
import Hero from './static/rohit.jpg';

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

const App = () => {
  return (
    <>
      <div className={classes.hero}>
        <img src={Hero} alt="mountains" />
      </div>
      <main className={classes.main}>
        <Story
          className="track"
          subTitle="केरा"
          title="Day 1"
          picture={StoryPicture}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
          amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim
          eu turpis.
        </Story>
        <Story
          className="track"
          subTitle="केरा"
          title="Day 2"
          picture={StoryPicture}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
          amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim
          eu turpis.
        </Story>
        <Story
          className="track"
          subTitle="केरा"
          title="Day 3"
          picture={StoryPicture}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit
          amet commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim
          eu turpis.
        </Story>
      </main>
      <footer style={{ background: 'pink' }}></footer>
    </>
  );
};

Story.propTypes = {
  picture: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default App;
