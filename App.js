import React, {useRef, useEffect} from 'react';
import { Button, View, Animated,StyleSheet,Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Statisztika from './Statisztika';
import Forum from './Forum';
//import Kapcsolat from './Kapcsolat';
import Hirek from './Hirek';




function HomeScreen({ navigation }) {
  return (
    <View>
      <View>
        <Text style={styles.cim}>Lonley Knight</Text>
      </View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'k03IHc1kdV4'}
      />

      <View>
        <Text style={styles.szoveg}>Üdvözöllek Játékos,</Text>
        <Text style={styles.szoveg}>
              Ebben a csodálatos platformer játékban, aminek Lonely Knight nevet adtunk. 
              Nem fogok hazudni a kaland, amibe belefogsz vágni nem lesz egyszerű és attól függően nem lesz rövid se. 
              Ezért készülj fel sok szörnyre és akadályra utazásod alatt. 
              A célodat csak te tudott teljesíteni, ami lehet, 
              hogy minél több ponttal térj vissza ebből a csodálatos kalandból vagy kirobbanó dühödben szegény billentyűzeted bánja a játékkal eltöltött drága idődet. 
              De a játék vége így is a fő menü lesz.
        </Text>
      </View>
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
/*function KapcsolatF({ navigation }) {
  return (
    <Kapcsolat/>
  );
}*/
function hirekfuggveny({ navigation }) {
  return (
    <Hirek/>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Nyitólap" component={HomeScreen} />
        <Drawer.Screen name="Fórum" component={ForumScreen} />
        <Drawer.Screen name="Statisztika" component={statisztikafuggveny} />
        <Drawer.Screen name="Hírek" component={hirekfuggveny} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  cim:{
    marginBottom:20,
    marginTop:20,
    textAlign:'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  szoveg:{
    marginBottom:5,
    marginTop:20,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft:5,
    marginRight:5

  }
});