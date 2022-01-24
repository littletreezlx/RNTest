import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemView = (props: any) => {
  //   console.log('render__Item');
  console.log(props);

  const onpress = () => {
    console.log('onpress___in');
  };

  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <Text style={{color: 'black', fontSize: 100}}>{props.item}</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default memo(ItemView);
export default ItemView;
