import React  from 'react'
import { FormLabel, FormInput } from 'react-native-elements'
import { View } from 'react-native'



const Input =({children,onChangeText,value,isPassword=false,stylesProp}) =>{
	return(
		<View>
			<FormLabel labelStyle={[styles.formLabelStyle,stylesProp]}>{children}</FormLabel>
			<FormInput secureTextEntry={isPassword} shake={true} value={value} onChangeText={onChangeText}/>
		</View>	
	)
}

const styles={
	formLabelStyle:{
		color: 'white'
	}

}
	export {Input}

