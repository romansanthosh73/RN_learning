import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TouchID from 'react-native-touch-id';

export type RootStackParamList = {
    Newsignup: undefined;
    Dashboard: undefined;
    MyTabs: undefined;
    // User:{ id: number; name: string ; status:string; Date:string; city:string};
    BottomTabs: undefined;
};




export default function Newsignup() {


    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [loading, setloading] = useState(false)

    const handlesignin = () => {
        setloading(!loading)
        setTimeout(() => {
            navigation.navigate('MyTabs')
            setloading(false)

        }, 1500);
    }

    const optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };


    const handlesigninTouch = () => {
        TouchID.authenticate("Welcome to Microsoft",optionalConfigObject)
        // .then(() =>{
        //     Alert.alert("Authentication successfully")
        // }).catch(() =>{
        //     Alert.alert("Authentication error")
        // })
        
    }


    return (
        <SafeAreaView
            style={style.container}>
            <StatusBar barStyle={"light-content"} />


            <ImageBackground
                resizeMode="cover"
                style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
                source={require("../assets/background_1.png")}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 150 }}>
                    <Image
                        style={{ height: 90, width: 300, resizeMode: "contain" }}
                        source={require("../assets/logo_1.png")}
                    />
                    <View style={{ marginTop: 40 }}>
                        <Text style={style.text}>Let's get started</Text>
                    </View>
                    <TouchableOpacity
                        onPress={handlesignin}
                        style={{ borderWidth: 1, justifyContent: 'center', borderRadius: 30, width: wp('70%'), height: hp('6%'), padding: 5, marginTop: 10, flexDirection: 'row', gap: 15, backgroundColor: 'lightblue', alignItems: 'center' }}>
                        {!loading ?
                            (<><Image
                                style={style.micro}
                                source={require("../assets/microsoft_1.png")} /><Text
                                    style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Sign In With Microsoft</Text></>) : (
                                <ActivityIndicator size="large" />

                            )
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handlesigninTouch}
                        style={{ borderWidth: 1, justifyContent: 'center', borderRadius: 30, width: wp('70%'), height: hp('6%'), padding: 5, marginTop: 10, flexDirection: 'row', gap: 15, backgroundColor: 'lightblue', alignItems: 'center' }}>
                        {!loading ?
                            (<><Image
                                style={style.micro}
                                source={require("../assets/fingerprint_1.png")} /><Text
                                    style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Sign In With Touch ID</Text></>) : (
                                <ActivityIndicator size="large" />

                            )
                        }
                    </TouchableOpacity>

                </View>



            </ImageBackground>


        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        marginBottom: 30
    },
    micro: {
        height: 30,
        width: 30,

    }
})