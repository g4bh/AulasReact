import {View, Text} from 'react-native';

import Adivinhador from './src/pages/Adivinhador/Index';

import Header from './src/components/header/index';

function App(){

return (
  <View>

    <Header />

    <Adivinhador />
  </View>
)

}

export default App;