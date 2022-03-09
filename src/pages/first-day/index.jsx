import React from 'react';

import { pictures } from '../../assets';
import Journal from './journal.mdx';
import Page from '../../components/Page';

const DayOne = () => {
  return (
    <Page day="Day 1" subtitle="केरा" picture={pictures.dayOne}>
      <Journal />
    </Page>
  );
};

export default DayOne;
