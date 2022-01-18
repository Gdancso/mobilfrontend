import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, Button } from 'react-native';


const ipcim="172.16.0.13";
export default class FetchExample extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  rendezes_pont=()=>{
    alert("hello")
    return fetch('http://'+ipcim+':3000/rend_pont')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_halal=()=>{
    alert("hello")
    return fetch('http://'+ipcim+':3000/rend_halal')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_ido=()=>{
    alert("hello")
    return fetch('http://'+ipcim+':3000/rend_ido')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      alert(JSON.stringify(this.state.dataSource))
      //split

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  rendezes_date=()=>{
    alert("hello")
    return fetch('http://'+ipcim+':3000/rend_date')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      alert(JSON.stringify(this.state.dataSource))
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

  fetch('http://'+ipcim+':3000/statisztika', {
      method: "POST",
      body: JSON.stringify,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch('http://'+ipcim+':3000/statisztika')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        alert(JSON.stringify(this.state.dataSource))
        //split
        //let T = this.state.dataSource
        /*for (let index = 0; index < T.length; index++) {
          var element = T[index];
          split_element = element.split("T", -2);
          //element.split("T", -2);
          
        }*/
        array.forEach(element => {
          
        });

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
      <View style={{flex: 1, paddingTop:20}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}} >
              <Button onPress={() => this.rendezes_pont()} title="Rendezés pont" />
              <Button onPress={() => this.rendezes_halal()} title="Rendezés halal" />
              <Button onPress={() => this.rendezes_ido()} title="Rendezés ido" />
              <Button onPress={() => this.rendezes_date()} title="Rendezés date" />
            </View>

          </View>


        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          
          <View style={{flex: 1, flexDirection: 'row'}}>
             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
              <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.statisztika_nev}</Text>
            </View>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
              <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.statisztika_pont}</Text>
            </View>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.statisztika_halal}</Text>
            </View>
            <View style={{width: 50, height: 50, backgroundColor: 'blue'}} >
              <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.statisztika_ido}</Text>
            </View>
            <View style={{width: 230, height: 50, backgroundColor: 'steelblue'}} >
              <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.statisztika_date.split ("T")[0].trim()}</Text>
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
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});