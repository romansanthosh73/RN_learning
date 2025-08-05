import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, FlatList, Image, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RootStackParamList } from '../screens/types';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BackHandler } from 'react-native';


type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'BottomTabs'>;

export default function Dashboard() {

  const navigation = useNavigation<NavigationProps>();
  const [userinput, setuserinput] = useState("")
  const [loading, setloading] = useState(false)
  const [goloading, setgoloading] = useState(false)


  useEffect(
    () => {
      const BackAction = () => {
        return true
      };
      BackHandler.addEventListener('hardwareBackPress', BackAction);
    }, []
  );


  useEffect(() => {
    const BackAction = () => {
      Alert.alert("Exit App", "Do you Want to Exit ?", [{
        text: "cancel",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Exit",
        onPress: () => BackHandler.exitApp()
      }
      ],
        { cancelable: false })
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", BackAction)
    return () => backHandler.remove()
  }, [])


  const logout = () => {
    Alert.alert("Logout", "Do you want to logout ?", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => null,
      },
      {
        text: "Logout",
        onPress: () => navigation.goBack(),
      },
    ]);
  };



  useEffect(() => {
    if (userinput === "") {
      setloading(false);
      setgoloading(false);
      return;
    }


    setloading(true);
    setgoloading(true)

    const time = setTimeout(() => {
      setloading(false);
      setgoloading(false)

    }, 2000);

    return () => clearTimeout(time)

  }, [userinput]);


  const proglint = [
    {
      id: 16287289,
      name: 'Santhosh@proglint/ Mobile Developer',
      status: 'Active',
      Date: '20/11/2003',
      city: 'madurai',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$0.00',
      type_of_Business: 'NA',
      fico: 445,
      Credit_Grade: 'D',
      uw_status: 'Active',
      white_Label: 'NA',

    },
    {
      id: 2373929,
      name: 'Saravanananna@proglint/ Mobile Developer',
      status: 'Active',
      Date: '10/10/2025',
      city: 'chennai',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$1.00',
      type_of_Business: 'NA',
      fico: 555,
      Credit_Grade: 'A',
      uw_status: 'Active',
      white_Label: 'NA',
    },
    {
      id: 3379283,
      name: 'Aravindhbro@proglint/ Mobile Developer',
      status: 'Active',
      Date: '02/01/2025',
      city: 'madurai',
      collection_status: 'NA',
      engagement_Type: 'old',
      company_exposure: '$2.00',
      type_of_Business: 'NA',
      fico: 375,
      Credit_Grade: 'B',
      uw_status: 'Active',
      white_Label: 'NA',
    },
    {
      id: 4372930,
      name: 'Dhinabro@proglint /',
      status: 'Declined',
      Date: '20/11/2024',
      city: 'chennai',
      collection_status: 'NA',
      engagement_Type: 'old',
      company_exposure: '$2.00',
      type_of_Business: 'NA',
      fico: 135,
      Credit_Grade: 'D',
      uw_status: 'Declined',
      white_Label: 'NA'
    },
    {
      id: 5732993,
      name: 'Kishorebro@proglint',
      status: 'Declined',
      Date: '05/06/2023',
      city: 'madurai',
      collection_status: 'NA',
      engagement_Type: 'old',
      company_exposure: '$5.00',
      type_of_Business: 'NA',
      fico: 685,
      Credit_Grade: 'A',
      uw_status: 'Declined',
      white_Label: 'NA',
    },
    {
      id: 6382203,
      name: 'Thomasbro@proglint',
      status: 'Declined',
      Date: '08/07/2003',
      city: 'chennai',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$5.00',
      type_of_Business: 'NA',
      fico: 855,
      Credit_Grade: 'C',
      uw_status: 'Declined',
      white_Label: 'NA',
    },
    {
      id: 7372922,
      name: 'Sibibro@proglint',
      status: 'Declined',
      Date: '09/08/2022',
      city: 'salem',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$1.00',
      type_of_Business: 'NA',
      fico: 225,
      Credit_Grade: 'D',
      uw_status: 'Declined',
      white_Label: 'NA',
    },
    {
      id: 8320302,
      name: 'Vishwabro@proglint',
      status: 'Active',
      Date: '02/01/2020',
      city: 'Bengaluru',
      collection_status: 'NA',
      engagement_Type: 'old',
      company_exposure: '$0.00',
      type_of_Business: 'NA',
      fico: 975,
      Credit_Grade: 'A',
      uw_status: 'Active',
      white_Label: 'NA',
    },
    {
      id: 9382083,
      name: 'Gopalbro@proglint',
      status: 'Declined',
      Date: '02/04/2023',
      city: 'chennai',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$8.00',
      type_of_Business: 'NA',
      fico: 145,
      Credit_Grade: 'A',
      uw_status: 'Declined',
      white_Label: 'NA',
    },
    {
      id: 1039820,
      name: 'Gowthambro@proglint',
      status: 'Active',
      Date: '10/04/2023',
      city: 'karur',
      collection_status: 'NA',
      engagement_Type: 'New',
      company_exposure: '$7.00',
      type_of_Business: 'NA',
      fico: 845,
      Credit_Grade: 'D',
      uw_status: 'Active',
      white_Label: 'NA',
    }
  ]

  const highlightText = (text: string, search: string) => {
    if (!search) return <Text>{text}</Text>;                    //empty ahh iruntha original text

    const regex = new RegExp(`(${search})`, 'gi');           // case-insensitive match   g-globl find all matches i-ignorecase
    const parts = text.split(regex);

    return (
      <Text>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <Text key={index} style={{ backgroundColor: 'orange', fontWeight: 'bold' }}>{part}</Text>
          ) : (
            <Text key={index}>{part}</Text>
          )
        )}
      </Text>
    );
  };





  const filteredData = proglint.filter((item) => {
    return (
      item.name.toLowerCase().includes(userinput.toLowerCase()) ||
      item.id.toString().includes(userinput.toLowerCase()) ||
      item.city.toLowerCase().includes(userinput.toLowerCase())
    );
  });

  const renderItem = ({ item }: { item: typeof proglint[0] }) => {
    if (loading) return null;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BottomTabs", {
            id: item.id,
            name: item.name,
            status: item.status,
            Date: item.Date,
            city: item.city,
            collection_status: item.collection_status,
            engagement_Type: item.engagement_Type,
            company_exposure: item.company_exposure,
            type_of_Business: item.type_of_Business,
            fico: item.fico,
            Credit_Grade: item.Credit_Grade,
            uw_status: item.uw_status,
            white_Label: item.white_Label
          })
        }
      >
        <View style={style.text}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {highlightText(`${item.id} - ${item.name}`, userinput)}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {highlightText(`${item.status} - ${item.Date} - ${item.city}`, userinput)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };



  return (

    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={{ backgroundColor: 'orange', height: hp('15%'), }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 20 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ padding: 4, width: wp('12%'), borderRadius: 40 / 2, height: wp('12%'), backgroundColor: 'white', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>SH</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Welcome, User!</Text>
              <Text style={{ color: 'white' }}>sharikrishnan@byzfunder.com</Text>
            </View>
          </View>


          <TouchableOpacity onPress={logout} >
            <Image
              style={{ height: hp('3%'), width: wp('6%') }}
              source={require("../assets/logout_1.png")}
            />
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ backgroundColor: 'lightgray', height: hp('77%') }}>

        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TextInput
            placeholder="Search by Lead ID,Name,DBA..."
            placeholderTextColor='lightgray'
            style={{ width: wp('70%'), borderRadius: 10, backgroundColor: 'white', color: 'black', padding: 10 }}
            onChangeText={(text) => { setuserinput(text) }}
          />

          <TouchableOpacity
            style={{ width: wp('15%'), borderWidth: 1, borderRadius: 10, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>

            {goloading ? <ActivityIndicator size='small' color='white' /> : (<Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Go</Text>)}
          </TouchableOpacity>

        </View>
        <View style={{ margin: 'auto' }}>
          {loading && <View style={{ backgroundColor: 'white', height: hp('10%'), width: wp('90%'), borderRadius: 10 }}>
            <ActivityIndicator size='large' color='lightgray' />
            <Text style={{ textAlign: 'center', color: 'orange', fontSize: 20 }}> Searching leads.... </Text>
          </View>
          }

        </View>




        <View style={{ height: hp('68%'), justifyContent: 'center', alignItems: 'center' }}>
          {(!userinput) ? <Text>No user found</Text> : (
            <FlatList
              style={{ marginBottom: 10 }}
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>

      </View>


    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,


  }
})