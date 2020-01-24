import 'react-native-gesture-handler';
import React from 'react';
import { Home } from "./app/views/home";
import { Contact } from './app/views/contact';
import { Video } from './app/views/video'
import { Register } from "./app/views/register"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MyRoutes = createStackNavigator(
{
  HomeRT:{
    screen: Home,
    navigationOptions: () =>({
      headerShow: false
    }),
    navigationOptions: ({ navigation }) => ({
      headerShow: false
    }),
  },
  ContactRT: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      headerShow: false
    }),
  },
  LessonsRT:{
    screen: Video,
    navigationOptions: ({ navigation }) => ({
      headerShow: false
    }),
  },
  RegisterRT:{
    screen: Register
  }
},
  {
    initialRouteName: 'HomeRT',
    navigationOptions: ({ navigation }) => ({
      headerShow: false
    }),
  }
);

const MainRoutes = createAppContainer(MyRoutes)

class App extends React.Component{
  render(){
    return (
      <MainRoutes />
    );
  }
}

export default App

