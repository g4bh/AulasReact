import { View, Button } from 'react-native'
import {styles} from './Styles'

function Botao(props){
  return(
    <View style={styles.base}>
      <Button 
        title = {props.titulo}
        color = {props.cor}
        onPress = {props.funcao}
      />
    </View>
  )
}

export default Botao