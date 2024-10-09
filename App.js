import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      
      {/* Corrected the typo from ssource to source */}
      <Image source={require('./assets/lenac_small.bmp')} style={styles.image} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,  // Set the image width
    height: 200,  // Set the image height
    marginTop: 20,  // Add some spacing around the image
  },
});
