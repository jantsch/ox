import React, {Component} from 'react'
import { SocialIcon } from 'react-native-elements'
import { View,Text,Image,TouchableHighlight } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage,
		DiaryDetails
		} from './common'
import { onDayChange, setMealDateCart} from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'
import Swiper from 'react-native-swiper'
import moment from 'moment'


class Diary extends Component{	
	
	constructor(props) {
	    super(props);
	    this.state = { index : 0};
 	}

 	componentWillMount(){

 			var current = this.props.history.filter(item => this.props.today.isSame(item.day, 'day'))
		 	var futureDay = this.props.today.clone().add(1, 'd')
		 	var pastDay = this.props.today.clone().subtract(1, 'd')
		 	var past    = this.props.history.filter(item => pastDay.isSame(item.day, 'day'))
		 	var future    = this.props.history.filter(item => futureDay.isSame(item.day, 'day'))
		 	this.setState({current:current, past:past,future:future })
 	}
 	componentWillReceiveProps(nextProps){
 			this._refresh(nextProps)
 	}
 	_refresh= ({history,today}) =>{

 				if(this.props.history != history)
 				{
 					var current = history.filter(item => today.isSame(item.day, 'day'))
			 		var futureDay = today.clone().add(1, 'd')
			 		var pastDay = today.clone().subtract(1, 'd')
			 		var past    = history.filter(item => pastDay.isSame(item.day, 'day'))
			 		var future    = history.filter(item => futureDay.isSame(item.day, 'day'))
			 		switch(this.state.index)
			 		{
			 			case 0: 
			 				console.log('000');
			 				this.setState({current:current, past:past,future:future })
			 				break
			 			case 1:
			 				console.log('111');
				 			this.setState({current:past, past:future,future:current })
				 			break
			 			case 2:
			 				console.log('222');
			 				this.setState({current:future, past:current,future:past })
			 				break
		 			}
		 		}
 	}

 	_refreshNextDay =(index) =>{ 	
 		var futureDay = this.props.today.clone().add(1, 'd') 		
 		var future    = this.props.history.filter(item => futureDay.isSame(item.day, 'day')) 		
 		switch(index)
 		{
 			case 0:
 				this.setState({current:future})
 				break
 			case 1:
 				this.setState({future:future })
 				break
 			case 2:
 				this.setState({past:future })
 				break


 		}
 	}

 	_refreshPastDay =(index) =>{
 		var pastDay = this.props.today.clone().subtract(1, 'd')
 		var past    = this.props.history.filter(item => pastDay.isSame(item.day, 'day')) 		
 		switch(index)
 		{
 			case 0:
 				this.setState({current:past})
 				break
 			case 1:
 				this.setState({future:past })
 				break
 			case 2:
 				this.setState({past:past })
 				break
 		}
 	}
	
	
	 onMomentumScrollEnd= (event, state) => {	 	
	 		 if((this.state.index > state.index && (this.state.index !=2  || state.index != 0)) || (this.state.index == 0 && state.index== 2) )
			 {
			 	this.props.onDayChange('return', this.props.today) 	
			 	this._refreshPastDay(state.index-1 < 0 ? 2 : state.index-1)
			 	
			 	// Update 1 number after current index with following day
			 }
			 if((this.state.index < state.index && (this.state.index != 0 || state.index!= 2)) || (this.state.index ==2  && state.index== 0) )
			 {
			 	this.props.onDayChange('next', this.props.today)
			 	this._refreshNextDay(state.index+1 >2 ? 0 : state.index+1)
			 	// update 1 number after current index with day before.
			 }
              this.setState({
                index: state.index,
              });
          
     }


	render(){
				
		return(		
				<View style={styles.wrapper}>
					<View style={styles.dateContainerStyle}>
						<TouchableHighlight onPress={() =>{this.swiper.scrollBy(-1)}}>
							<Image style={{width: 20, height: 20}} source={require('./../../img/left-arrow.png')}/>
						</TouchableHighlight>
						<Text style={styles.dateText}> {this.props.today.format('MMMM Do')}</Text>
						<TouchableHighlight onPress={()=> {this.swiper.scrollBy(1)}}>
							<Image style={{width: 20, height: 20}} source={require('./../../img/right-arrow.png')}/>
						 </TouchableHighlight>
					</View>	
					 <Swiper 
					 	loop ={true}
					 	style={styles.wrapper}  
					 	ref={(swiper) => {this.swiper = swiper;}}
					 	onMomentumScrollEnd={this.onMomentumScrollEnd} >
						 <DiaryDetails onAddPressed={this.props.setMealDateCart} date={this.props.today.clone()}   dayLimit={this.props.dayLimit} consumedItems={this.state.current}/>
						 <DiaryDetails onAddPressed={this.props.setMealDateCart}  date={this.props.today.clone()}  dayLimit={this.props.dayLimit} consumedItems={this.state.future}/>
						 <DiaryDetails onAddPressed={this.props.setMealDateCart}  date={this.props.today.clone()}  dayLimit={this.props.dayLimit} consumedItems={this.state.past} />
				    </Swiper>		               
			    </View>			
		)
	}
}

var styles = {
	dateContainerStyle:{
		flex:0.07,
		marginTop: 70,
		justifyContent: 'space-around',
		flexDirection: 'row',
		borderBottomWidth: 1 ,
   		borderColor: 'grey'
	},
	dateText: {
		textAlign: 'center',
	},
    wrapper: {
	  	flex: 1,
	}
}
const mapStateToProps = state =>{
 	const {today,history} = state.diary
	return {
		today,
		history,
		dayLimit: state.profile.oxalates_limit
	}
}


export default connect(mapStateToProps,{onDayChange,setMealDateCart}) (Diary)