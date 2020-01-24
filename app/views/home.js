import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/header';
import { Hero } from '../sections/hero';
import { Menu } from '../sections/menu';


export class Home extends React.Component{
  static navigationOptions = {
      headerShow: false
  }
  
  render(){
    // debugger
    const  {navigate}  = this.props.navigation;
    return(
      <View style={styles.container} >
        <Header message="Press to Login" />
        <Hero />
        <Menu navigate={navigate}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})