import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../config/axios';
import Loader from '../components/Loader';
import { SUPPLIERS_URL } from '../config/urls';
import { transformName } from '../config/helpers';
import styles from '../styles/doctorsStyles';
import { ListItem, Text, Avatar, SearchBar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import SupplierDetails from './SupplierDetails';

export default function SuppliersScreen() {
  const [loading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [value, setValue] = useState("")
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      _getSuppliers(value)
    }, 1000)
    return () => clearTimeout(timerId)
  }, [value])


  const _getSuppliers = async (query) => {
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem('accessToken')
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const response = await axios.get(SUPPLIERS_URL, {
        params: {q: query ? query : ''}
      });

      setSuppliers(response.data)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }

  const itemPressHandler = (itemId) => {
    setSelectedSupplier(suppliers.find((supplier) => supplier.id === itemId))
  }

  return (
    <View style={styles.container}>
      <Loader loading={loading} title="جاري إحضار الأطباء" />
      <ScrollView>

        <SupplierDetails
        selectedSupplier={selectedSupplier}
        closeModal={() => setSelectedSupplier(null)}
        />
        <KeyboardAvoidingView behavior='padding' enabled>
          <SearchBar
          placeholder='أبحث هنا ...'
          containerStyle={{backgroundColor: '#FBFBFB'}}
          inputContainerStyle={{backgroundColor: "#E5E4EA"}}
          style={{direction: 'rtl'}}
          value={value}
          onChangeText={text => setValue(text)}
          lightTheme
          round
          />
        <SafeAreaView>
          {suppliers.length !== 0 ?
          (suppliers.map((l, i) => {
            return (
              <ListItem key={i} 
              Component={TouchableScale}  
              friction={90} //
              tension={100} 
              activeScale={0.9}
              onPress={() => itemPressHandler(l.id)} >
                <Avatar
                size={40}
                rounded
                title={transformName(l.name)}
                containerStyle={{backgroundColor: '#3d4db7'}}
                />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.profile.specialization}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            )
          }))
          :
          <Text style={styles.noSuppliersText}>لايوجد أطباء لعرضهم</Text>
          }
        </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}