import React, {Component} from 'react'
import { SearchBar,List, ListItem  } from 'react-native-elements'
import { View,Text,ListView } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage,
		LoadingScreen
		} from './common'
import { fetchFood,searchFood,fetchItem } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'

class Search extends Component{	

	componentWillMount(){		
		// Used when you return to the component
		this.createDataSource(this.props)
	}
	componentWillReceiveProps(nextProps){
		
		this.createDataSource(nextProps)
	}


	createDataSource({foods,searched_food,search_input}){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !==r2
		})
		this.dataSource = ds.cloneWithRows(search_input.length == 0 ? foods : searched_food) // CORRECT TO PASS the SEARCHED_FOOD IF IT IS NOT NULL
	}	

	renderRow =  (rowData, sectionID,rowID) => {
	  return (
	    <ListItem
	      key={sectionID}
	      title={rowData.Name}
	      subtitle={rowData.Category}
	      rightTitleNumberOfLines={2}
	      rightTitle={rowData.Oxalate_Value +'\n' + parseFloat(rowData.ServingSizeNumber).toFixed(2) +' '+rowData.ServingType}
	      hideChevron	   
	      onPress={()=> this.props.fetchItem({id:parseInt(rowID)+1, name: rowData.Name, category: rowData.Category,
	       oxalates: rowData.Oxalate_Value, servingSize: rowData.ServingSizeNumber, servingType: rowData.ServingType, 
	       oxalateCategory: rowData.OxalateCategory}, this.props.daily_limit) }  
	    />
	  )
	}
	render(){
		const {loading,search_input} = this.props
		if (loading) {			 	
		    return (
		        <Spinner />
		    )
		 }
		 else{
			return(
				<View>
					<View style={{marginTop: 55}}>
						<SearchBar
						  lightTheme
						  value={search_input}
						  onChangeText={(value)=> this.props.searchFood(value,this.props.foods)}
						  onClearText={(value)=> this.props.searchFood(value,this.props.foods)}
						  placeholder='Search for food...' />
					</View>
					<List>
				      <ListView
				        renderRow={this.renderRow}
				        dataSource={this.dataSource}
				      />
				    </List>
				</View>
			)
		}
	}
}


const mapStateToProps = (state)=>{
  const  { search_input,foods,searched_food,loading,error } = state.food
  const  { oxalates_limit } = state.profile
  return {  search_input,
  			foods,
  			searched_food,
  			loading,
  			error,
  			daily_limit: oxalates_limit
		}
}


export default connect(mapStateToProps,{fetchFood,searchFood,fetchItem}) (Search)