import React,{Component} from 'react'
import {Scene,Router,Actions} from 'react-native-router-flux'
import {View,Text,Image} from 'react-native'
import _ from 'lodash'
import Search from './components/Search'
import History from './components/History'
import SocialLogin from './components/SocialLogin'
import IntroScreen from './components/Intro'
import ProfileQuestion from './components/ProfileQuestion'
import { connect} from 'react-redux'
import { checkLoginUser} from './actions'
import {LoadingScreen} from './components/common'
import SplashScreen from 'react-native-splash-screen'

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
	  		case 'History':
	  			return (
			  		<Image  
			  		  	style={imageStyle}   
			  		  	source={require('./../img/history.png')}  
	  				/>
	  			)	  		
	  	}
  }


  return (
  	<View>
  		{this.tabIcon()}	  	
	    <Text style={{color: selected ? '#7D192D' :'white'}}>
	    	{title}
	    </Text>
    </View>
  );
}


class RouterComponent extends Component{

	componentWillMount(){
		this.props.checkLoginUser()
	}

	render(){	
		 if (_.isNull(this.props.token)) {	
		 	SplashScreen.hide() 	
		    return (
		        <LoadingScreen />
		    )
		 }
		 else{
			const {navBar,tabBarStyle, titleNavBarStyle } = styles			
			return (
				<Router navigationBarStyle={navBar} titleStyle={titleNavBarStyle} >	
					<Scene key="root">		
						<Scene key="auth">	
							<Scene 
								key="IntroScreen"
								component={IntroScreen}								
								hideNavBar={true}
								initial={!this.props.token}								
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

																							
							/>						
						</Scene>
						<Scene key="TabBar" tabs={true} hideNavBar tabBarStyle={tabBarStyle} initial={this.props.token}	>
						    <Scene 
							    key="Search" 
							    title="Search" 
							    icon={TabView} 	
	           				>
		                        <Scene key="SearchScreen"  title="OxalatesApp"  initial component={Search}/>
						        </Scene>						  					    	
						    <Scene 
								    key="history" 
								    title="History" 
								    icon={TabView} 				  
								   >
							      <Scene key="HistoryScreen"  title="OxalatesApp"  component={History}/>
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
            backgroundColor: '#353f40',
            opacity        : 1,
            height: 60
        },
     navBar: {
   		  backgroundColor: '#353f40',
   		  borderBottomWidth: 0 
	},
	titleNavBarStyle: {
		 color : "#FFF"
	},
	imageStyle:{
		width: 30,
	 	height: 30,
		alignSelf: 'center'
	}
}
const mapStateToProps = state =>{
	return {
		token: state.auth.token
	}

}
export default connect(mapStateToProps,{checkLoginUser})(RouterComponent)