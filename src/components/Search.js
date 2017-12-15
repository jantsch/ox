import React, {Component} from 'react'
import { SearchBar,List, ListItem  } from 'react-native-elements'
import { View,Text,ListView } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage
		} from './common'
import { loginWithProvider } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'

const list = [
  {
    name: 'Example food 1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Type'
  },
  {
    name: 'Example food 2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Type'
  }
]

class Search extends Component{	
	 constructor() {
	    super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(list),
	    };
	  }

	renderRow (rowData, sectionID) {
	  return (
	    <ListItem
	      key={sectionID}
	      title={rowData.name}
	      subtitle={rowData.subtitle}
	      rightTitleNumberOfLines={2}
	      rightTitle={'52mg \np/slice '}
	      hideChevron	   
	      onPress={()=> Actions.ItemScreen()}  
	    />
	  )
	}
	render(){
				
		return(
			<View>
				<View style={{marginTop: 55}}>
					<SearchBar
					  lightTheme
					  onChangeText={()=> console.log('teste')}
					  onClearText={()=> console.log('obj')}
					  placeholder='Search for food...' />
				</View>
				<List>
			      <ListView
			        renderRow={this.renderRow}
			        dataSource={this.state.dataSource}
			      />
			    </List>
			</View>
		)
	}
}




export default  Search