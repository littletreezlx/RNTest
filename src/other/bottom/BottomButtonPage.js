import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default () => {
  const BottomPublishView = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          position: 'absolute',
          elevation: 30,
        }}>
        <View style={{flex: 1, backgroundColor: 'white'}} />
        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <Text style={{marginLeft: 7, color: 'white', fontSize: 14}}>
              发布穿搭
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <BottomPublishView />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    elevation: 1,
    shadowColor: 'transparent',
  },
  tv_name: {
    color: 'white',
    fontSize: 16,
  },
  invisible_tab_bar: {
    height: 0,
  },

  actionWrapper: {
    // width: Dimensions.get('screen').width,
    height: 76,
    // position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOffset: {width: 0, height: -8},

    // shadowRadius: 10,
    // elevation: 10,
    // zIndex: 10,
    // paddingBottom: 10,
    // bottom: 0,
  },

  actionButton: {
    marginTop: 7,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#4A90E2',
    height: 50,
    borderRadius: 8,
  },
});
