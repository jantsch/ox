import React, {Component} from 'react'
import { Divider  } from 'react-native-elements'
import { View,Text,ListView,TouchableOpacity,TextInput } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage,
		ModalItem
		} from './common'
import { loginWithProvider } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'
import Modal from 'react-native-modal'


class Item extends Component{	
	state = {
    	isModalVisible: false,
    	myNumber:'1'
  	}
  	_showModal = () => this.setState({ isModalVisible: true })

  	_hideModal = () => this.setState({ isModalVisible: false })

  	onChanged(text){
	    let newText = '';
	    let numbers = '0123456789';   
	    this.setState({ myNumber: text.replace(/[^0-9]/g, '') });
	}

	render(){
				
		return(
			<View>
				<View style={{marginTop: 55}}>
					<View style={styles.areaContainer}>
						<Text style={styles.nameLbl}> Name	</Text>
					</View>
					<Divider style={{ backgroundColor: 'grey' }} />
					<TouchableOpacity onPress={this._showModal}>
						<View style={styles.areaContainer}>
							<Text style={styles.nameLbl}> Number of Servings</Text>
							<Text style={styles.valueLbl}> 10</Text>
						</View>
					</TouchableOpacity>
					<Modal isVisible={this.state.isModalVisible}>
			          <ModalItem  title={"How Much?"} onSave={this._hideModal} onCancel={this._hideModal}>	
			          		<View style={styles.textInputContainer}>
					         	<TextInput 		
					         	   style={styles.textInput}						   
								   keyboardType='numeric'
								   onChangeText={(text)=> this.onChanged(text)}
								   value={this.state.myNumber}
								   maxLength={2}
								/>		      
							</View>    		
			          		<Text style={styles.textStyle}>Serving(s) of XXX </Text>			          		
			          </ModalItem>
			        </Modal>
					<Divider style={{ backgroundColor: 'grey' }} />
					<View style={styles.areaContainer}>
						<Text style={styles.nameLbl}> Serving Size</Text>
						<Text style={styles.valueLbl}> 10</Text>
					</View>
					<Divider style={{ backgroundColor: 'grey' }} />
					<View style={styles.areaContainer}>
						<Text style={styles.nameLbl}> Oxalates</Text>
						<Text style={styles.valueLbl} > 10</Text>
					</View>
					<Divider style={{ backgroundColor: 'grey' }} />
					<View style={styles.areaContainer}>
						<Text style={styles.nameLbl}> Percent of daily limit</Text>
						<Text style={styles.valueLbl} > 10</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles ={
	nameLbl:{
		flex: 0.85,
		fontSize: 18
	},
	valueLbl:{
		color: '#55ace0',
		fontSize: 18
	},
	areaContainer:{
		marginTop: 8,
		marginBottom: 8,
		 flexDirection: 'row',
		 justifyContent: 'center'
	},
	textInputContainer:{		
		borderColor: 'grey',
		borderBottomWidth: 1,
		height:30
	},
	textInput:{
		flex:1,
		paddingBottom: 3,
		paddingLeft: 15
	},
	textStyle:{
		paddingTop: 7,
	}

	



}




export default  Item