import React from 'react';
import PropTypes from 'prop-types';

import * as classes from '../style.module.scss';

const Story = ({ picture, subTitle, title, children }) => {
  return (
    <article id="story-day-one" className={classes.story}>
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

Story.propTypes = {
  picture: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Story;
