import React, {Component} from 'react'
import {
		View,
 		Image,
		Text ,
		TouchableOpacity,
		ListView,
		TouchableHighlight
	   } from 'react-native'
import { Divider  } from 'react-native-elements'
import { SwipeList } from './../SwipeList';



class  DiaryDetail extends Component{



	_calculateOxalates =(FoodList) =>{	

		if(FoodList.length ==0)
			return 0
		else
		{
			if(FoodList.length ==1)
				return FoodList[0].oxalatesCart.slice(0, -2)
			else{
				var bugg = FoodList.map((item)=> ({...item, oxalatesCart: parseInt(item.oxalatesCart.slice(0, -2)) }))
				var oxalates = bugg.reduce((a, b) => { 
					
					return {oxalatesCart: a.oxalatesCart +b.oxalatesCart }
				});
			return oxalates.oxalatesCart
			}
		}
	}

	
	render(){
		const {
			areaContainer,
			titleContainerStyle,
			titleStyle,
			iconStyle,
			nameLbl,
			valueLbl,
			color,
			oxalatesBoxStyle,
			addContainerStyle
		  } = styles

	const {Meal,FoodList,onAddPressButton,onDeleteItemDiary,onEditItemDiary} = this.props
	
	return(	
			<View style={areaContainer}>
				<View style={titleContainerStyle}>
					<Text style={titleStyle}> {Meal}</Text>
					<Text style={oxalatesBoxStyle}> {this._calculateOxalates(this.props.FoodList)} mg</Text>
				</View>
				<SwipeList FoodList={FoodList} onEdit={onEditItemDiary} onDelete={onDeleteItemDiary} />
				<TouchableOpacity onPress={() => {onAddPressButton(Meal)}}>
					<View style={addContainerStyle}>
						<Image	style={iconStyle} source={require('./../../../../img/add.png')}/>
						<Text style={titleStyle}> Add Food</Text>
					</View>
				</TouchableOpacity>
			</View>
	)
}
}


const styles ={
	areaContainer:{		
		backgroundColor: 'white',		
   		borderColor: 'grey',
   		marginBottom: 5,
   		borderTopWidth: 1 ,
   		borderBottomWidth: 1 ,
	},
	titleContainerStyle:{
		flexDirection: 'row',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 10,
		borderColor: 'grey',
	},
	addContainerStyle:{
		borderTopWidth: 1 ,
		borderColor: 'grey',
		flexDirection: 'row',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 10,
	},
	itemContainer:{
		flexDirection: 'row',
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderTopWidth: 1,
		borderColor: 'grey',
	},
	titleStyle:{
		color: 'black',
		flex: 4
	},
	itemName:{
		flex: 4
	},
	iconStyle:{
		width: 15,
    	height: 15
	},
	nameLbl:{
		fontSize: 18
	},
	valueLbl:{
		fontSize: 18
	},
	oxalatesBoxStyle:{
		flex: 1
	},
	backTextWhite: {
		color: '#FFF'
	},
	rowFront: {
		flexDirection: 'row',
		backgroundColor: 'white',
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderTopWidth: 1,
		borderColor: 'grey',
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	}
}


export {DiaryDetail}
	
				