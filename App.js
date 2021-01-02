import React from 'react';
import {Alert }from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { render } from 'react-dom';
import axios from "axios"

const API_KEY = "d181c1b6689d8d7edd175cbff840f908"

export default class extends React.Component{
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: { latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
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
