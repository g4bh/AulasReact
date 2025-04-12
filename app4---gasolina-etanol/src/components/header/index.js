import { View, Text, Image } from 'react-native'

import imagemEtanolGasolina from '../../../assets/gasolina_etanol.png'

import {styles} from './styles'

function Header(){
  return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Álcool ou Gasolina? 🤔</Text>
        <Image source={ imagemEtanolGasolina } style={styles.imagem}/>
      </View>
  )
}

export default Header