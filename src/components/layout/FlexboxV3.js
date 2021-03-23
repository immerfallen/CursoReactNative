import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return (
         <View style={style.FlexV3}>
            <Quadrado color='purple' lado ={20}/>
            <Quadrado color='red'    lado ={30}/>
            <Quadrado color='green'  lado ={40}/>
            <Quadrado color='blue'   lado ={50}/>
            <Quadrado color='orange' lado ={60}/>
         </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {   
        height: 350,     
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'baseline',
        width: "100%",              
        backgroundColor:'black',
    }
})