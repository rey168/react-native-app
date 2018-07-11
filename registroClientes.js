import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, StyleSheet} from 'native-base';
import { connectStyle } from 'native-base';
class registro extends Component {
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
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Descripción</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Pagina web personal</Label>
                <Input />
              </Item>
              <Button block style={styles.Button} onPress={() => this.props.navigation.navigate('Notifications')}>
              <Text>Registrar</Text>
              </Button>
              <Button block style={styles.ButtonFoto} onPress={() => this.props.navigation.navigate('Notifications')}>
              <Text>Tomar foto</Text>
            </Button>
          </Form>
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
    top: 20
  },
  ButtonFoto: {
    top: 40
  },
  textContent: {
    fontSize: 20,
    color: 'black',
  },
};

export default connectStyle('yourTheme.registro', styles)(registro);
