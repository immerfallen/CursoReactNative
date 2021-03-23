import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return (
         <View style={style.FlexV2}>
            <Quadrado color='purple'/>
            <Quadrado color='red'/>
            <Quadrado color='green'/>
            <Quadrado color='blue'/>
            <Quadrado color='orange'/>
         </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {   
        flex: 1,     
        width: "100%",
        alignItems:'center',
        justifyContent: 'space-between',       
        backgroundColor:'black',
    }
})