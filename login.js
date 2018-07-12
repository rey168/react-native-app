'use strict';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, NavigatorIOS} from 'native-base';
import { connectStyle } from 'native-base';
import listaUsuarios from './listaUsuarios';
import registro from './registro';
import registroClientes from './registroClientes';
import {
  StyleSheet
} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
        correo : 'rmiguel@cion.com.mx',
        contrase : '1234',
    }
  }
  _botoonRegistrar(){
    this.props.navigator.push({
        component : registro,
        title : 'Registro de Usuarios',
        leftButtonTitle: '',

    });
  }
  _botoonRegistrarCliente(){
    this.props.navigator.push({
        component : registroClientes,
        title : 'Registro Cliente',
        leftButtonTitle: '',
        /*passProps : {
            parametro : this.state.valortest
        }*/
    });
  }
  _listaClientes(){
    this.props.navigator.push({
        component : listaUsuarios,
        title : 'Lista de Clientes',
        rightButtonTitle: 'Agregar',
        onRightButtonPress: () => {
          this._botoonRegistrarCliente()
        },
    });
  }


  async _butoonLogin(){

    await fetch('http://localhost:3000/api/users/loginUsuario', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.correo,
        password: this.state.contrase
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if( responseJson.codigo == "0" ){
          this._listaClientes();
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

  render() {
    const uri = "https://www.apple.com/ios/images/og.png?201711081206";
    return (
      <Container>
        <Header>
        </Header>
        <Content>
        <Thumbnail large style= {styles.imagenLogin} source={{uri: uri}} />
          <Form>
            <Item floatingLabel>
              <Label>Correo</Label>
              <Input onChangeText={text => this.setState({ correo: text })} value ={this.state.correo} />
            </Item>
            <Item floatingLabel last>
              <Label>Contraseña</Label>
              <Input secureTextEntry={true} onChangeText={text => this.setState({ contrase: text })} value = {this.state.contrase} />
            </Item>
            <Button block style={styles.Button} onPress={ ()=> this._butoonLogin()  }>
            <Text>Login</Text>
            </Button>
            <Button info style={styles.textRegistrar} onPress={() => this._botoonRegistrar()}><Text> Registrar Usuario Nuevo </Text></Button>
            <Text style={styles.textRecuperar}>Recuperar Contraseña?</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  imagenLogin:{
    alignSelf: "center",
    top: 20,
  },
  Button: {
    top: 30
  },
  textContent: {
    fontSize: 20,
    color: 'black',
  },
  textRegistrar: {
    fontSize: 20,
    color: 'black',
    top: "70%",
    alignSelf: "center",
  },
  textRecuperar: {
    fontSize: 20,
    color: 'black',
    top: "110%",
    alignSelf: "center",
  },
});
