import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, NavigatorIOS} from 'native-base';
import webView from './webView';
import maps from './maps';
import {
  StyleSheet,
  AsyncStorage,
  WebView
} from 'react-native';
export default class detallesClientes extends Component {

  constructor(props){
    super(props);

    this.state = {
        nombre : '',
        descripcion : '',
        paginaWeb: this.props.url,
    }
  }
  /*componentDidMount(){
        console.log('props', this.props);
    }*/

  urlWeb(){
    this.props.navigator.push({
        component : webView,
        title : 'Pagina web Cliente',
        leftButtonTitle: '',
        passProps : {
            webView : this.state.paginaWeb
        }
    });
  }

  maps(){
    this.props.navigator.push({
        component : maps,
        title : 'Ubicasión del Cliente',
        leftButtonTitle: '',
        /*passProps : {
            webView : this.state.paginaWeb
        }*/
    });
  }

  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
      <Header>
      </Header>
        <Content>
          <Thumbnail square large style= {styles.imagenLogin} source={{uri: uri}} />
                <Label style={styles.textContentNom}>Nombre:</Label>
                <Label style={styles.textContentNom}>{this.props.name}</Label>
                <Label style={styles.textContentDesc}>Descripción:</Label>
                <Label style={styles.textContentDesc}>{this.props.descrip}</Label>
                <Label style={styles.textContentPagina}>Pagina web personal:</Label>
                <Label style={styles.textContentPagina} onPress={() => this.urlWeb()}>{this.props.url}</Label>
              <Button block style={styles.Button} onPress={() => this.maps()}>
              <Text>Ubicasión del cliente</Text>
              </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imagenLogin:{
    left: "40%",
    top: 20,
  },
  Button: {
    top: "40%"
  },
  textContentNom: {
    fontSize: 20,
    color: 'black',
    top: "20%"
  },
  textContentDesc: {
    fontSize: 20,
    color: 'black',
    top: "30%"
  },
  textContentPagina: {
    fontSize: 20,
    color: 'blue',
    top: "40%"
  },
});
