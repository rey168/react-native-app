import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, StyleSheet} from 'native-base';
import { connectStyle } from 'native-base';
class detallesClientes extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
      <Header>
      </Header>
        <Content>
          <Thumbnail square large style= {styles.imagenLogin} source={{uri: uri}} />
                <Label style={styles.textContentNom}>Nombre:</Label>
                <Label style={styles.textContentNom}>Rey</Label>
                <Label style={styles.textContentDesc}>Descripción:</Label>
                <Label style={styles.textContentDesc}>Lista prueba IOS.</Label>
                <Label style={styles.textContentPagina}>Pagina web personal:</Label>
                <Label style={styles.textContentPagina}>https:www.google.com.mx</Label>
              <Button block style={styles.Button} onPress={() => this.props.navigation.navigate('Notifications')}>
              <Text>Ubicasión del cliente</Text>
              </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
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
    color: 'black',
    top: "40%"
  },
};

export default connectStyle('yourTheme.detallesClientes', styles)(detallesClientes);
