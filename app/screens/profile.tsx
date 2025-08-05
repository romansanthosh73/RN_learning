import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function Offer() {

  const navigation = useNavigation()
  const [product, setproduct] = useState<ProductType[]>([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    const fetchdata = fetch("https://fakestoreapi.com/products")

    fetchdata.then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproduct(data);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <View style={{ backgroundColor: 'orange', height: hp('15%') }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20, marginTop: 60 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={style.img} source={require('../assets/back_1.png')} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20 }}>Profile Page</Text>
          </View>
        </View>

        <FlatList
          data={product}
          style={{ height: hp('77%'), padding: 10, width: wp('100%') }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 15, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: hp('20%'), width: wp('50%') }} source={{ uri: item.image }} />
              <View style={{ flexDirection: 'row', marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>Title:</Text><Text> {item.title}</Text></View>
              <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold' }}>Price:</Text><Text> {item.price}</Text></View>
            </View>
          )}
        />
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