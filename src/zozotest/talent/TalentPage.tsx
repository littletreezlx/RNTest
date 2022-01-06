import React from 'react';
import {ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {
//   CollapsibleProps,
//   CollapsibleRef,
//   Tab,
//   Tabs,
//   useHeaderMeasurements,
// } from '../../collapse/collapsibleTabView';
import {
  CollapsibleProps,
  CollapsibleRef,
  Tab,
  Tabs,
  useHeaderMeasurements,
} from 'react-native-collapsible-tab-view';
import TalentPageHeader from './TalentPageHeader';

export const MIN_HEADER_HEIGHT = 48;
export const HEADER_HEIGHT = 250;

type Props = {
  emptyContacts?: boolean;
} & Partial<CollapsibleProps>;

const TabBarComponent = () => {
  return <View style={styles.invisible_tab_bar}></View>;
};

const TalentPage = React.forwardRef<CollapsibleRef, Props>(
  ({emptyContacts, ...props}, ref) => {
    // const {top, height} = useHeaderMeasurements();

    const DATA = [0, 1, 2, 3, 4];
    const identity = (v: unknown): string => v + '';

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

    const TabBarComponent = () => {
      return <View style={styles.invisible_tab_bar}></View>;
    };

    return (
      // <SafeAreaView>
      //   <Text>'left'</Text>

      //   <Tabs.Container ref={ref} headerHeight={HEADER_HEIGHT} {...props}>
      //     <Tabs.Tab name="test">
      //       <Tabs.FlatList
      //         data={DATA}
      //         renderItem={renderItem}
      //         keyExtractor={identity}
      //       />
      //     </Tabs.Tab>
      //   </Tabs.Container>
      // </SafeAreaView>

      <Tabs.Container ref={ref} headerHeight={HEADER_HEIGHT} {...props}>
        <Tabs.Tab name="test">
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
      </Tabs.Container>
    );
  },
);

const styles = StyleSheet.create({
  left_top_text: {
    position: 'absolute',
  },

  root: {
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: 250,
  },
  container: {
    height: MIN_HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  scroll: {
    color: 'white',
    backgroundColor: 'black',
  },
  invisible_tab_bar: {
    height: 0,
    width: '100%',
  },
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
});

const TalentPageNew = () => {
  return (
    <TalentPage
      renderHeader={() => <TalentPageHeader />}
      minHeaderHeight={MIN_HEADER_HEIGHT}
      renderTabBar={TabBarComponent}
    />
  );
};

export default TalentPageNew;
