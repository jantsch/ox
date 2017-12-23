
import React from 'react';
import { View,Picker } from 'react-native';

const ServingTypesPicker = ({selectedValue,changeServingOption,servingSizeNumber,servingSizeNumber2,servingType,servingType2}) =>{

	renderOption = (key,label,value) =>{
		return (
			<Picker.Item color="grey" key={key} label={label} value={value} />
		)
	}

	function isFloat(n) {
   		return n % 1 !== 0;
	}

	renderOptions =(servingSizeNumber,servingSizeNumber2,servingType,servingType2) =>{
		var items = [] 
		items.push(this.renderOption(1, servingSizeNumber +' '+ servingType, servingSizeNumber +' '+ servingType+'---' + servingSizeNumber))
	
		if(isFloat(servingSizeNumber)){			
			items.push(this.renderOption(2,"1 " + servingType, "1 " + servingType + '---' + servingSizeNumber ))			
		}

		if(servingSizeNumber2 != null)
		{
			
			if(isFloat(servingSizeNumber2)){			
				items.push(this.renderOption(3,"1 " + servingType2, "1 " + servingType2 + '---' + servingSizeNumber2 ))			
			}
			else
			{
				if(servingSizeNumber2 !=1)
					items.push(this.renderOption(4,"1 " + servingType2, "1 " + servingType2 + '---' + servingSizeNumber2))	
			}
			items.push(this.renderOption(5,servingSizeNumber2 +' '+ servingType2, servingSizeNumber2 +' '+ servingType2+'---' + servingSizeNumber2))
	
		}
	
		 
		 return items
	}
	return(
		<Picker
		  style={{flex:0.7}}
		  selectedValue={selectedValue}
		  onValueChange={(itemValue, itemIndex) => changeServingOption(itemValue)}>
		  {this.renderOptions(servingSizeNumber,servingSizeNumber2,servingType,servingType2)}
		</Picker>
	)

}


export {ServingTypesPicker}
