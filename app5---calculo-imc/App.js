import {  View, ScrollView } from 'react-native';

import Calculador from './src/pages/Calculador/Index';

import Header from './src/components/header/index';

function App(){

return (
  <View>
    <ScrollView>
      <Header />

      <Calculador />
    </ScrollView>
  </View>
)

}

export default App;