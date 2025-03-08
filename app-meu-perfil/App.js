import { View, Text, Image } from 'react-native';

import myImage from './assets/pingupingu.png';

function App(){
    let nome = 'Gabriella';

  return(
     <View>
      
        <Image
          source={ myImage }
          style={{ width: 200, height: 200, borderRadius: 20, marginLeft: 35, marginTop: 20, marginBottom: 20}}
        />
        <Text style={{color: '#36213E', fontSize: 25, marginLeft: 30, marginBottom: 10, fontWeight: 800}}>Dados pessoais: </Text>
        <Text style={{color: '#36213E', fontSize: 15, marginLeft: 30, marginBottom: 10, fontWeight: 400}}>Nome: {nome}</Text>
        <Text style={{color: '#36213E', fontSize: 15, marginLeft: 30, marginBottom: 10, fontWeight: 400}}>Idade: 77 anos</Text>
        <Text style={{color: '#36213E', fontSize: 25, marginLeft: 30, marginBottom: 10, fontWeight: 800}}>Formação: </Text>
        <Text style={{color: '#36213E', fontSize: 15, marginLeft: 30, marginBottom: 10, fontWeight: 400}}>Sistemas para Internet</Text>
         <Text style={{color: '#36213E', fontSize: 25, marginLeft: 30, marginBottom: 10, fontWeight: 800}}>Experiência: </Text>
        <Text style={{color: '#36213E', fontSize: 15, marginLeft: 30, marginBottom: 10, fontWeight: 400}}>Crocheteira</Text>
        <Text style={{color: '#36213E', fontSize: 25, marginLeft: 30, marginBottom: 10, fontWeight: 800}}>Projetos: </Text>
        <Text style={{color: '#36213E', fontSize: 15, marginLeft: 30, marginBottom: 10, fontWeight: 400}}>Protótipo antifraude simples com Java e Spring Boot</Text>
        
      </View>
  )
}




export default App;
