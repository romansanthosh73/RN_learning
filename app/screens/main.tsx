/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Image, SafeAreaView,StyleSheet, Text, View,} from 'react-native';

function Main() {
         
  return (
    <SafeAreaView style={styles.container}>
    
      <Image
        source={require('../assets/SRM_Logo.png')}
        style={styles.img}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white'
    // alignItems: 'center'

  },
  img:{
    height:300,
    width:250,
    resizeMode:'contain',
    margin:'auto'
  }
});




export default Main;
