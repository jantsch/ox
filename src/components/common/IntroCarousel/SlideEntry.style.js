import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.65;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 10;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    imageContainer: {
        flex: 4,
        backgroundColor: 'transparent',
        justifyContent: 'center',       
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    image: {
        alignSelf: 'center' 

    },
    textContainer: {
        flex: 1,
        alignSelf: 'center', 
        justifyContent: 'center',  
        backgroundColor: 'transparent'
    },
    title: {
        color: colors.black,
         alignSelf: 'center', 
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 14,
        textAlign: 'center' ,
        fontStyle: 'italic'
    },
});