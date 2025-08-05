import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from "react-redux";
import { Appdispatch, Rootstate } from "../redux/store";
import { useEffect } from "react";
import { fetchproducts } from "../redux/product";



export default function Offer() {

  const navigation = useNavigation()

  const dispatch = useDispatch<Appdispatch>()

  const { items, error, loading } = useSelector((state: Rootstate) => state.products)


  useEffect(() => {
    dispatch(fetchproducts())
  },[])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <View style={{ backgroundColor: 'orange', height: hp('15%') }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20, marginTop: 60 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={style.img} source={require('../assets/back_1.png')} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20 }}>Offer Page</Text>
          </View>
        </View>


      </View>
      <View style={{ height: hp('77%') }}>
        {loading ? <ActivityIndicator size='large' /> :
          <FlatList
            style={{ padding: 10 }}
            data={items}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) =>
              <View style={{ margin: 20, borderRadius: 10, borderWidth: 1, padding: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: hp('20%'), width: wp('30%') }}
                  source={{ uri: item.image }}
                />
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold' }}>Price: $</Text><Text>{item.price}</Text></View>

                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold' }}>Title: </Text><Text>{item.title}</Text></View>

              </View>
            }
          />}
      </View>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  img: {
    height: hp('4%'),
    width: wp('9%')
  },
})