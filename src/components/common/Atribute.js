import React  from 'react'
import {
		View,
 		Image,
		Text 
	   } from 'react-native'
import { Divider  } from 'react-native-elements'


const  Atribute = ({atributeName,atributeValue,pieChart = false}) =>{
	const {
			areaContainer,
			nameLbl,
			valueLbl,
			color
		  } = styles
	
	getColor = () =>{

		switch(atributeValue)
		{
			
			case 'Little or None':
				return '#2aff00'
			case 'Low':
				return '#c6ff00'
			case 'Moderate':
				return '#ffc600'
			case 'High':
				return '#ff5b00'
			case 'Very High':
				return '#ff0000'
			default:
				return '#55ace0'
		}
	}

	renderValue =() =>{

		if(pieChart)
			return null
		else
		{
			return (
				<Text style={[valueLbl,{color: this.getColor()} ]}> {atributeValue}</Text>
			)
		}
	}
	alignSelf =() =>{

		if(pieChart)
			return 0
		else
			return 0.95

	}

	renderDivider =() =>{
		if(pieChart)
			return null
		else
			return (<Divider style={{ backgroundColor: 'grey' }} />)

	}
	
	return(	
			<View>
				<View style={areaContainer}>
								<Text style={[nameLbl,{flex: this.alignSelf()}]}> {atributeName}</Text>
								{this.renderValue()}
								
				</View>
				{this.renderDivider()}
			</View>
	)
}


const styles ={
	areaContainer:{
		marginTop: 8,
		marginBottom: 8,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	nameLbl:{
		fontSize: 18
	},
	valueLbl:{
		fontSize: 18
	}
}


export {Atribute}
				