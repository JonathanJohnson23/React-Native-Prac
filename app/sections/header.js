import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  };
  
  toggleUser = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render(){

    let display = this.state.isLoggedIn ? "sample User" : this.props.message;

    return(
      <View style={styles.headStyle}>
        {/* <Image source={ require("./img/download.jpg")} /> */}
        <Text style={styles.headText } onPress={this.toggleUser}>{display}</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "rgb(100,0,100)",
    fontSize: 35,
    flex: 1
  },
  headStyle: {
    padding: 30,
    paddingLeft: 0,
    backgroundColor: '#35605a',
    borderBottomWidth: 2,
    borderColor: '#000000',
    flex: 1 ,
    flexDirection: 'row'
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height: undefined,
  }
});