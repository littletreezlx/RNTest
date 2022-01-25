import React from 'react';
import {AlertDialog, Button, Center} from 'native-base';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => {
    console.log('onPress');
    setIsOpen(false);
  };

  const cancelRef = React.useRef(null);
  let dialogWidth = Dimensions.get('window').width * 0.7;

  return (
    <Center flex={1} px="3">
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <View
          style={{
            width: dialogWidth,
            backgroundColor: 'white',
            borderRadius: 7,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginTop: 20,
              marginBottom: 20,
            }}>
            确认不再关注?
          </Text>

          <View
            style={{backgroundColor: '#DDDDDD', width: '100%', height: 1}}
          />

          <View style={{flexDirection: 'row', height: 44}}>
            <TouchableOpacity onPress={onClose} ref={cancelRef}>
              <Text
                style={{
                  color: '#888888',
                  fontSize: 14,
                  height: 44,
                  lineHeight: 44,
                  width: dialogWidth / 2,
                  textAlign: 'center',
                }}>
                取消
              </Text>
            </TouchableOpacity>

            <View
              style={{backgroundColor: '#DDDDDD', height: '100%', width: 1}}
            />

            <TouchableOpacity onPress={onClose}>
              <Text
                style={{
                  color: '#4A90E2',
                  fontSize: 14,
                  height: 44,
                  lineHeight: 44,
                  width: dialogWidth / 2,
                  textAlign: 'center',
                }}>
                确定
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AlertDialog>
    </Center>
  );
};
