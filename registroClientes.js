import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail} from 'native-base';
import camara from './camara';
import {
  StyleSheet,
  AsyncStorage
} from 'react-native';
export default class registro extends Component {

  constructor(props){
    super(props);

    this.state = {
        nombre : '',
        descripcion : '',
        paginaWeb: '',
    }
  }
  init(){
    this.setState({nombre: ''});
    this.setState({descripcion: ''});
    this.setState({paginaWeb: ''});
  }
  async _botoonRegistrarCliente(){
    //alert(this.state.nombre);
    await fetch('http://localhost:3000/api/users/agregarClientes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.nombre,
        descrip: this.state.descripcion,
        UrlWeb: this.state.paginaWeb

      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if( responseJson.codigo == "0" ){
          this.init();
          alert(JSON.stringify(responseJson.message));
      }
        else{
          alert(JSON.stringify(responseJson.message));

      }
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });

  }

  butoonCamara(){
    this.props.navigator.push({
        component : camara,
        title : 'Camara',
        leftButtonTitle: '',
        /*passProps : {
            name : row.name,
            descrip : row.descrip,
            url : row.UrlWeb
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
            <Form>
              <Item floatingLabel>
                <Label>Nombre</Label>
                <Input onChangeText={text => this.setState({ nombre: text })} value ={this.state.nombre}/>
              </Item>
              <Item floatingLabel last>
                <Label>Descripción</Label>
                <Input onChangeText={text => this.setState({ descripcion: text })} value ={this.state.descripcion}/>
              </Item>
              <Item floatingLabel last>
                <Label>Pagina web personal</Label>
                <Input onChangeText={text => this.setState({ paginaWeb: text })} value ={this.state.paginaWeb}/>
              </Item>
              <Button block style={styles.Button} onPress={() => this._botoonRegistrarCliente()}>
                <Text>Registrar</Text>
              </Button>
              <Button block style={styles.ButtonFoto} onPress={() => this.butoonCamara()}>
                <Text>Tomar foto</Text>
            </Button>
          </Form>
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
    top: 20
  },
  ButtonFoto: {
    top: 40
  },
  textContent: {
    fontSize: 20,
    color: 'black',
  },
});
