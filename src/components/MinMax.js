import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) => {
    console.warn(props) //Lá em App.js passamos como parâmetros os valores que queremos instanciar esse objeto
return (
    <Text style={Estilo.txtG}> 
        O valor {props.max} é maior que o valor {props.min}.
    </Text>
)} // Passamos os valores dos parametros através do JS resgatando os mesmos lá do App.js