import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return (
         <View style={style.FlexV1}>
            <Quadrado color='purple'/>
            <Quadrado color='red'/>
            <Quadrado color='green'/>
            <Quadrado color='blue'/>
            <Quadrado color='orange'/>
         </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent:'space-evenly',
        backgroundColor:'black',
    }
})