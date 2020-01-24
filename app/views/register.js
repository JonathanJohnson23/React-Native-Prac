import React from 'react'
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage } from 'react-native';


export class Register extends React.Component {
  // static navigationOptions = {
  //   header: null
  // }

  constructor(props){
    super(props)
    this.state = {
      username: 'j',
      password: '',
      passwordConfirm: ''
    };
  };

  cancelRegister = () => {
    Alert.alert('Registration Cancelled');
    this.props.navigation.navigate('HomeRT')
  };

  registerAccount = () => {
    if( !this.state.username ){
      Alert.alert('PLEASE ENTER A USERNAME')
    } else if ( this.state.password !== this.state.passwordConfirm ){
      Alert.alert('PASSWORDS DO NOT MATCH')
    } else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if(result !== null){
          Alert.alert(`${this.state.username} ALREADY EXISTS`)
        }else {
          AsyncStorage.setItem(this.state.username,this.state.password, (err, result) => {
            Alert.alert(`${this.state.username} account created`)
            this.props.navigation.navigate('HomeRT');
          })
        }
      })
    }
  };


  render(){
    return(
      <View>
        <Text style={styles.heading} > REGISTER ACCOUNT</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <Text style={styles.label} > ENTER USERNAME </Text>

        <TextInput 
        style={styles.input} 
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.password}
        secureTextEntry={true}
        />
        <Text style={styles.labek} > ENTER PASSWORD</Text>
        <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981' >
          <Text style={styles.buttons} >
            REGISTER
          </Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981' >
          <Text style={styles.buttons} >
            NOPE OUT
          </Text>
        </TouchableHighlight>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%'
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  input:{
    flex:1,
    width: '80%',
    padding: 10,
  },
  buttons:{
    marginTop: 15,
    fontSize: 16
  },
  label:{
    paddingBottom: 10,
  }

})