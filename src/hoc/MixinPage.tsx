import React from 'react';
import {Button, View} from 'react-native';

const logMixin = {
  componentDidMount() {
    console.log('------componentDidMount------');
  },
  say() {
    console.log(this.state.name);
  },
};

function componentClassMixins(Component, mixin) {
  for (let key in mixin) {
    Component.prototype[key] = mixin[key];
  }
}

class MixinPage extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Tree'};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button title="to say" onPress={this.say.bind(this)} />
      </View>
    );
  }
}
componentClassMixins(MixinPage, logMixin);

export default MixinPage;
