import { View, StyleSheet, FlatList, Text, Button, Image } from 'react-native';

import {styles} from './Styles'


function Card(props){
return(
    <View style={styles.card}>
      <View> 
        <Image source={{uri: props.imagemProduto}} style={styles.imagemProduto} />
        <Text style={styles.tituloCard}> {props.nomeProduto} </Text>
        <Text style={styles.precoCard}> {props.preco} </Text>
        <Text style={styles.descricaoCard}> {props.descricaoProduto} </Text>
      </View>
    </View>

  );


}

export default Card