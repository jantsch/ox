import React  from 'react'
import {
		View,
 		Image,
		Text,
		ScrollView 
	   } from 'react-native'
import { Divider  } from 'react-native-elements'
import { DiaryDetail, DayTable  } from './Diary'



const  DiaryDetails = ({dayLimit,consumedItems,date,onAddPressed,onDeleteItemDiary,onEditItemDiary}) =>{
	const {
			areaContainer,
			nameLbl,
			valueLbl,
			color
	 } = styles

	buildFoodList = (meal) =>{
		switch(meal)
		{ //[{name: 'lunche', oxalatesCart: 10}]
			case 'Breakfast':				
				return consumedItems.filter(item => item.meal == 'Breakfast')
			case 'Lunch':
				return consumedItems.filter(item => item.meal == 'Lunch')
			case 'Dinner':
				return consumedItems.filter(item => item.meal == 'Dinner')
			case 'Snacks':
				return consumedItems.filter(item => item.meal == 'Snacks')
			default:
				return consumedItems 

		}
	}

	onAddPressButton =(meal) =>{
		onAddPressed(meal,date)		
	}
		  
	
	return(	
				<ScrollView>
					<View style={areaContainer}>
						<DayTable  DailyLimitOxalates={dayLimit} FoodList={this.buildFoodList()} />
						<DiaryDetail Meal={'Breakfast'} onEditItemDiary ={onEditItemDiary}  onDeleteItemDiary={onDeleteItemDiary}  onAddPressButton={this.onAddPressButton} FoodList={this.buildFoodList('Breakfast')} />
						<DiaryDetail Meal={'Lunch'}     onEditItemDiary ={onEditItemDiary}  onDeleteItemDiary={onDeleteItemDiary} onAddPressButton={this.onAddPressButton}  FoodList={this.buildFoodList('Lunch')}  />
						<DiaryDetail Meal={'Dinner'}    onEditItemDiary ={onEditItemDiary}  onDeleteItemDiary={onDeleteItemDiary}  onAddPressButton={this.onAddPressButton} FoodList={this.buildFoodList('Dinner')} />	
						<DiaryDetail Meal={'Snacks'}    onEditItemDiary ={onEditItemDiary}  onDeleteItemDiary={onDeleteItemDiary} onAddPressButton={this.onAddPressButton} FoodList={this.buildFoodList('Snacks')} />					
					</View>
				 </ScrollView>
	)
}


const styles ={
	areaContainer:{
		backgroundColor: '#d3d3d3',
		flex: 1, flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: 65
	},
	nameLbl:{
		fontSize: 18
	},
	valueLbl:{
		fontSize: 18
	}
}


export {DiaryDetails}