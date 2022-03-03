import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  ScrollView,
} from 'react-native';

//https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11
const NewCollapseTestPage = () => {
  const content =
    '//https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11//https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11//https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11';
  return (
    <View style={styles.container}>
      <View style={{height: 300}} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>This is Title</Text>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  content: {
    fontSize: 24,
  },
});

export default NewCollapseTestPage;
