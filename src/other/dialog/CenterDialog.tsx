import React, {Dispatch} from 'react';
import {SetStateAction} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  isDialogVisible: boolean;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
  onClickConfirm: () => void;
  onClickCancel?: () => void;
  content: string;
};

const dialogWidth = Dimensions.get('window').width * 0.7;

const CenterDialog = ({
  isDialogVisible,
  setDialogVisible,
  onClickConfirm,
  onClickCancel,
  content,
}: Props) => {
  //调用Dialog的话外面也一定有一个state，自己还不如不维护
  // const [modalVisible, setModalVisible] = useState(false);

  const onClickOutShadow = () => {
    console.log('onClickOutShadow');
    setDialogVisible(false);
  };

  const onClickCancelInner = () => {
    console.log('onClickOutShadow');
    if (onClickCancel === undefined) {
      setDialogVisible(false);
    } else {
      onClickCancel();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isDialogVisible}
      statusBarTranslucent={true}
      onRequestClose={() => {
        setDialogVisible(false);
      }}>
      <View style={styles.root_modal}>
        <TouchableWithoutFeedback onPress={onClickOutShadow}>
          <View style={styles.root_modal_press} />
        </TouchableWithoutFeedback>

        <View style={styles.container_real_dialog}>
          <Text style={styles.tv_content}>{content}</Text>
          <View style={styles.divider_hor} />
          <View style={styles.container_button}>
            <TouchableOpacity onPress={onClickCancelInner}>
              <Text style={styles.tv_cancel}>取消</Text>
            </TouchableOpacity>
            <View style={styles.divider_ver} />
            <TouchableOpacity onPress={onClickConfirm}>
              <Text style={styles.tv_confrim}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root_modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root_modal_press: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container_real_dialog: {
    width: dialogWidth,
    backgroundColor: 'white',
    borderRadius: 7,
    alignItems: 'center',
  },
  container_button: {
    flexDirection: 'row',
    height: 44,
  },
  divider_hor: {
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 1,
  },
  divider_ver: {
    backgroundColor: '#DDDDDD',
    height: '100%',
    width: 1,
  },
  tv_content: {
    color: 'black',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  tv_confrim: {
    color: '#4A90E2',
    fontSize: 14,
    height: 44,
    lineHeight: 44,
    width: dialogWidth / 2,
    textAlign: 'center',
  },
  tv_cancel: {
    color: '#888888',
    fontSize: 14,
    height: 44,
    lineHeight: 44,
    width: dialogWidth / 2,
    textAlign: 'center',
  },
});

export default CenterDialog;
