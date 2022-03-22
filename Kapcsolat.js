import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View, Image , TouchableOpacity, Button,SafeAreaView,StatusBar } from 'react-native';
import { Text } from 'react-native-elements'
const IP = require('./ip.js');

//const ipcim="http://192.168.2.106:3000";
export default class FetchExample extends React.Component {


  render(){
    return(
        <View>
        <View>
          <Text style={styles.cim}>Kapcsolat</Text>
          <Text style={styles.szoveg}>
                Email: enyedidani@gmail.com
          </Text>
        </View>
        </View>
    );
  }
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
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:5,
      marginRight:5
  
    }
  });