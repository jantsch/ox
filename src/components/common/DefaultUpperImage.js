
import React  from 'react'
import {
		View,
 		Image,
		Text 
	   } from 'react-native'


const  DeafultUpperImage = () =>{
	const {
			upperContainerStyle,
			textStyle
		  } = styles
	
	return(
			<View style={upperContainerStyle}>
				<Image
				    style={{width: 75, height: 75}}
				    source={require('./../../../img/logo.png')} 
				/>
			 	<Text style={textStyle}>OxalatesApp</Text>
			</View>
	)
}


const styles ={
	upperContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
	},
	textStyle:{
		color: 'black',
		fontSize: 35,
		paddingTop: 10,
		fontWeight: 'bold'
	}	
}


export {DeafultUpperImage}
				