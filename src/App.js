import React from 'react'
import {View, Text} from 'react-native'
import Primeiro from './components/Primeiro'

export default () => (
    <View>
        <Primeiro> </Primeiro> 
        <Text>{1+1}</Text>
    </View> 
) // Pode-se utilizar da seguinte forma o componente <Primeiro /> O que está dentro das chaves é intepretado com um código JS 

// COMPONENTES BASEADOS EM FUNÇÕES SÃO CHAMADOS DE COMPONENTES FUNCIONAIS

/* function App(){
    return <Text>Primeiro Componente</Text>}

export default App */

/* const App = function(){
    return <Text>Primeiro Componente</Text>  TAMBÉM É POSSÍVEL UTILIZAR FUNÇÃO ANÔNIMA
} */

/* export deafult function(){
    return <Text>Primeiro Componente</Text>  A FUNÇÃO REPRESENTA UM COMPONENTE FUNCIONAL
} */

 /* export deafult () => {
    return <Text>Primeiro Componente</Text> TAMBÉM É POSSÍVEL CRIAR OM COMPONENTE COMO UMA ARROW FUNCTION
} */

 /* export default () => <Text>Primeiro componente!!</Text>    // TAMBÉM É POSSÍVEL CRIAR O COMPONENTE DE MANEIRA MÍNIMA EM UMA LINHA */