import  React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'

import {styles} from './Styles'

import Input from '../../components/Input/Index'
import Botao from '../../components/Botao/Index'


function Verificador(){

  const[result, setResult] = useState('')
  const[inputG, setInputG] = useState('')
  const[inputE, setInputE] = useState('')

  function calcular(){

    if(inputG === '' || isNaN(inputG)){
      alert("É necessário digitar NÚMEROS no primeiro campo")
      return
    }

    if(inputE === '' || isNaN(inputE)){
      alert("É necessário digitar NÚMEROS no segundo campo")
      return
    }

    var comparacao = inputE / inputG

    if(comparacao > 0.7){
     setResult("Gasolina é a melhor opção!")
    } else {
     setResult("Etanol é a melhor opção!")
    }
   
  }

return(
    <SafeAreaView>

      <View style={styles.area}>
        

        <Input
          placeholder = 'Digite o preço da gasolina'
          funcao = {setInputG}
          tipo = 'decimal-pad'
        />

        <Input
          placeholder = 'Digite o preço do etanol'
          funcao = {setInputE}
          tipo = 'decimal-pad'
        />

        <Botao 
          titulo = 'Calcular'
          cor = '#344E41'
          funcao = {calcular}
        />

        <Botao
          titulo = 'Limpar'
          cor = '#E3879E'
          funcao = {() => setResult('')}
        />

        <Text style={styles.resultado}>Resultado: {result}</Text>

        </View>
    </SafeAreaView>
  )

}

export default Verificador