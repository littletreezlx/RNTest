import React from 'react';
import {Button, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('NestedPage', {screen: 'NestedB'})}
        title="to NestedPage"
      />
    </View>
  );
}

function NestedA({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nested A</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to B"
      />
    </View>
  );
}

function NestedB({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nested B</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

export const NestedPage = (props) => {
  console.log(props.message)
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName= {props.message}>
      <Stack.Screen
        name="NestedA"
        component={NestedA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NestedB"
        component={NestedB}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export function MessagePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen
          name="NestedPage"
          component={NestedPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
