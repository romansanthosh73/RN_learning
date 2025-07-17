/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { Alert, Button, Pressable, SafeAreaView, Modal, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, KeyboardAvoidingViewComponent, RefreshControl, Switch } from 'react-native';

function Main() {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, settext] = useState("Roman")
  const [count, setcount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

  const [modelsvisible,setModelsVisible]=useState(false);

  const [refreshing,setrefreshing]=useState(false)

  const [dark,setdark]=useState(false)

  const [months, setmonths] = useState([
    { name: 'jan', id: '1' },
    { name: 'feb', id: '2' },
    { name: 'mar', id: '3' },
    { name: 'april', id: '4' },
    { name: 'may', id: '5' },
    { name: 'jun', id: '6' },
    { name: 'jul', id: '7' },
    { name: 'Aug', id: '8' },
    { name: 'Sep', id: '9' },
    { name: 'Oct', id: '10' },
    { name: 'Nov', id: '11' },
    { name: 'Dec', id: '12' }
  ])

  const handleclick = () => {
    Alert.alert('welcome to the app')
  }

  const handlepress = () => {
    settext("Roman santhosh")

  }

  const increment = () => {
    setcount(count + 1)
  }

  const handlerefresh=()=>{
    setrefreshing(true)
    setTimeout(() => {
        setrefreshing(false)
    },3000);
    
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
      <ScrollView refreshControl={
        <RefreshControl 
        refreshing={refreshing}
        onRefresh={handlerefresh}/>
      }>

        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text style={{ color: 'white' }}>santhosh</Text>
        <TextInput style={{ color: 'yellow', }} placeholder='Enter the name' />
        <Button title='click me' onPress={handleclick} />
        <Text style={{ color: 'red' }}>proglint</Text>
        <Text onPress={handlepress} style={{ color: 'lightblue', fontSize: 40 }}>{text}</Text>
        <View style={styles.con}>
          <Image style={styles.Logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
          <Image style={styles.Logo} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
        </View>

        


        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text>press me</Text>

        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 30,textAlign:'center' }}>{count}</Text>

        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </SafeAreaView>

        <SafeAreaView>
          <Text> I am dark mode</Text>
          <Switch value={dark}
          onValueChange={()=>{setdark(prestate=>!prestate)}}
          trackColor={{false:'red',true:'green'}}
          thumbColor='yellow'
          />
        </SafeAreaView>


        <SafeAreaView>
            <Button title='Press modal'
              color='lightblue'
            onPress={()=>setModelsVisible(true)}
            />

            <Modal 
            visible={modelsvisible}
            animationType='slide'
            onRequestClose={()=>setModelsVisible(false)}
            >
              <View>
                <Text style={{textAlign:'center',fontSize:30}}>model content</Text>
                <Button title='close model'
                color='red'
                onPress={()=>setModelsVisible(false)}
                />
              </View>
            </Modal>

        </SafeAreaView >

      </ScrollView>
      <FlatList
        data={months}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <Text style={styles.text}>{item.name}</Text>
        }  
      
      />
      
          <View>
            <Text>Welcome to go react native</Text>
            <TextInput placeholder='Enter the text' style={styles.input}
            />
          </View>

        </KeyboardAvoidingView>
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding:20
    // alignItems: 'center'

  },
  textkey: {
    fontSize: 30,
    color: 'yellow'
  },
  input: {
    borderWidth: 1,
    borderColor: 'red'
  },
  Logo: {
    width: 60,
    height: 60,
  },
  con: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 40
  },
  button: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    borderWidth: 1,
    color: 'red',
    backgroundColor: 'yellow',
    padding: 10,
    height: 70,
    width: 100,
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 7
  }
});

export default Main;
