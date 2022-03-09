import React from 'react';

import { pictures } from '../../assets';
import Page from '../../components/Page';
import Journal from './journal.mdx';

const DayOne = () => {
  return (
    <Page day="Day 3" subtitle="केरा" picture={pictures.dayThree}>
      <Journal />
    </Page>
  );
};

export default DayOne;
