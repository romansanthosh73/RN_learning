import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";


export default function Home(){




    return(
      <SafeAreaView style={style.container}>
        <StatusBar  barStyle={'dark-content'}/>
        <View style={style.container}>
            <Text>Home Page</Text>
        </View>
      </SafeAreaView>
    )
}


const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})