import React from 'react';

import { pictures } from '../../assets';
import Page from '../../components/Page';
import Journal from './journal.mdx';

const DayTwo = () => {
  return (
    <Page day="Day 2" subtitle="केरा" picture={pictures.dayTwo}>
      <Journal />
    </Page>
  );
};

export default DayTwo;
