import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
    const lado = 50
    return (
         <View style={{
             height: lado,
             width: lado,
             backgroundColor: props.color || 'black'
         }}>
         
         </View>
    )
}

const style = StyleSheet.create({

})