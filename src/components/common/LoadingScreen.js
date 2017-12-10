import React  from 'react'
import {
		View,
 		Image,
		ActivityIndicator 
	   } from 'react-native'


const  LoadingScreen = () =>{
	const {
			upperContainerStyle			
		  } = styles
	
	return(
			<View style={upperContainerStyle}>
				<Image
				    style={{width: 100, height: 100}}
				    source={require('./../../../img/logo.png')} 
				/>
				<View style={styles.spinnerContainerStyle}>
			 		<ActivityIndicator  size='large'  />
			 	</View>
			</View>
	)
}


const styles ={
	upperContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff',
	},
	spinnerContainerStyle:{
		marginTop:30
	}
}


export {LoadingScreen}
				
