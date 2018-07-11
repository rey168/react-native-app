import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, StyleSheet, NavigatorIOS} from 'native-base';
import { connectStyle } from 'native-base';
import listaUsuarios from './listaUsuarios';
import registro from './registro';
import registroClientes from './registroClientes';

class login extends Component {
  constructor(props){
        super(props);

        this.state = {
            valortest : 'valor',
            texto : '',
        }
    }
    _botoonRegistrar(){
        this.props.navigator.push({
            component : registro,
            title : 'Registro de Usuarios',
            leftButtonTitle: '',
            /*passProps : {
                parametro : this.state.valortest
            }*/
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
    _butoonLogin(){
        this.props.navigator.push({
            component : listaUsuarios,
            title : 'Lista de Usuarios',
            rightButtonTitle: 'Agregar',
            onRightButtonPress: () => {
              this._botoonRegistrarCliente()
            },
            /*passProps : {
                parametro : this.state.valortest
            }*/
        });
    }

  render() {
    const uri = "https://www.apple.com/ios/images/og.png?201711081206";
    const styles = this.props.style;
    return (
      <Container>
        <Header>
        </Header>
        <Content>
        <Thumbnail large style= {styles.imagenLogin} source={{uri: uri}} />
          <Form>
            <Item floatingLabel>
              <Label>Correo</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Contraseña</Label>
              <Input />
            </Item>
            <Button block style={styles.Button} onPress={() => this._butoonLogin()}>
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
const styles = {
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
};

export default connectStyle('yourTheme.login', styles)(login);
