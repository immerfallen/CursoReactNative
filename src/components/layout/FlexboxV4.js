import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return (
         <View style={style.FlexV4}>
            <View style={style.V1}/>
            <View style={style.V2}/>
         </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {   
        flexGrow: 1,        
        width: 100,              
        backgroundColor:'black',
    },
    V1: {
        backgroundColor: 'orange',
        flexGrow: 3,
    },
    V2: {
        backgroundColor: 'purple',
        flexGrow: 1,
    },
})