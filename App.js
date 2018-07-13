import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  AsyncStorage
} from 'react-native';
import login from './login';
import listaUsuarios from './listaUsuarios';



export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        valido: false
    }
  }
   componentWillMount (){
        const value =  AsyncStorage.getItem('persistence')
        if (value == "true") {
          // We have data!!
          this.setState({valido:true})
          console.log('bien');
          //this._listaClientes()

        }else{
          this.setState({valido:false})
          console.log('mal');

        }
    }

  render() {
    return (
      <NavigatorIOS
        style={{
          flex : 1
        }}
        initialRoute={{
          component : (this.state.valido) ? listaUsuarios : login,
          title : 'App Rey Login',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
