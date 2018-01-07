'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { List, ListItem, Button } from 'react-native-elements'
import { connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { saveFilters } from './../actions'

class FiltersScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	categories: ["Whole Fruits", "Canned Fruits", "Dried Fruits", "Vegetables", "Potatoes", "Cream Products", "Ice Creams", "Yogurt Products", "Cheese Products", "Eggs", "Dairy Spreads", "Milk", "Breads", "Pastas, Rice & Grains", "Meat & Meat Alternatives", "Fish", "Nuts and Seeds", "Cakes, Candies, Cookies & Pudding Snacks", "Crackers, Chips & Miscellaneous", "Beverages", "Dairy Beverages", "Alcoholic Beverages", "Spreads, Sauces & Toppings", "Ingredients", "Fast Food Items or Meals", "Soups", "Breakfast Items", "Kellogg's", "Post Cereals", "General Mills", "Quaker", "Other Cereal Brands"],
	  	categoriesOxalates :["Very High", "High", "Moderate", "Low", "Little or None", "Very Low"],
	  	activeCategoriesOxalatesList: this.props.activeCategoriesOxalatesList,
	  	activeCategoriesList: this.props.activeCategoriesList
	  };
	  console.log(this.state);
	}

	_onPressHandle = (nameFilter) =>{
		Actions.FilterSelection({										
									categories: nameFilter == 'Categories' ? this.state.categories : this.state.categoriesOxalates,
									activeFilters: nameFilter == 'Categories' ? this.state.activeCategoriesList : this.state.activeCategoriesOxalatesList,
									onPress:  nameFilter == 'Categories' ?  this._onPressCategories  : this._onPressOxaCategories,
									title: nameFilter
								})
	}


	_onPressOxaCategories = (item,checked) =>{
		
		 if(checked)
		 {	
		 	this.setState({
				...this.state,
			  activeCategoriesOxalatesList: [...this.state.activeCategoriesOxalatesList, item]
			});
		 }
		 else
		 {
		 	this.setState({
				...this.state,
			  activeCategoriesOxalatesList: this.state.activeCategoriesOxalatesList.filter(item2=>{ return item2 != item})
			})

		 }
	}

	_onPressCategories = (item,checked) =>{
		
		 if(checked)
		 {	
		 	this.setState({
				...this.state,
			  activeCategoriesList: [...this.state.activeCategoriesList, item]
			});
		 }
		 else
		 {		 	
		 	this.setState({
				...this.state,
			  activeCategoriesList: this.state.activeCategoriesList.filter(item2=>{ return item2 != item})
			})

		 }
		  console.log(this.state);
	}
	_onSavePressed= () =>{
		this.props.saveFilters(this.state.activeCategoriesList, this.state.activeCategoriesOxalatesList)

	}


  render() {
    return (
    <View style={styles.container}  >  	
		<List>	 
			<ListItem
		        key={0}
		        title={'Categories'}		       
		        onPress={()=> 	this._onPressHandle('Categories')}
		      />
			<ListItem
		        key={1}
		        title={'Oxalates Categories'}		       
		        onPress={()=> 	this._onPressHandle('Oxalates Categories')}
		      />
		  
		  
		</List>
		<View style={styles.btnContainer}>
			<Button		
			  raised
			  onPress={() => this._onSavePressed()}
			  icon={{name: 'cached'}}
			  title='Save Filters' />
		 </View>
	</View>
    );
  }
}

const styles ={
container:{
	marginTop: 32
},
btnContainer:{
	marginTop:10
}
};

const mapStateToProps =(state) => {
	const {
		activeCategoriesList,
		activeCategoriesOxalatesList
	} = state.filter
	return {
		activeCategoriesList,
		activeCategoriesOxalatesList
	}
}


export default connect(mapStateToProps,{saveFilters})(FiltersScreen);