import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Agregar Usuario</Text>
          <Thumbnail square large source={{uri: uri}} />
        </Content>
      </Container>
    );
  }
}
