import React, {Component} from 'react'
import { SocialIcon,Divider } from 'react-native-elements'
import { View,Text } from 'react-native'
import { 
		Input,
		Spinner
		} from './common'
import { loginWithProvider } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'



class SocialLogin extends Component{	

	onButtonPress(provider){
		console.log(provider);	
		this.props.loginWithProvider(provider)		
	}
	renderButtons(){
		const {	
				socialBtnContainer,
				containerSpinner,
				btnStyle
			  } = styles
		if(this.props.loading)
		{	
			return (<View style={styles.containerSpinner}><Spinner  size='large'/></View> )
		}
		return (
			<View style={socialBtnContainer}>
					<SocialIcon
					  title='Continue with Facebook'
					  button
					  light
					  style={btnStyle}
					  type='facebook'
					  onPress={ ()=> this.onButtonPress('facebook') }  
					  onLongPress={ ()=> this.onButtonPress('facebook')}
					/>
					<SocialIcon
					  title='Continue with Twitter'
					  button
					  type='twitter'
					  light
					  style={btnStyle}
					   onPress={ ()=> this.onButtonPress('twitter') } 
					  onLongPress={ ()=> this.onButtonPress('twitter')}
					/>
					<SocialIcon
					  title='Continue with Google+'
					  button
					  light
					  style={btnStyle}
					  type='google-plus-official'
					  onPress={ ()=> this.onButtonPress('google') } 
					  onLongPress={ ()=> this.onButtonPress('google')}
					/>					
				</View>
		)
	}

	render(){
		const {
				containerStyle,	
				containerSpinner,
				text,
				dividerStyle
			  } = styles	
		
		
		return(
			<View style={containerStyle}>
				<Text  style={text} >Do you already have an account? You can use it to log in to Oxalates App.</Text>
				<Divider style={dividerStyle} />
				{this.renderButtons()}
				<Divider style={dividerStyle} />
				<Text  style={text} >We will never post anything without your permission.</Text>
			</View>
		)
	}
}

const styles={
	containerStyle:{
		backgroundColor: '#fff',
		flex: 1,
		paddingTop: 70,
		alignContent: 'center'  
	},	
	text:{
		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20,
		textAlign: 'left' ,
	},
	dividerStyle:{
		 backgroundColor: 'grey',
		 marginTop: 15,
		 marginLeft: 10,
		 marginRight: 10 
	},
	btnStyle:{
		height: 40,
		borderRadius: 0
	},
	socialBtnContainer:{
		paddingTop: 10,
		justifyContent: 'space-between',
		
	},	
	containerSpinner:{
		justifyContent: 'center',
		alignItems: 'center',
		flex:4
	}
}

const mapStateToProps = (state) =>{
	const  { loading } = state.auth
	return { loading }
}




export default connect(mapStateToProps,{loginWithProvider}) (SocialLogin)