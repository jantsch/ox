import React  from 'react'
import {
		View,
 		Image,
		Text 
	   } from 'react-native'
import { Divider  } from 'react-native-elements'



const  DayTable= ({DailyLimitOxalates,FoodList}) =>{
	const {
			areaContainer,
			titleContainerStyle,
			titleStyle,
			numberStyle
		  } = styles

	_calculateOxalates =() =>{	
		
		if(FoodList.length ==0)
			return 0
		else{
				var bugg = FoodList.map((item)=> ({...item, oxalatesCart: parseInt(item.oxalatesCart.slice(0, -2)) }))
				var oxalates = bugg.reduce((a, b) => { 
					
					return {oxalatesCart: a.oxalatesCart +b.oxalatesCart }
				});
			

			return oxalates.oxalatesCart 
		}

	}

	return(	
			<View style={areaContainer}>
				<View style={titleContainerStyle}>
					<Text style={numberStyle}> {DailyLimitOxalates} mg</Text>
					<Text style={titleStyle}> Daily Limit</Text>
				</View>
				<View style={titleContainerStyle}>
					<Text style={numberStyle}> - </Text>
				</View>
				<View style={titleContainerStyle}>
					<Text style={numberStyle}> {_calculateOxalates()} mg</Text>
					<Text style={titleStyle}> Daily Consumption</Text>
				</View>
				<View style={titleContainerStyle}>
					<Text style={numberStyle}> =</Text>
				</View>
		
				<View style={titleContainerStyle}>
					<Text style={numberStyle}> {DailyLimitOxalates- _calculateOxalates()} mg</Text>
					<Text style={titleStyle}> Total</Text>
				</View>
			</View>
	)
}


const styles ={
	areaContainer:{
		backgroundColor: 'white',		
		borderTopWidth: 1 ,
		borderBottomWidth: 1 ,
   		borderColor: 'grey',
   		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 5,
		marginBottom: 5
	},
	titleContainerStyle:{
		flexDirection: 'column',
		paddingTop: 15,
		paddingBottom: 15



	}
	,
	titleStyle:{
		color: 'black'
	},
	numberStyle:{
		color: 'grey'
	}
}


export {DayTable}
	
				