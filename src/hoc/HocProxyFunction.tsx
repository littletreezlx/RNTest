import React, {useEffect, useState} from 'react';

function withLog(WrapedView) {
  return props => {
    useEffect(() => console.log('Amout!!!'), []);
    return <WrapedView />;
  };
}

function withSize(WrapedView, initSize: number) {
  return props => {
    return (
      <WrapedView
        style={{
          height: props.size,
          width: props.size,
          backgroundColor: 'black',
        }}
      />
    );
  };
}

export {withLog, withSize};
