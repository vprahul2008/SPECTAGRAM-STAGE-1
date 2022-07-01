import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/feed'
import CreatePost from '../screens/createPost'

const Tab = createBottomTabNavigator()

const BottomTabNavigator =()=> {
  return (

  <Tab.Navigator 
  screenOptions= {({route})=>({
    tabBarIcon:({focused,color,size})=>{
      let iconName ;
      if(route.name==="feed"){
        iconName = focused ?'book':'book-outline'
      }
      else if (route.name === "createPost"){
        iconName = focused ? 'create':'create-outline'
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    }
  })}
 tabBarOptions = {{activeTintColor :'red', inactiveTintColor:'grey'}}
  >
  <Tab.Screen name="feed" component ={Feed} />
  <Tab.Screen name="createPost" component ={CreatePost}/>
  </Tab.Navigator>
  );
}

export default BottomTabNavigator


    
