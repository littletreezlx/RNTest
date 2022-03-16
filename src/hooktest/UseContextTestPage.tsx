import React, {useContext, useState} from 'react';
import {Button, View} from 'react-native';

const AppContext = React.createContext('123');

const InnerA = () => {
  const contextValue = useContext(AppContext);
  return <Button title={contextValue}></Button>;
};

const UseContextTestPage = () => {
  return (
    <AppContext.Provider value={'321'}>
      <View>
        <InnerA />
        <InnerA />
      </View>
    </AppContext.Provider>
  );
};

export default UseContextTestPage;
