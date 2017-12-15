import React,{Component} from 'react'
import {Scene,Router,Actions} from 'react-native-router-flux'
import {View,Text,Image} from 'react-native'
import _ from 'lodash'
import Search from './components/Search'
import Diary from './components/Diary'
import SocialLogin from './components/SocialLogin'
import IntroScreen from './components/Intro'
import ProfileQuestion from './components/ProfileQuestion'
import Item from './components/Item'
import { connect} from 'react-redux'
import {LoadingScreen} from './components/common'
import SplashScreen from 'react-native-splash-screen'
import axios from 'axios'

// Simple component to render something in place of icon
const TabView = ({ selected, title }) => {
  
  tabIcon = () => {
	  	const {imageStyle} = styles
	  	
	  	switch(title)
	  	{	  		
	  		case 'Search':
	  			return (
			  		<Image  
			  		  	style={imageStyle}   
			  		  	source={require('./../img/search.png')}  
	  				/>
	  			)
	  		case 'Diary':
	  			return (
			  		<Image  
			  		  	style={imageStyle}   
			  		  	source={require('./../img/diary.png')}  
	  				/>
	  			)	  		
	  	}
  }


  return (
  	<View>
  		{this.tabIcon()}	  	
	    <Text style={{color: selected ? '#55ace0' :'black'}}>
	    	{title}
	    </Text>
    </View>
  );
}


class RouterComponent extends Component{

	render(){	
		 const {storeRecoveryCompleted,token,profile_submited } = this.props
		 if (storeRecoveryCompleted==false) {	
		 	
		 	debugger;
		 	SplashScreen.hide() 
		    return (
		        <LoadingScreen />
		    )
		 }
		 else{
		 	axios.defaults.headers.common['Authorization'] = token;
			const {navBar,tabBarStyle, titleNavBarStyle } = styles			
			return (
				<Router navigationBarStyle={navBar} titleStyle={titleNavBarStyle}  >	
					<Scene key="root">		
						<Scene key="auth">	
							<Scene 
								key="IntroScreen"
								component={IntroScreen}								
								hideNavBar={true}
								initial={!token}								
							/>							
							<Scene 
								key="SocialLogin"
								component={SocialLogin}								
								hideNavBar={true} 												
							/>		
							<Scene 
								key="ProfileQuestion"
								component={ProfileQuestion}								
								hideNavBar={true} 
								initial={token && !profile_submited }	

																							
							/>						
						</Scene>
						<Scene key="TabBar"  tabs={true}  tabBarStyle={tabBarStyle}  initial={token && profile_submited}>
						    <Scene 
							    key="Search" 
							    title="Search" 
							    icon={TabView} 							  	
	           				>
		                       <Scene key="SearchScreen"  title="OxalatesApp"  initial component={Search}/>
		                       <Scene key="ItemScreen"  title="Add Food"   component={Item}/>
						        </Scene>						  					    	
						    <Scene 
								    key="Diary" 
								    title="Diary" 
								    icon={TabView} 				  
								   >
							      <Scene key="DiaryScreen"  title="OxalatesApp"  component={Diary}/>
							</Scene>
						</Scene>
					</Scene>
				</Router>
				)
		}			
	}
}

const styles ={
	tabBarStyle: {                  
            backgroundColor: '#fff',
            opacity        : 1,
            height: 60,
            borderTopWidth: 1,
            borderColor: 'grey'
     
        },
     navBar: {
   		  backgroundColor: '#fff',
   		  borderBottomWidth: 1 ,
   		  borderColor: 'grey'
	},
	titleNavBarStyle: {
		 color : "black"
	},
	imageStyle:{
		width: 30,
	 	height: 30,
		alignSelf: 'center'
	}
}

const mapStateToProps = state =>{
	return {
		storeRecoveryCompleted: state.storeRecoveryCompleted,
		token: state.auth.token,
		profile_submited: state.profile.profile_submited
	}

}
export default connect(mapStateToProps,{})(RouterComponent)