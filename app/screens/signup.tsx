
// import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, BackHandler, Button, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Modal } from 'react-native';
import Snackbar from 'react-native-snackbar';


 
function Signup() {

  useEffect(() => {
    const backAction = () => {
      setExitModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [exitModal, setExitModal] = useState(false);
  const [showpassword, setshowpassword] = useState(true)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const usernameref = useRef<TextInput>(null);
  const passwordref = useRef<TextInput>(null);

  // const navigation=useNavigation()


  const [validerror, setValiderror] = useState('')


  const togglepassword = () => {
    setshowpassword(!showpassword)

  }

  const handleSignIn = () => {
    let valid = true;

    let UpperCase = /^(?=.*[A-Z]).{1,}$/;
    let SpecialCharacter = /^(?=.*[!@#$%^&*]).{1,}$/;
    let LowerCase = /^(?=.*[a-z]).{1,}$/;



    if (username === '') {
      setUsernameError('Enter the username');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Enter the password');
      valid = false;
    }
    else if (UpperCase.test(password) === false) {
      setPasswordError('Password must contain at least one uppercase letter missing');
      valid = false;
    }
    else if (SpecialCharacter.test(password) === false) {
      setPasswordError('Password must contain at least one special character missing');
      valid = false;
    }
    else if (LowerCase.test(password) === false) {
      setPasswordError('Password must be at least 8 characters long, contain at least one lowercase letter missing');
      valid = false;
    }
    else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    }
    else {
      setPasswordError('');
    }

  //   if (username !== 'santhosh.p@proglint.com') {
  //   setValiderror('Invalid username');
  //   valid = false;
  // } else {
  //   setValiderror('');
  // }

    

    if (username !== 'santhosh.p@proglint.com' ) {
    Snackbar.show({
      text: 'Invalid password',
      duration: Snackbar.LENGTH_SHORT
      
    });
    return;
  }


    if (valid) {
      Alert.alert("Login Successful", `Welcome to the SRM Campus Wallet ${username}`);

    }
  };


  // const passwordrules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


        <Image
          source={require('../assets/SRM_Logo.png')}
          style={styles.img}
        />
        <Text style={{
          color: '#1D4E9E',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 18


        }}>SRM Campus Wallet</Text>

        <View>

          <Text style={{
            fontSize: 13,
            marginTop: 10
          }}>Your digital campus experience</Text>
        </View>
        <View>
          <Image
            source={require('../assets/Login_BG.png')}
            style={styles.bgimg}
          />
        </View>



        <View style={{ borderWidth: 2, borderColor: 'lightgray', borderRadius: 20, padding: 1, width: 330, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>Username
          <TextInput style={{ padding: 10, fontSize: 16, color: 'black', width: 295 }}
            placeholder="Username"
            placeholderTextColor='lightgray'
            value={username}
            onChangeText={(text) => setUsername(text)}
            ref={usernameref}
            onSubmitEditing={() => passwordref.current?.focus()}
          />
          <Image
            style={{ height: 20, width: 20, marginRight: 10 }}
            source={require('../assets/profile.png')} />
        </View>
        {usernameError !== '' && (
          <Text style={styles.errorText}>{usernameError}</Text>
        )}

        <View style={{ borderWidth: 2, borderColor: 'lightgray', marginBottom: 6, borderRadius: 20, marginTop: 10, padding: 1, width: 330, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>Username
          <TextInput style={{ padding: 10, fontSize: 16, color: 'black', width: 295 }}
            secureTextEntry={showpassword}
            placeholder="Password"
            placeholderTextColor={'lightgray'}
            value={password}
            onChangeText={(text) => setPassword(text)}
            ref={passwordref}
            onSubmitEditing={() => passwordref.current?.focus()}
          />
          <TouchableOpacity onPress={togglepassword}>

            <Image
              style={styles.icon}
              source={showpassword ? require('../assets/lock.png') : require('../assets/unlock.png')}
            />
          </TouchableOpacity>
        </View>
        {passwordError && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}


        <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
          <TouchableOpacity onPress={handleSignIn} style={styles.signinbtn}>
            
            <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{ color: 'lightgray', marginTop: 15 }}>Forgot Your Password ?</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text>Powered by</Text>
          <Image
            source={require('../assets/Proglint_Logo.png')}
            style={{ height: 15, width: 60, resizeMode: 'contain', marginTop: 3, justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      </KeyboardAvoidingView>

      <Modal
        transparent={true}
        visible={exitModal}
        animationType="fade"
        onRequestClose={() => setExitModal(false)}
      >
        <View style={{
          flex: 1, backgroundColor: 'rgba(36, 34, 34, 0.5)', justifyContent: 'center', alignItems: 'center'
        }}>
          <View style={styles.modalContainer}>
            <Text style={{
              fontSize: 18, fontWeight: 'bold', marginBottom: 10
            }}>Exit App</Text>
            <Text style={{ fontSize: 15, marginBottom: 20, textAlign: 'center' }}>Do you want to exit?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: 'lightgray' }]}
                onPress={() => setExitModal(false)}
              >
                <Text style={{ color: '#000' }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#004AAD' }]}
                onPress={() => BackHandler.exitApp()}
              >
                <Text style={{ color: '#fff' }}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

     
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20
    // alignItems: 'center'

  },
  img: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
    marginTop: 30
  },
  bgimg: {
    height: 200,
    width: 250,
    resizeMode: 'contain',
  },
  signinbtn: {
    backgroundColor: '#004AAD',
    padding: 13,
    borderRadius: 20,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 13
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5
  }

});

export default Signup;

