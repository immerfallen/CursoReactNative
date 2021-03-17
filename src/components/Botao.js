import React from 'react'
import {Button} from 'react-native'

export default props => {

    function executar(){
        console.warn("Exec #01")
    }
    return (
        <>
            <Button title="Executar #01" 
            onPress={executar} // aqui nao executaremos o funcao, por isso a falta de (). Ela será passada como referência a hora em que seja clicado o botao
            />
            <Button title="Executar #02" 
            onPress={function()  {
                console.warn("Exec #02")
            }}
            />
             <Button title="Executar #03" 
            onPress={() =>  {
                console.warn("Exec #03")
            }}
            />
        </>
    )
}