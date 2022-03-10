import React from 'react';
import {Button, View} from 'react-native';

class ParentPage extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Tree'};
  }
  say() {
    console.log(this.state.name);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button title="to say" onPress={this.say.bind(this)} />
      </View>
    );
  }
}
class ExtendPage extends ParentPage {
  componentDidMount() {
    console.log(this.state.name);
  }
  say() {
    /* 会覆盖基类中的 say  */
    console.log('extends components');
  }
}

export default ExtendPage;
