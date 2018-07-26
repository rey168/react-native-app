import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail} from 'native-base';
import {
  StyleSheet,
  AsyncStorage,
  WebView
} from 'react-native';
export default class webView extends Component {

  constructor(props){
    super(props);

    this.state = {
        nombre : '',
        descripcion : '',
        paginaWeb: '',
    }
  }
  /*componentDidMount(){
        console.log('props', this.props);
    }*/

  render() {
    return (
      <WebView
        source={{uri: this.props.webView}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})
