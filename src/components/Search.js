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

	isFloat = (n) =>  {
   		return n % 1 !== 0;
	}	
	
	renderRow =  (rowData, sectionID,rowID) => {
	  return (
	    <ListItem
	      key={sectionID}
	      title={rowData.Name}
	      subtitle={rowData.Category}
	      rightTitleNumberOfLines={2}
	      rightTitleStyle={{ justifyContent: 'flex-end'}}
	      rightTitle={rowData.Oxalate_Value +'\n' + (this.isFloat(rowData.ServingSizeNumber)?  parseFloat(rowData.ServingSizeNumber).toFixed(2) : rowData.ServingSizeNumber) +' '+rowData.ServingType}
	      hideChevron	   
	      onPress={()=> this.props.fetchItem({id:parseInt(rowID)+1, name: rowData.Name, category: rowData.Category,
	       oxalates: rowData.Oxalate_Value, servingSize: rowData.ServingSizeNumber,servingSize2: rowData.ServingSizeNumber2, servingType: rowData.ServingType,servingType2: rowData.ServingType2, 
	       oxalateCategory: rowData.OxalateCategory}, this.props.daily_limit) }  
	    />
	  )
	}
	renderList =() => {
		if(this.props.search_input.length>0 &&  this.props.searched_food.length==0){
						return(
							<View style={styles.messageContainerStyle}>
								<Text  style={styles.messageStyle}> It is impossible to find the desired item. :/ </Text>
							</View>
					)
		}
		else
		{
			return (
				<List>
				      <ListView
				      style={{height: 442}}
				        renderRow={this.renderRow}
				        dataSource={this.dataSource}
				      />
				    </List>
				)

		}

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
					<View style={{marginTop: 55,height: 38}}>
						<SearchBar						
						  lightTheme
						  value={search_input}
						  showLoadingIcon={loading}
						  onChangeText={(value)=> this.props.searchFood(value,this.props.foods,this.props.filters)}
						  onClearText={(value)=> this.props.searchFood(value,this.props.foods,this.props.filters)}
						  placeholder='Search for food...' />
					</View>
					{
						this.renderList()
					}					
				</View>
			)
		}
	}
}

const styles = {
	messageContainerStyle:{	
		marginTop: 35,
	},
	messageStyle:{
		fontSize: 20,	
		alignSelf: 'center',
		width:250,
		textAlign: 'center'
		
	}
}


const mapStateToProps = (state)=>{
  const  { search_input,foods,searched_food,loading,error } = state.food
  const  { oxalates_limit } = state.profile
  const  { activeCategoriesList,activeCategoriesOxalatesList } = state.filter
  return {  search_input,
  			foods,
  			searched_food,
  			loading,
  			error,
  			daily_limit: oxalates_limit,
  			filters: {activeCategoriesOxalatesList,activeCategoriesList}
  			
		}
}


export default connect(mapStateToProps,{fetchFood,searchFood,fetchItem}) (Search)