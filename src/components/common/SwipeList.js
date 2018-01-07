import React, {Component} from 'react'
import {
		View,
		Text ,
		TouchableOpacity,
		ListView,
		TouchableHighlight
	   } from 'react-native'
import {SwipeListView, SwipeRow } from 'react-native-swipe-list-view';



class  SwipeList extends Component{

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state ={
			listViewData: this.ds.cloneWithRows(this.props.FoodList)
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			listViewData: this.ds.cloneWithRows(nextProps.FoodList),
		})
	}

	
  openRow = (rowRef) => {  
 
      rowRef.manuallySwipeRow(-145);
  }

  editRow(rowRef,rowMap, rowKey) {
		this.closeRow(rowMap, rowKey);
		console.log(rowKey);
		console.log(this.props.FoodList);
		this.props.onEdit(this.props.FoodList[rowKey])
  }

  closeRow(rowMap, rowKey)
  {
  		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow();
		}
  }
  deleteRow =(rowRef,rowMap, rowKey) => {
		this.closeRow(rowMap, rowKey);
		this.props.onDelete(rowRef._reactInternalFiber.key)
		// Call Function to Delete from the history
		// rowRef._reactInternalFiber.key
		
  }

  render(){
		const {
			itemName,
			titleContainerStyle,
			backTextWhite,
			rowFront,
			rowBack,
			backRightBtn,
			backRightBtnLeft,
			backRightBtnRight,
			oxalatesBoxStyle
		  } = styles
	return(	
				<SwipeListView
				 enableEmptySections={true}
						dataSource={this.state.listViewData}
						renderRow={ (data, secId, rowId, rowMap) => (
							<SwipeRow key={data.id}
								disableRightSwipe
								disableLeftSwipe
								leftOpenValue={75}
								rightOpenValue={-75}
							>

								<View style={rowBack}>
									<TouchableOpacity style={[backRightBtn, backRightBtnLeft]} onPress={ _ => this.editRow(rowMap[`${secId}${rowId}`] ,rowMap, `${rowId}`) }>
										<Text style={backTextWhite}>Edit</Text>
									</TouchableOpacity>
									<TouchableOpacity style={[backRightBtn, backRightBtnRight]} onPress={ _ => this.deleteRow(rowMap[`${secId}${rowId}`] ,rowMap, `${secId}${rowId}`) }>
										<Text style={backTextWhite}>Delete</Text>
									</TouchableOpacity>
								</View>
								<TouchableHighlight
									onPress={ _ => this.openRow( rowMap[`${secId}${rowId}`])}									
									underlayColor={'#AAA'}
								>
									<View style={rowFront}>
										<Text style={itemName}> {data.name} </Text>
										<Text style={oxalatesBoxStyle}> {data.oxalatesCart} </Text>
									</View>										
								</TouchableHighlight>
							</SwipeRow>
						)}
					/>			
	)
}
}


const styles ={
	itemName:{
		flex: 4
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
		backgroundColor: '#55ace0',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: '#ffc10d',
		right: 0
	}
}


export {SwipeList}
	
				