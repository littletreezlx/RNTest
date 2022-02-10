import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CenterDialog from './CenterDialog';

const CenterDialogPage = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onClickConfirm = () => {
    console.log('onClickConfirm');
    setDialogVisible(false);
  };

  const onClickCancel = () => {
    console.log('onClickCancel');
    setDialogVisible(false);
  };

  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setDialogVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      <CenterDialog
        isDialogVisible={isDialogVisible}
        setDialogVisible={setDialogVisible}
        onClickConfirm={onClickConfirm}
        // onClickCancel={onClickCancel}
        content={'asdsadsa'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CenterDialogPage;
