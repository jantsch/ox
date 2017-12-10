import React, { Component } from 'react';
import { Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux'

class Intro extends Component {
  doneBtnHandle = () => {
    Actions.SocialLogin()
  }
  nextBtnHandle = (index) => {
    console.log(index);
  }

  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 70 * 2.5,
        width: 95 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: require('../../img/logo.png'),
     // imgStyle: {
      //  height: 93 * 2.5,
     //   width: 103 * 2.5,
    //  },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro       
        onDoneBtnClick={this.doneBtnHandle} 
        onSkipBtnClick={this.nextBtnHandle}       
        pageArray={pageArray}
      />
    );
  }
}


export default Intro