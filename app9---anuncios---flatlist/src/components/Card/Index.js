import { View, StyleSheet, FlatList, Text, Button, Image } from 'react-native';

import {styles} from './Styles'


function Card(props){
return(
    <View style={styles.card}>
      <View> 
        <Text style={styles.tituloCard}> {props.nomeVaga} </Text>
        <Text style={styles.telefoneCard}> {props.telefone} </Text>
        <Text style={styles.descricaoCard}> {props.descricaoVaga} </Text>
      </View>
    </View>

  );


}

export default Card