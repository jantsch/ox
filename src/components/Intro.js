import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './common/IntroCarousel/SlideEntry.style';
import SliderEntry from './common/IntroCarousel/SliderEntry';
import styles, { colors } from './common/IntroCarousel/index.style';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

const SLIDER_DATA = [
    {
        title: 'WELCOME TO OXALATE TRACKER!',       
    },
    {
        title: 'START BY TRACKING',
        subtitle: 'Track your daily oxalate intake for each meal',
    },
    {
        title: 'LEAD A HEALTHY LIFE',
        subtitle: 'Keep a history for your long-term goals',
    },
    {
        title: 'RESOURCE IN YOUR POCKET',
        subtitle: 'Easily search & filter foods by category & oxalate content when shopping or at a restaurant',
    }
]



class Intro extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0,
            slider1Ref: null
        };
    }

 

    _renderItemWithParallax ({item, index}) {

        return (
            <SliderEntry
              data={item}
              itemIndex={index}            
            />
        );
    }    

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    render () {
        const { slider1ActiveSlide, slider1Ref } = this.state;
        return (

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <View style={styles.viewContainer}>
                    
                          <View style={styles.exampleContainer}>
                              <Carousel
                              ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                              data={SLIDER_DATA}
                              renderItem={this._renderItemWithParallax}
                              sliderWidth={sliderWidth}
                              itemWidth={itemWidth}
                              firstItem={0}
                              inactiveSlideScale={0.94}
                              inactiveSlideOpacity={0.7}                              
                              containerCustomStyle={styles.slider}
                              contentContainerCustomStyle={styles.sliderContentContainer}
                              loop={true}
                              loopClonesPerSide={4}
                              autoplay={false}
                              autoplayDelay={500}
                              autoplayInterval={3000}
                              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                            />
                            <Pagination
                              dotsLength={SLIDER_DATA.length}
                              activeDotIndex={slider1ActiveSlide}
                              containerStyle={styles.paginationContainer}
                              dotColor={'rgba(255, 255, 255, 0.92)'}
                              dotStyle={styles.paginationDot}
                              inactiveDotColor={colors.black}
                              inactiveDotOpacity={0.4}
                              inactiveDotScale={0.6}
                              carouselRef={slider1Ref}
                              tappableDots={!!slider1Ref}
                            />
                        </View>                       
                     
                      <View style={styles.btnContainer}>
                        <Button
                           title='Sign Up' 
                           backgroundColor='white'
                           color='black'
                           onPress={()=> Actions.SocialLogin()}
                        />
                        </View>
                    </View>
                </View>              
            </SafeAreaView>
        );
    }
}



export default Intro
