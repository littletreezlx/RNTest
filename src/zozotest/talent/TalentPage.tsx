import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CollapsibleProps,
  CollapsibleRef,
  Tab,
  Tabs,
  useHeaderMeasurements,
} from 'react-native-collapsible-tab-view';
import ExampleContent from '../../collapse/Shared/ExampleComponent';
import TalentPageHeader from './TalentPageHeader';
// import ExampleComponent from '././Shared/ExampleComponent';

export const MIN_HEADER_HEIGHT = 48;
export const HEADER_HEIGHT = 250;




type Props = {
  emptyContacts?: boolean;
} & Partial<CollapsibleProps>;


const TabBarComponent = ()=>{
  return <View style = {styles.invisible_tab_bar}></View>
}


const TalentPage = React.forwardRef<CollapsibleRef, Props>(
  ({emptyContacts, ...props}, ref) => {

    const {top, height} = useHeaderMeasurements();


    return (
      <Tabs.Container ref={ref} headerHeight={HEADER_HEIGHT} {...props}>
        <Tabs.Tab name = 'test' >
          <Tabs.ScrollView style={styles.scroll}>
            <Text>'AAA'</Text>
            <Text>'BBB'</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    );
  },
);

const styles = StyleSheet.create({
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
});

const TalentPageNew = () => {
  return (
    <TalentPage
      renderHeader={() => <TalentPageHeader />}
      minHeaderHeight={MIN_HEADER_HEIGHT}
    />
  );
};

export default TalentPageNew;
