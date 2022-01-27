import React, { Fragment } from 'react';
import { View } from 'react-native';
import FadeInViewPage, { FadeInView } from './FadeInViewPage';
import InterpolateAnimPage from './InterpolateAnimPage';
import SpringViewPage, { SpringView } from './SpringViewPage';

export const ReactAnimTestPage = () => {
  return (
    <>
      {/* <FadeInViewPage /> */}
      <SpringViewPage/>
      {/* <InterpolateAnimPage/> */}
    </>
  );
};
