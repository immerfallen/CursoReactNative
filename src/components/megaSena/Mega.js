import React, {Component} from 'react'
import {Text,TextInput, Button, View} from 'react-native'
import Estilo from '../estilo'
import Numero from './Numero'

export default class Mega extends Component {

   
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }


    // uma das solucoes possiveis para o this apontar para o objeto correto
    // constructor(props){
    //     super(props)

    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    alterarQtdeNumero = (qtde) => {          // Colocado o + em frente a qtde para garantir que o valor inserido seja numérico
        this.setState({qtdeNumeros: +qtde}) //Em uma arrow function como o this foi definido dentro de uma classe, ele sempre vai apontar para a instancia dessa classe
    }


    // Programacao funcional
    // gerarNumeros = (qtde) => {
    //     const numeros = Array(this.state.qtdeNumeros).fill().reduce(n => [...n, this.gerarNumeroNaoContido(n)], []).sort((a,b) => a-b)
    //     this.setState({numeros})
    // }


    // Programacao procedural
    gerarNumeros = () => {
        const {qtdeNumeros} = this.state
        const numeros = []

        for(let i=0; i < qtdeNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }
        numeros.sort((a,b) => a-b)

        this.setState({numeros})
    }

   gerarNumeroNaoContido = nums => {
       const novo = parseInt(Math.random()*60)+1
       return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
   }
    
   exibirNumero = () => {
       const nums = this.state.numeros
       return nums.map(num =>{
           return <Numero key={num} num={num}/>
       })

   }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                    
                </Text>
                <TextInput
                keyboardType={'numeric'}                
                style={{borderBottomWidth: 1}}
                placeholder="Qtde de números:"
                value={this.state.qtdeNumeros}
                onChangeText={this.alterarQtdeNumero}
               // onChangeText={qtde => this.alterarQtdeNumero(qtde)} outra solucao para o this apontar para a instancia de Mega
                />
                <Button 
                    stye={{padding:20}}
                    title='Gerar numeros'
                    onPress={this.gerarNumeros}
                />
                <View style={
                    {flexDirection:'row',
                    marginTop: 20,
                    flexWrap:'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumero()}
                </View>
            </>
            
        )
    }

}