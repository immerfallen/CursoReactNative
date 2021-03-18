import React from 'react'
import {Button} from 'react-native'
import Estilo from '../estilo'
export default props => {
    
        function gerarNumero(min, max){
            const fator = max-min+1
            return parseInt(Math.random()*fator)+min
        }
        return (
            <Button 
                title="Executar"
                onPress={function(){
                   const n = gerarNumero(props.max, props.min) //colocamos a funcao dentro de uma variavel e passamos por parametro para props.funcao
                   props.funcao(n, 'O valor é: ') //essa funcao será chamada la no elemento pai como parametro do componente filho
                }}
            />
         
    )
}