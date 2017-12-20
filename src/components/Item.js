import React, {Component} from 'react'
import { Divider  } from 'react-native-elements'
import { View,Text,ListView,TouchableOpacity,TextInput } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage,
		ModalItem,
		Atribute
		} from './common'
import { updateItemCart } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'
import Modal from 'react-native-modal'
import Pie from 'react-native-pie'

class Item extends Component{	
	state = {
    	isModalVisible: false,
    	newNumberSize: this.props.servingSizeCart
  	}
  	_showModal = () => this.setState({ isModalVisible: true })
	_hideModal = () => {  		
  		this.setState({ isModalVisible: false })
  	}
  	_onSave = () => {  		  		
  		this.props.updateItemCart(this.state.newNumberSize, this.props.oxalatesValue,this.props.daily_limit) 
  		this.setState({isModalVisible: false }) 
  		console.log(this.state);
  	}
  	componentWillReceiveProps(nextProps){

  		this.setState({
	    	newNumberSize: nextProps.servingSizeCart
	    })
  	}

  	onChanged = (text) => {  		    
	    this.setState({
	    	newNumberSize: text.replace(/[^0-9.]/g, '')
	    })
	}

	render(){
		const {
		id,
		category,
		name,
		servingSizeNumber, 
		servingSizeNumber2 , 
		servingType , 
		servingType2, 
		oxalatesValue, 
		oxalatesCart,
		servingSizeCart,
		oxalateCategory,
		percentage
		} = this.props		
		return(
			<View>
				<View style={{marginTop: 55}}>
					<Atribute atributeName={name}/>					
					
					<TouchableOpacity onPress={this._showModal}>
						<Atribute atributeName={'Number of Servings'} atributeValue={parseFloat(servingSizeCart).toFixed(2)}/>						
					</TouchableOpacity>

					<Modal isVisible={this.state.isModalVisible}>
			          <ModalItem  title={"How Much?"} onSave={this._onSave} onCancel={this._hideModal}>	
			          		<View style={styles.textInputContainer}>
					         	<TextInput 		
					         	   style={styles.textInput}						   
								   keyboardType='numeric'
								   onChangeText={(text)=> this.onChanged(text)}
								   value={this.state.newNumberSize}
								   maxLength={4}
								/>		      
							</View>    		
			          		<Text style={styles.textStyle}>Serving(s) of {parseFloat(servingSizeNumber).toFixed(2)}{servingType} </Text>			          		
			          </ModalItem>
			        </Modal>
					
					<Atribute atributeName={'Serving Size'} atributeValue={servingType}/>	
					<Atribute atributeName={'Oxalates'} atributeValue={oxalatesCart}/>
					<Atribute atributeName={'Oxalate Category'} atributeValue={oxalateCategory}/>
					<Atribute atributeName={'Percent of daily limit'}  pieChart/>					
					<View style={styles.container}>
				        <View>
				          <Pie
				            radius={70}
				            innerRadius={55}
				            series={[percentage]}
				            colors={['#ffc10d']}
				            backgroundColor='#ddd' />
				          <View style={styles.gauge}>
				            <Text style={styles.gaugeText}>{parseFloat(percentage).toFixed(2)}%</Text>
				          </View>
				        </View>
				      </View>
				</View>
			</View>
		)
	}
}

const styles ={	
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
	} ,
  container: {
  	marginTop: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
}
const mapStateToProps = (state)=>{
	const {loading, id, category,name,	servingSizeNumber, servingSizeNumber2 , servingType , 
	servingType2 , oxalatesValue, oxalateCategory,oxalatesCart,servingSizeCart,percentage} = state.item
	const  { oxalates_limit } = state.profile
	return {
		id,
		category,
		name,
		servingSizeNumber, 
		servingSizeNumber2 , 
		servingType , 
		servingType2, 
		oxalatesValue, 
		oxalateCategory,
		oxalatesCart,
		servingSizeCart,
		percentage,
		daily_limit: oxalates_limit 
	}
}




export default  connect(mapStateToProps,{updateItemCart})(Item)