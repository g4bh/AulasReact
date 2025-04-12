import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    titulo:{
      fontFamily: "sans-serif",
      fontSize: 25,
      fontWeight: "700",
      color: 'white',
      marginTop: 5,
      marginBottom: 20,
      textAlign: 'center',
      backgroundColor: '#2E547F',
      padding: 20,
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20
    },
    container:{
      alignItems: 'center',
      marginTop: 48
    },
    imagem:{
    height: 220,
    width: 220,
    borderRadius: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});


export {styles}
