import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ItemView = (props: any) => {
  //   console.log('render__Item');
  // console.log(props);

  const onpress = () => {
    let i = 1;
    console.log('onpress___in');
  };

  return (
    <View style={{width: '100%', height:200, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={onpress}>
        <Text style={{color: 'black', fontSize: 100}}>{props.item}</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default memo(ItemView);
export default ItemView;
