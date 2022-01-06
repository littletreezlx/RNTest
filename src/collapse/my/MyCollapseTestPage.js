import React, {Component, useRef} from 'react';
import {StyleSheet, Text, View, Animated, FlatList} from 'react-native';

class MyList extends Component {
  render() {
    // 模拟列表数据
    const mockData = [
      '富强',
      '民主',
      '文明',
      '和谐',
      '自由',
      '平等',
      '公正',
      '法治',
      '爱国',
      '敬业',
      '诚信',
      '友善',
      '富强',
      '民主',
      '文明',
      '和谐',
      '自由',
      '平等',
      '公正',
      '法治',
      '爱国',
      '敬业',
      '诚信',
      '友善',
    ];

    return (
      <FlatList
        onScroll={this.props.onScroll}
        data={mockData}
        renderItem={({item}) => (
          <View style={styles.list}>
            <Text>{item}</Text>
          </View>
        )}
      />
    );
  }
}

const MyCollapseTestPage = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // P.S. 270,217,280区间的映射是告诉interpolate，所有大于270的值都映射成-50
  // 这样就不会导致Header在上滑的过程中一直向上滑动了
  const fixedHeaderTop = scrollY.interpolate({
    inputRange: [0, 50, 51],
      outputRange: [0, -50, -50]
  });

  const fixedListTop = scrollY.interpolate({
    inputRange: [0, 50, 100],
      outputRange: [0,  -50, -50]
  });

  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        contentOffset: {y: scrollY},
      },
    },
  ]);

  return (
    <View style={styles.container}>
      <Animated.View style={{translateY: fixedHeaderTop}}>
        <View style={styles.header}>
          <Text style={styles.text}>linshuirong.cn</Text>
        </View>
      </Animated.View>
      {/* 在oHeader组件上移的同时，列表容器也需要同时向上移动，需要注意。 */}
      <Animated.View style={{translateY: fixedListTop}}>
        <MyList onScroll={animatedEvent} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    height: 100,
    backgroundColor: 'pink',
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  header: {
    height: 50,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default MyCollapseTestPage;
