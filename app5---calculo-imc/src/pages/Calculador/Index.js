import  React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'

import {styles} from './Styles'

import Input from '../../components/Input/Index'
import Botao from '../../components/Botao/Index'


function Verificador(){

  const[result, setResult] = useState('')
  const[peso, setInputP] = useState('')
  const[altura, setInputA] = useState('')

  function calcular(){

    const valor = peso / (altura * altura)
    setResult(valor)

    if (valor < 18.5) {
      setResult('Abaixo do peso')
    } else if (valor >= 18.5 && valor <= 24.9){
      setResult('Peso normal')
    } else if (valor >= 25 && valor <= 29.9) {
      setResult('Sobrepeso')
    } else if (valor >= 30 && valor <= 34.9) {
      setResult('Obesidade grau I')
    } else if (valor >= 35 && valor <= 39.9) {
      setResult('Obesidade grau II')
    } else {
      setResult('Obesidade grau III ou Mórbida')
    }
   
  }

return(
    <SafeAreaView>

      <View style={styles.area}>
        

        <Input
          placeholder = 'Digite seu peso'
          funcao = {setInputP}
          tipo = 'decimal-pad'
        />

        <Input
          placeholder = 'Digite sua altura'
          funcao = {setInputA}
          tipo = 'decimal-pad'
        />

        <Botao 
          titulo = 'Calcular'
          cor = '#2E547F'
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