import React, {useEffect, useState} from 'react';

export const useLog = () => {
  useEffect(() => console.log('Amout!!!'), []);
};

export const useSize = props => {
  const newStyle = {
    height: props.size,
    width: props.size,
    backgroundColor: 'black',
  };

  return {newStyle};
};
