import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import FlexboxV1 from './components/layout/FlexboxV1'
import Quadrado from './components/layout/FlexboxV1'

// import UsuarioLogado from './components/UsuarioLogado'
// import Primeiro from './components/Primeiro'
// import X, {Comp1, Comp2 } from './components/MultiComponents' //Esse X é o componente oficial (default) exportado de MultiComponents
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Principal from './components/Titulo'
// import Botao from './components/Botao'

export default () => (
    <SafeAreaView style={style.App}>
        {/* <Primeiro> </Primeiro> 
        <Text>{1+1}</Text>
        <X />
        <Comp1></Comp1>
        <Comp2></Comp2>    */}
        {/* <MinMax  min="3" max="20"/> 
        <MinMax  min="1" max="90"/>  */}
        {/* <Aleatorio min={100} max={200}></Aleatorio> */}
        {/* <Principal principal="Cadastro de Produto" secundario="Entre com os dados para cadastrar o produto:"></Principal> Se quise envolver mais de uma propriedade dentro da mesma tag, eles tem que estar envolvidos e uma View */}
        {/* <Botao></Botao> */}
        {/* <Contador inicial={3} passo={4}></Contador> */}
        {/* <Pai/> */}
        {/* <ContadorV2 /> */}
        {/* <Diferenciar/> */}
        {/* <ParImpar num = {3} /> */}
        {/* <Familia> 
            <Membro nome="Bia" sobrenome ="Arruda"/>
            <Membro nome="Joana" sobrenome ="Arruda"/>
        </Familia>
        <Familia> 
            <Membro nome="Bia" sobrenome ="Freire"/>
            <Membro nome="Joana" sobrenome ="Freire"/>
        </Familia> */}
        {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome: 'MAro', email: 'maro@gui.com'}}/> */}
        {/* <ListaProdutos/> */}
        {/* <ListaProdutosV2/> */}
        {/* <DigiteSeuNome/> */}
        <FlexboxV1/>
        


    </SafeAreaView> 

    // Uma das possiblidade de chamar mais de uma props dentro de um unico elemento é a seguinte:
    // <React.Fragment> <Principal principal="Cadastro de Produto" secundario="Entre com os dados <Principal/> <React.Frgament/>
    //Também é possível retornar texto direito utilizando <> </>, mas dessa forma lá nos dispositivos não será renderizada como view


) // Pode-se utilizar da seguinte forma o componente <Primeiro /> O que está dentro das chaves é intepretado com um código JS 


const style = StyleSheet.create({
    App: {       
        flexGrow:1,
        justifyContent:"center",
        alignItems: "center",
        padding:20,
        
        
    }
})





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