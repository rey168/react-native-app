import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import detallesClientes from './detallesClientes';
export default class listaUsuarios extends Component {

  _butoonDetalles(){
    this.props.navigator.push({
        component : detallesClientes,
        title : 'Detalles',
        leftButtonTitle: '',
        /*passProps : {
            parametro : this.state.valortest
        }*/
    });
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: uri}}  />
              </Left>
              <Body>
                <Text>Rey</Text>
                <Text note numberOfLines={1}>Lista de prueba IOS . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text onPress={() => this._butoonDetalles()}>Detalles</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
