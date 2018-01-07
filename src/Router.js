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
import SelectMeal from './components/SelectMeal'
import FiltersScreen from './components/FiltersScreen'
import FilterSelection from './components/FilterSelection'
import { connect} from 'react-redux'
import {LoadingScreen} from './components/common'
import SplashScreen from 'react-native-splash-screen'
import axios from 'axios'
import { fetchFood,submitCartItem } from './actions'

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
		 const {storeRecoveryCompleted,token,profile_submited,foodArray,itemCart } = this.props		 
		 if (storeRecoveryCompleted==false) {			 		
		 	SplashScreen.hide() 
		    return (
		        <LoadingScreen />
		    )
		 }
		 else{
		 	axios.defaults.headers.common['Authorization'] = token;

		 	// FetchData from Server	
		 	if(foodArray.length ==0)
		 	{
		 		this.props.fetchFood()
		 	}		 	
		 	
			const {navBar,tabBarStyle, titleNavBarStyle,rightImageStyle } = styles			
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
		                       <Scene key="SearchScreen"  title="OxalatesApp"  
		                       			initial 
		                       			component={Search} 
		                       			onRight={ ()=> {Actions.FiltersScreen()} }		           						 	
		                       			rightButtonIconStyle={rightImageStyle}		                       			 
		           						rightButtonImage={require('./../img/filter-results-button.png')}
		           				/>
		           			   <Scene key="FiltersScreen"    title="Filters" component={FiltersScreen}/>
		           			   <Scene key="FilterSelection"    getTitle={this.props.title} component={FilterSelection}/>
		           			  <Scene key="ItemScreen"    title="Add Food" component={Item}
			                       	  onRight={ ()=> {
			                       		  		this.props.itemCart.dmSetViaButton ? 
			                       		  		(
			                       		  			this.props.submitCartItem(this.props.itemCart),			                       		  			
			                       		  		 	Actions.SearchScreen({type: 'reset'}),
			                       		  		 	Actions.Diary()
			           
			                       		  		) 
			                       		  		: 
			                       		  		Actions.SelectMealScreen()
			                       		}}
			                       		rightButtonIconStyle=	{rightImageStyle} 
		           						rightButtonImage={require('./../img/tick.png')}
			                     />
			                   <Scene key="SelectMealScreen"  title="Add to"   
			                      	 		 onRight={ ()=> {this.props.submitCartItem(this.props.itemCart);Actions.SearchScreen({type: 'reset'})} }
		           						 	 rightButtonImage={require('./../img/tick.png')} 
		           						 	 rightButtonIconStyle=	{rightImageStyle} 
		           						 	 component={SelectMeal}
		           				/>
						    </Scene>						  					    	
						    <Scene 
								    key="Diary" 
								    title="Diary" 
								    icon={TabView} 									    			  
								   >
							      <Scene key="DiaryScreen"  title="OxalatesApp"  component={Diary}/>
							       <Scene key="EditItemScreen"    title="Edit Food" component={Item}
			                       	  onRight={ ()=> {Actions.SelectMealScreenEdit()}}
			                       		rightButtonIconStyle=	{rightImageStyle} 
		           						rightButtonImage={require('./../img/tick.png')}
			                     />
			                    <Scene key="SelectMealScreenEdit"  title="Edit Food"   
			                      	 		 onRight={ ()=> {			                      	 		 
			                      	 		 	this.props.submitCartItem({...this.props.itemCart, edited: true }),			                      	 	
			                      	 		 	Actions.DiaryScreen({type: 'reset'})} }
		           						 	 rightButtonImage={require('./../img/tick.png')} 
		           						 	 rightButtonIconStyle=	{rightImageStyle} 
		           						 	 component={SelectMeal}
		           				/>
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
     	flex: 0.5,
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
	},
	rightImageStyle:{ 
		width: 22,
		height:22
	}
}

const mapStateToProps = state =>{
	return {
		storeRecoveryCompleted: state.storeRecoveryCompleted,
		token: state.auth.token,
		profile_submited: state.profile.profile_submited,
		foodArray: state.food.foods,
		itemCart: state.cart
	}

}
export default connect(mapStateToProps,{fetchFood,submitCartItem})(RouterComponent)