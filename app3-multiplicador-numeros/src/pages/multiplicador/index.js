import  React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import {styles} from './styles'

import Input from '../../components/input'
import Botao from '../../components/botao'

function Multiplicador(){
  const[result, setResult] = useState()
  const[input1, setInput1] = useState('')
  const[input2, setInput2] = useState('')

  function calcular(){
    if(input1 === '' || isNaN(input1)){
      alert("É necessário digitar NÚMEROS no primeiro campo")
      return
    }

    if(input2 === '' || isNaN(input2)){
      alert("É necessário digitar NÚMEROS no segundo campo")
      return
    }

    setResult(input1 * input2)
  }


  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <Input
          placeholder = 'Digite o 1° número'
          funcao = {setInput1}
          tipo = 'numeric'
        />

        <Input
          placeholder = 'Digite o 2° número'
          funcao = {setInput2}
          tipo = 'numeric'
        />

        <Botao 
          titulo = 'Calcular'
          cor = '#C880B7'
          funcao = {calcular}
        />

        <Botao
          titulo = 'Limpar'
          cor = '#9F6BA0'
          funcao = {() => setResult('')}
        />

        <Text style={styles.resultado}>Resultado: {result}</Text>

        </View>
    </SafeAreaView>
  )

}

export default Multiplicador