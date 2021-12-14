import React, {useRef, useEffect} from 'react';
import { Button, View, Animated } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Statisztika from './Statisztika'




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
        
      />

      <Button
        onPress={() => navigation.navigate('Statisztika')}
        title="Go to test"
      />

      <Button
        onPress={() => navigation.navigate('Download')}
        title="Download"
      />
      
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function statisztikafuggveny({ navigation }) {
  return (
    <Statisztika/>
  );
}
function download({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
    
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Statisztika" component={statisztikafuggveny} />
        <Drawer.Screen name="Download" component={download} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
