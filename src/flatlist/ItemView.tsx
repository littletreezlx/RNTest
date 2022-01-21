import React, { memo } from "react"
import { Text, View } from "react-native";

const ItemView = ()=>{

     console.log('render__Item');

    return (
        <View>
          <Text style={{color: 'black', fontSize: 100}}>{"123"}</Text>
        </View>
      );
}


export default memo(ItemView)
// export default ItemView