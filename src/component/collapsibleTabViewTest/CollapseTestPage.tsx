import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Tabs} from '../../component/collapsibleTabView';
import {TabBarProps} from '../collapsibleTabView/types';
import SegmentedControl from '../SegmentControl/SegmentedControl';
import CollapseItem from './CollapseItem';

const HEADER_HEIGHT = 250;

const DATA = Array.from(new Array(100).keys());

// const DATA = [0, 1, 2, 3, 4];

const identityA = (v: unknown): string => v + 'AAA';
const identityB = (v: unknown): string => v + 'BBB';

const CollapseTestPage: React.FC = () => {
  const [A, setA] = useState<boolean>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onPressHeader = () => {
    setA(state => {
      return !state;
    });
  };
  const Header = useCallback(() => {
    console.log('render_header');
    return (
      <TouchableOpacity onPress={onPressHeader}>
        <View style={styles.header}></View>
      </TouchableOpacity>
    );
  }, []);

  const list = () => (
    <Tabs.FlatList
      data={DATA}
      renderItem={props => <CollapseItem {...props} />}
      keyExtractor={identity}
    />
  );

  const tabbar = useCallback(
    (props: TabBarProps<TabName>) => (
      <SegmentedControl
        style={styles.segmentedControl}
        fontStyle={{fontSize: 13, color: '#000000', fontWeight: '400'}}
        activeFontStyle={{fontSize: 13, color: '#000000', fontWeight: '500'}}
        values={props.tabNames}
        // selectedIndex={props.index.value}
        selectedIndex={selectedIndex}
        onChange={event => {
          const selectedSegmentIndex = event.nativeEvent.selectedSegmentIndex;
          console.log('onchange___' + selectedSegmentIndex);
          console.log(props.tabNames[selectedSegmentIndex]);
          props.onTabPress(props.tabNames[selectedSegmentIndex]);
        }}
      />
    ),
    [selectedIndex],
  );

  // const onIndexChange = useCallback((index: number) => {
  //   setSelectedIndex(index);
  // }, []);

  // const onIndexChange = nIndex => {
  //   setSelectedIndex(index);
  //   const {onIndexChange} = tabViewProps;
  //   onIndexChange && onIndexChange(nIndex);
  //   syncScrollOffsets();
  // };

  const renderHeader = useCallback(
    () => (
      <TouchableOpacity onPress={onPressHeader}>
        <View style={styles.header}></View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <Tabs.Container
      renderHeader={renderHeader}
      // headerHeight={HEADER_HEIGHT} // optional
      // minHeaderHeight={100}
      // renderTabBar={tabbar}
      // onIndexChange={onIndexChange}
    >
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={DATA}
          renderItem={props => <CollapseItem {...props} />}
          keyExtractor={identityA}
        />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <Tabs.FlatList
          data={DATA}
          renderItem={props => <CollapseItem {...props} />}
          keyExtractor={identityB}
        />
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
    backgroundColor: '#333333',
  },
  tv: {
    fontSize: 50,
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
