import React, {Component} from 'react'
import { SocialIcon } from 'react-native-elements'
import { View } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage
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
				containerSpinner
			  } = styles
		if(this.props.loading)
		{	
			return (<View style={styles.containerSpinner}><Spinner  size='large'/></View> )
		}
		return (
			<View style={socialBtnContainer}>
					<SocialIcon
					  title='Sign In With Facebook'
					  button
					  type='facebook'
					  onPress={ ()=> this.onButtonPress('facebook') }  
					  onLongPress={ ()=> this.onButtonPress('facebook')}
					/>
					<SocialIcon
					  title='Sign In With Twitter'
					  button
					  type='twitter'
					   onPress={ ()=> this.onButtonPress('twitter') } 
					  onLongPress={ ()=> this.onButtonPress('twitter')}
					/>
					<SocialIcon
					  title='Sign In With Google+'
					  button
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
				containerSpinner
			  } = styles	
		
		
		return(
			<View style={containerStyle}>
				<DeafultUpperImage />
				{this.renderButtons()}
			</View>
		)
	}
}

const styles={
	containerStyle:{
		backgroundColor: '#fff',
		flex: 1
	},	
	socialBtnContainer:{
		justifyContent: 'space-around',
		paddingBottom: 10
	},	
	containerSpinner:{
		justifyContent: 'center',
		alignItems: 'center',
		flex:2
	}
}

const mapStateToProps = (state) =>{
	const  { loading } = state.auth
	return { loading }
}




export default connect(mapStateToProps,{loginWithProvider}) (SocialLogin)