import React, { Component } from 'react';
import { Container, Header, Content, Button, Body, Title, Right,Thumbnail, Text } from 'native-base';
import {StyleSheet} from 'react-native';

export default class ThumbnailExample extends Component {
  
  state = {
    number: 0
  }

  handleTasbih(){
    if(this.state.number < 100)
    {
      this.setState({
        number: this.state.number+1
      })
    } else {
      alert("Dzikir Sudah Mencapai 99 Kali. ")
      this.setState({
        number: 0
      })
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: "#dfe3ee"}}>
        <Header style={{backgroundColor: "#3b5998"}}>
          <Body style={styles.title}>
            <Title>Aplikasi Mobile Tasbih</Title>
          </Body>
        </Header>
        <Content >
        <Text style={styles.mobileText}>اَلْحَمْدُلِلّهِ</Text>
        <Text style={styles.increment}>{this.state.number}</Text>
        <Button style={styles.btnIncrement} block onPress={()=>this.handleTasbih()}>
            <Text>Dzikir</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title : {
    alignItems: "center"
  },
  mobileText: {
    textAlign: "center",
    fontSize: 60,
    marginTop: 100
  }, 
  increment: {
    fontSize: 100,
    textAlign: "center"
  },
  btnIncrement: {
    marginLeft: 100,
    marginBottom: 100,
    marginRight: 100,
    backgroundColor: "#3b5998"
  }
})
