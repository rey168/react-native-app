import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Title, Label,Thumbnail, StyleSheet} from 'native-base';
import { connectStyle } from 'native-base';
class login extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    const styles = this.props.style;
    return (
      <Container>
        <Header>
        <Title style={styles.textContent}>Login</Title>
        </Header>
        <Content>
        <Thumbnail large style= {styles.imagenLogin} source={{uri: uri}} />
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block style={styles.Button} onPress={() => this.props.navigation.navigate('Notifications')}>
            <Text>Entrar</Text>
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
  textContent: {
    fontSize: 20,
    color: 'black',
  },
};

export default connectStyle('yourTheme.login', styles)(login);
