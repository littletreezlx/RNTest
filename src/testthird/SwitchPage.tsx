import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import IosStyleSwitch from './IosStyleSwitch';

const SwitchPage = () => {
  const [isSubscribed, setSubscribed] = useState(false);

  return (
    <View style={styles.root}>
      <IosStyleSwitch
        width={46}
        height={28}
        circleColorActive={'#FFFFFF'}
        circleColorInactive={'#FFFFFF'}
        backgroundActive={'#4A90E2'}
        backgroundInactive={'#CCCCCC'}
        value={isSubscribed}
        onSyncPress={value => {
          console.log(value);
          setSubscribed(!isSubscribed);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwitchPage;
