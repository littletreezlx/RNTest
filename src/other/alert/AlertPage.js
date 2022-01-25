import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

const AlertPage = () => {
  return (
    <View>
      <Button title="Show alert" onPress={showAlert}></Button>
    </View>
  );
};

export default AlertPage;
