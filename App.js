import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Header from './weather/Header';
import Footer from './weather/Footer';
import WeatherChannel from './weather/WeatherChannel';



const conditionData ={
  city:'Taipei',
  temp:'19 C',
  weather:'clear',
}


export default  class App extends React.Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        
        <WeatherChannel />

        <Footer />
        
      </div>
    );
  }
}


