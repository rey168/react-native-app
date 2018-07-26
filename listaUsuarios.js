import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, NavigatorIOS, List, ListItem, Left, Right, Body} from 'native-base';
import detallesClientes from './detallesClientes';
import PTRView from 'react-native-pull-to-refresh';
import {
  StyleSheet,
  AsyncStorage
} from 'react-native';
export default class listaUsuarios extends Component {

  constructor(props){
    super(props);

    this.state = {
        lista : [

        ]
    }
  }

  componentDidMount(){

    fetch('http://localhost:3000/api/users/listaClientes', {
     method: 'GET',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     }
   })
   .then((response) => response.json())
   .then((responseJson) => {
     if( responseJson.codigo == "0" ){
         //alert(JSON.stringify(responseJson);
         this.setState({
          lista: responseJson.lista
        });
         console.log(responseJson);
     }
       else{
         //alert(JSON.stringify(responseJson);
     }
   })
   .catch((error) => {
     console.error(error);
     alert(error);
   });
  }

  _butoonDetalles(row){
    this.props.navigator.push({
        component : detallesClientes,
        title : 'Detalles',
        leftButtonTitle: '',
        passProps : {
            name : row.name,
            descrip : row.descrip,
            url : row.UrlWeb
        }
    });
    console.log('Lista usuarios' + ' ' + row.descrip);
  }

  _refresh() {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()
        alert(`adasd`);
      }, 2000)

    });
  }

  render() {
    /*var items = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Emre Can'
    ];*/
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      //<PTRView onRefresh={this._refresh} >
        <Container>
          <Header />
          <Content>
            <List dataArray={this.state.lista}
              renderRow={(row) =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail  source={{uri: uri}}  />
                </Left>
                <Body>
                  <Text>{row.name}</Text>
                  <Text note numberOfLines={1}>{row.descrip}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text onPress={() => this._butoonDetalles(row)} key={row.id}>Detalles</Text>
                  </Button>
                </Right>
              </ListItem>
              }>
            </List>
          </Content>
        </Container>
      //</PTRView>
    );
  }
}
