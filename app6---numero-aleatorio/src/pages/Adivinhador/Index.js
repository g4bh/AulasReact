import  React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'

import {styles} from './Styles'

import Input from '../../components/Input/Index'
import Botao from '../../components/Botao/Index'


function Verificador(){

  const[result, setResult] = useState('')

  function gerarNumero(){

       setResult(Math.floor(Math.random()*11))
  }

return(
    <SafeAreaView>

      <View style={styles.area}>

        <Botao 
          titulo = 'Descobrir'
          cor = '#344E41'
          funcao = {gerarNumero}
        />

        <Text style={styles.resultado}>ADIVINHAÇÃO: {result}</Text>

        </View>
    </SafeAreaView>
  )

}

export default Verificador