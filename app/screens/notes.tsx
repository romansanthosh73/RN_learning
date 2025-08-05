import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BottomTabParamList } from '../screens/types';
import { useState } from "react";

type UserRouteProp = RouteProp<BottomTabParamList, 'Notes'>;

export default function Notes() {
  const route = useRoute<UserRouteProp>();
  const { id } = route.params;
  const navigation = useNavigation();

  const [isclick, setisclick] = useState<number[]>([]);

  const handlepress = (index: number) => {
    if (isclick.includes(index)) {
      setisclick(isclick.filter(id => id !== index));
    } else {
      setisclick([...isclick, index]);

    }
  };

  const notesdetails = [
    {
      name: "Aneuris Batista @",
      Date: "01/04/2023",
      Time: "07:04 PM",
      Category: "Admin Note",
      Tags: "Decline Notes",
      list: "Insufficient average monthly cashflow"
    },
    {
      name: "System - Auto @",
      Date: "01/04/2023",
      Time: "06:54 PM",
      Category: "General",
      Tags: "Email Notes",
      list: "Hello, please see the attached deal for submission. Thank you"
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ backgroundColor: 'orange', height: hp('15%') }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20, marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={style.img} source={require('../assets/back_1.png')} />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>Lead ID: {id}</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'white', height: hp('80%') }}>
        <FlatList
          style={{ padding: 10 }}
          data={notesdetails}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            const isOpen = isclick.includes(index);

            return (
              <View>
                <TouchableOpacity onPress={() => handlepress(index)} style={style.card}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={style.name}>{item.name} {item.Date} {item.Time}</Text>
                    <Image
                      style={{ height: hp('3%'), width: wp('6%') }}
                      source={
                        isOpen ? require("../assets/uparrow_1.png") : require("../assets/downarrow_1.png")
                      }
                    />
                  </View>
                </TouchableOpacity>

                {isOpen && (
                  <View style={{ backgroundColor: 'lightyellow', padding: 10 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                      <Text style={{ fontWeight: 'bold' }}>Category:</Text>
                      <Text style={{ fontWeight: 'bold' }}> {item.Category}</Text>
                    </View>
                    <Text>{item.list}</Text>
                    <View style={{ marginBottom: 5 }}>
                      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Tags:</Text>
                      <Text style={style.tag}>{item.Tags}</Text>
                    </View>

                  </View>
                )}
              </View>
            );
          }}

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
  card: {
    backgroundColor: 'lightgray',
    padding: 12,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  details: {
    marginTop: 8
  },

  tag: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start'
  }

});
