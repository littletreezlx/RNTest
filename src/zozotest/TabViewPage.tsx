import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, ListRenderItem} from 'react-native';
import {CollapsibleRef, Tabs} from '../collapse/collapsibleTabView';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + '';

const Header = () => {
  return <View style={styles.header} />;
};

const TabViewPage: React.FC = () => {
  console.log('render!!!');
  const tabContainerRef = useRef<CollapsibleRef>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const renderItem: ListRenderItem<number> = React.useCallback(({index}) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  const tabbar = () => {
    return (
      <SegmentedControl
        style={styles.segmentedControl}
        fontStyle={{fontSize: 13, color: '#000000', fontWeight: '400'}}
        activeFontStyle={{fontSize: 13, color: '#000000', fontWeight: '500'}}
        values={['热门', '最新']}
        selectedIndex={selectedIndex}
        onChange={event => {
          const selectedSegmentIndex = event.nativeEvent.selectedSegmentIndex;
          console.log('onChange___' + selectedSegmentIndex);
          if (selectedIndex !== selectedSegmentIndex) {
            setSelectedIndex(selectedSegmentIndex);
          }
        }}
      />
    );
  };

  useEffect(() => {
    const currentIndex = tabContainerRef.current?.getCurrentIndex();
    // if (currentIndex !== undefined && currentIndex !== selectedIndex) {
    //   tabContainerRef.current?.setIndex(selectedIndex);
    // }
    tabContainerRef.current?.setIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <Tabs.Container
      ref={tabContainerRef}
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
      renderTabBar={tabbar}
      onIndexChange={(index: number) => {
        console.log('onIndexChange___' + index);
        setSelectedIndex(index);
      }}>
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
        />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <Tabs.ScrollView>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  segmentedControl: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
});

export default TabViewPage;
