import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail} from 'native-base';
import { connectStyle } from 'native-base';
import login from './login';
import {
  StyleSheet
} from 'react-native';

export default class registro extends Component {
  constructor(props){
    super(props);

    this.state = {
        nombre : '',
        contrase : '',
        edad : '',
        correo : '',
    }
  }

  init(){
    this.setState({nombre: ''});
    this.setState({contrase: ''});
    this.setState({edad: ''});
    this.setState({correo: ''});

  }

  login(){
    this.props.navigator.push({
        component : login,
        title : 'App Rey Login',
    });
  }

  async _butoonRegistrar(){

    await fetch('http://localhost:3000/api/users/agregarUsuarios', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.nombre,
        age: this.state.edad,
        email: this.state.correo,
        password: this.state.contrase

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

  render() {
    const uri = "https://www.apple.com/ios/images/og.png?201711081206";
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
                <Label>Constraseña</Label>
                <Input onChangeText={text => this.setState({ contrase: text })} value ={this.state.contrase}/>
              </Item>
              <Item floatingLabel last>
                <Label>Edad</Label>
                <Input onChangeText={text => this.setState({ edad: text })} value ={this.state.edad}/>
              </Item>
              <Item floatingLabel last>
                <Label>Correo</Label>
                <Input onChangeText={text => this.setState({ correo: text })} value ={this.state.correo}/>
              </Item>
              <Button block style={styles.Button} onPress={ ()=> this._butoonRegistrar()}>
              <Text>Registrar</Text>
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
