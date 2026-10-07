import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(){
 return (
  <View style={styles.container}>
  <Text style={styles.titulo}>Luis Henrique Pereira da Silva</Text>
    <Image
      source={{uri: 'https://raw.githubusercontent.com/Luis-cloud356/Portifolio/refs/heads/main/foto.jpeg'}}
      style={styles.imagem} />
      <Text style={styles.titulo}>
        Escolaridade:
      </Text>

      <Text style={styles.subtitulo}>
        Cursando o 3º do Ensino Médio e TI
      </Text>    

      <Button
      title="Github"onPress={() => Linking.openURL('https://github.com/Luis-cloud356')} 
      color='#333'
 />  
  </View>
 ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    padding: 24,
  },
  titulo: {
    color: '#333',
    fontSize:32,
    fontWeight: 'bold',
    marginBottom:20,
  },
  imagem: {
    borderRadius: 1000,
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  subtitulo: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
  },
 
})