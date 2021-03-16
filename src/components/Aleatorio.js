import React from 'react'
import {View, Text} from 'react-native'

export default props => {
return (
    <Text>
        O número é + {Math.floor(Math.random()*(props.max - props.min) + props.min)}
    </Text>
) }
