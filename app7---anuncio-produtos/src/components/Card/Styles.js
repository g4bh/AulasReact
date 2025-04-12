import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: 140,
    maxHeight: 350,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  imagemProduto: {
    alignSelf: 'center',
    width: '100%', 
    height: 150,
    borderRadius: 10,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10
  },
  precoCard: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10
  },
  descricaoCard: {
    fontSize: 10,
    fontWeight: '300',
    padding: 10
  },
});

export {styles}