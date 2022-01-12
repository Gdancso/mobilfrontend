import React, {useRef, useEffect} from 'react';
import { Button, View, Animated } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Statisztika from './Statisztika';
import Forum from './Forum';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Forum')}
        title="Go to Forum"
        
      />

      <Button
        onPress={() => navigation.navigate('Statisztika')}
        title="Go to test"
      />

      
    </View>
  );
}


function ForumScreen({ navigation }) {
  return (
    <Forum/>
  );
}
function statisztikafuggveny({ navigation }) {
  return (
    <Statisztika/>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Forum" component={ForumScreen} />
        <Drawer.Screen name="Statisztika" component={statisztikafuggveny} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
