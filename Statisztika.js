import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, Button,SafeAreaView,StatusBar } from 'react-native';
const IP = require('./ip.js');

//const ipcim="http://192.168.2.106:3000";
export default class FetchExample extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  rendezes_pont=()=>{
    //alert("hello")
    return fetch('http://'+IP.ipcim+'/rend_pont')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      //alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_halal=()=>{
    //alert("hello")
    return fetch('http://'+IP.ipcim+'/rend_halal')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
     // alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_ido=()=>{
   // alert("hello")
    return fetch('http://'+IP.ipcim+'/rend_ido')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
     // alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_date=()=>{
    //alert("hello")
    return fetch('http://'+IP.ipcim+'/rend_date')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      //alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }



  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch('http://'+IP.ipcim+'/statisztika', {
      method: "POST",
      body: JSON.stringify,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    //alert("hello")
    return fetch('http://'+IP.ipcim+'/statisztika')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
       // alert(JSON.stringify(this.state.dataSource))
      })
      .catch((error) =>{
        console.error(error);
      });

  }



  render(){

    

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{ paddingTop:20}}>
        <View style={styles.containerbutton}>
            <View style={styles.button} >
              <Button onPress={() => this.rendezes_pont()} title="Rendezés pont" />
            </View>
            <View style={styles.button} >
              <Button onPress={() => this.rendezes_halal()} title="Rendezés halal" />
            </View>
            <View style={styles.button} >
            <Button onPress={() => this.rendezes_ido()} title="Rendezés ido" />   
            </View>
            <View style={styles.button} >
              <Button onPress={() => this.rendezes_date()} title="Rendezés date" />
            </View>

          </View>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={styles.container}>
             <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_nev}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_pont}</Text>
            </View>
            <View style={styles.rect} >
            <Text style={styles.Text}>{item.statisztika_halal}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_ido}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_level_id}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_date.split ("T")[0].trim()}</Text>
            </View>
          </View>

        }

        

        
          keyExtractor={({statisztika_id}, index) => statisztika_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:80,
    marginLeft:"auto",
    marginRight:"auto",
  },
  button: {
    alignItems: "center",
    padding: 10,
    width:100,
    marginLeft:"auto",
    marginRight:"auto"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: 'row'
  },
  rect: {
    width: 63,
    height: 85,
    backgroundColor: "rgba(2,2,2,0.75)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  Text:{
    textAlign:"center",
    color:"white",
    fontSize: 20,
    marginTop: 15,
    marginBottom:5
  },
  head: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    backgroundColor: "rgba(2,2,2,1)",
    width: 80,
    height: 46
  },
  containerbutton: {
    alignSelf: "center",
    flexDirection: 'row'
  },
});