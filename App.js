import React from 'react';
import {Alert }from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { render } from 'react-dom';

export default class extends React.Component{
  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: { latitude, longitude}} = await Location.getCurrentPositionAsync();
      // send to API
      this.setState({ isLoading: False})

  } catch(error){
      Alert.alert("찾을 수 없네요ㅜㅜ");
  }
  
    
  };
  componentDidMount(){
    this.getLocation();
  }
render(){
  const { isLoading } = this.state;
  return isLoading? <Loading /> : null;
}
}
