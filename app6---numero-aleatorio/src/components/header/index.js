import { View, Text, Image } from 'react-native'

import interrogacao from '../../../assets/interrogacao.png'

import {styles} from './styles'

function Header(){
  return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Adivinhe o número! 🤔</Text>
        <Image source={ interrogacao } style={styles.imagem}/>
      </View>
  )
}

export default Header