import React  from 'react'
import {
		View,
		Text
	   } from 'react-native'


const  ModalItem = ({title, onCancel,onSave,children}) =>{
	const {
			modalContainer,
			bottomContainer,
			buttonStyle,
			titleStyle,
			contentStyle		
		  } = styles
	
	return(
			<View style={modalContainer}>
				<Text style={titleStyle} >{title}</Text>				
				<View style={contentStyle}>
					{children}
			    </View>
			    <View style={bottomContainer}>
			       	<Text onPress={() => onCancel()} style={buttonStyle}>Cancel</Text>
			       	<Text onPress={() => onSave()} style={buttonStyle}>Save</Text>
			    </View>
			</View>
	)
}


const styles ={
	modalContainer:{
		backgroundColor: 'white',
		width: 250,
		height: 200,
		alignSelf: 'center',		
	},
	bottomContainer:{		
		 flexDirection: 'row',
		 justifyContent: 'flex-end',
		 marginBottom: 10
	},
	buttonStyle: {
		 color: '#55ace0',
		 marginRight: 15,
		 fontSize: 17
	},
	titleStyle:{
		fontSize: 20,
		marginLeft: 20,
		marginTop: 10,
		color: 'black'
	},
	contentStyle:{
		marginLeft: 20,
		marginTop: 30,
		flex: 1,

		flexDirection: 'column',

	}

}


export {ModalItem}
				
