import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SlideEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, itemIndex } = this.props;

        switch(itemIndex%4)
        {
          case 0:
             var icon = require('./../../../../img/logo.png')
             break
          case 1:
             var icon = require('./../../../../img/salad-intro.png')
             break
          case 2:
             var icon = require('./../../../../img/calendar-intro.png')
             break
          case 3:
             var icon = require('./../../../../img/search-intro.png')
             break
        }        
        return  (
            <Image
              source={icon}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle },itemIndex } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={styles.title}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <View
              style={styles.slideInnerContainer}
              >
                <View style={styles.imageContainer}>
                    { this.image}                   
                </View>
                <View style={styles.textContainer}>
                    { uppercaseTitle }
                    <Text
                      style={styles.subtitle }
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                </View>
            </View>
        );
    }
}