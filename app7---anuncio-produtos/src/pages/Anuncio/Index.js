import {View, Text, ScrollView} from 'react-native';
import {styles} from './Styles';
import Card from '../../components/Card/Index'

export default function Anuncios() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios - Carros usados</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <Card 
  imagemProduto='https://www.webmotors.com.br/wp-content/uploads/2023/02/09184855/VW-Gol-ate-2019-1.webp'
  nomeProduto='Chevrolet Onix'
  descricaoProduto='Hatch compacto com ótimo consumo de combustível e conectividade moderna. Ideal para cidade.'
  preco='R$ 72.900'
/>

<Card 
  imagemProduto='https://www.webmotors.com.br/wp-content/uploads/2023/02/09184855/VW-Gol-ate-2019-1.webp'
  nomeProduto='Volkswagen Gol'
  descricaoProduto='Carro popular confiável, manutenção acessível e bom desempenho urbano.'
  preco='R$ 59.990'
/>

<Card 
  imagemProduto='https://www.webmotors.com.br/wp-content/uploads/2023/02/09184855/VW-Gol-ate-2019-1.webp'
  nomeProduto='Fiat Pulse'
  descricaoProduto='SUV compacto com visual moderno, boa altura do solo e tecnologia embarcada.'
  preco='R$ 98.990'
/>

<Card 
  imagemProduto='https://www.webmotors.com.br/wp-content/uploads/2023/02/09184855/VW-Gol-ate-2019-1.webp'
  nomeProduto='Honda Civic'
  descricaoProduto='Sedã médio com excelente conforto, desempenho e qualidade construtiva.'
  preco='R$ 146.900'
/>

<Card 
  imagemProduto='https://www.webmotors.com.br/wp-content/uploads/2023/02/09184855/VW-Gol-ate-2019-1.webp'
  nomeProduto='Jeep Compass'
  descricaoProduto='SUV médio com design robusto, bom desempenho e ótima tecnologia interna.'
  preco='R$ 179.990'
/>
      

      </ScrollView>
    </View>
  );
}