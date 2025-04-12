import { View, Text } from 'react-native'
import {styles} from './style'
import {useState} from 'react'
import Butao from '../Components/Botao/Index'

function Contador(){

   const [cont, setCont] = useState(0)


function incrementar(){
    setCont(cont + 1)
  }

function decrementar() {
    if (cont != 0){
     setCont(cont - 1)
    }
}

function zerar() {
    setCont(0)
    }

 
  return(
    <View>    
      <Text style={styles.titulo}> Contator de pessoas </Text>
      <Text style={styles.contador}>{cont}</Text>
      
      <Butao titulo="Incrementar" cor="#7DDE92" funcao={incrementar}/>
      <Butao titulo="decrementar" cor="#4E4187" funcao={decrementar}/>
      <Butao titulo="Zerar" cor="#3083DC" funcao={zerar}/>
    </View>
  )

}

export default Contador