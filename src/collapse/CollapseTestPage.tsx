import React from 'react';
import {View, StyleSheet, ListRenderItem} from 'react-native';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + '';

const Header = () => {
  return <View style={styles.header} />;
};

const CollapseTestPage: React.FC = () => {
  const renderItem: ListRenderItem<number> = React.useCallback(
    ({item, index}) => {
      // console.log('🚀 ~ file: CollapseTestPage.js ~ line 17 ~ index', index);
      // console.log('🚀 ~ file: CollapseTestPage.js ~ line 17 ~ item', item);
      return (
        <View
          style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]}
        />
      );
    },
    [],
  );

  
  const TabBarComponent = ()=>{
    return <View style = {styles.test_tab_bar}></View>
  }

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
      renderTabBar={TabBarComponent}
    >
      <Tabs.Tab  name="A">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
};



const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: '#000000',
  },
  boxB: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
  test_tab_bar: {
    height: 0,
    width: '100%',
    backgroundColor: '#000000',
  },
});

export default CollapseTestPage;
