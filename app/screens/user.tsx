import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomTabParamList } from '../screens/types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




type UserRouteProp = RouteProp<BottomTabParamList, 'Home'>;

export default function User() {
  const route = useRoute<UserRouteProp>();
  const { name, id, status, city, Date, collection_status, engagement_Type, company_exposure, type_of_Business, fico, Credit_Grade, uw_status, white_Label } = route.params;

  const navigation = useNavigation()

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ backgroundColor: 'orange', height: hp('15%') }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10, padding: 20, marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={style.img}
              source={require('../assets/back_1.png')}
            />
          </TouchableOpacity>

          <Text style={{ color: 'white', fontSize: 20 }}>Lead ID: {id}</Text>
        </View>

      </View>
      <View style={{ padding: 20 }}>
        <View style={style.con}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Lead Name:</Text>
            <Text style={{ fontSize: 14, color: 'black', width: wp('40%'), textAlign: 'right', }}>{name}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Lead ID:</Text>
            <Text style={{ fontSize: 14, color: 'black', width: wp('40%'), textAlign: 'right', }}>{id}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>City:</Text>
            <Text style={{ fontSize: 14, color: 'black', width: wp('40%'), textAlign: 'right', }}>{city}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Status:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{status}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Date:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{Date}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Collection Status:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{collection_status}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Engagement Type:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{engagement_Type}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Company Exposure:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{company_exposure}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Type of Business:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{type_of_Business}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', }}>FICO:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{fico}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>Credit Grade:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{Credit_Grade}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>UW Status:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{uw_status}</Text>
          </View>
          <View style={style.row}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', }}>White Label:</Text>
            <Text style={{ fontSize: 14, color: '#333', width: wp('40%'), textAlign: 'right', }}>{white_Label}</Text>
          </View>

        </View>
        
      </View>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  img: {
    height: hp('4%'),
    width: wp('9%')
  },
  con: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'lightgray'

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,

  },


})