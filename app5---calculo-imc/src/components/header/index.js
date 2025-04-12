import { View, Text, Image } from 'react-native'

import imagemEtanolGasolina from '../../../assets/balanca.png'

import {styles} from './styles'

function Header(){
  return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora IMC ⚖️</Text>
        <Image source={ imagemEtanolGasolina } style={styles.imagem}/>
      </View>
  )
}

export default Header