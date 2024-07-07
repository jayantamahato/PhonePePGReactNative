import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MySnackbar from '../components/snackBar';

const PaymentScreen = () => {
  const [rs, setRs] = useState('0');
  const [paise, setPaise] = useState('0');
  //handel submit
  const handleSubmit = () => {
    //convert in paise

    const amount = parseInt(rs) * 100 + parseInt(paise);
    if (amount < 1) {
      MySnackbar('Invalid amount');
      return;
    }
    //initiate phone pe
  };
  return (
    <View>
      <View style={[style.screenName]}>
        <Text>PhonePe Payment Gateway</Text>
      </View>
      <View>
        <Text style={{margin: 10}}>Amount </Text>
        <View style={[style.amount]}>
          <TextInput
            style={[style.rsInput]}
            keyboardType="numeric"
            onChangeText={text => setRs(text)}
            placeholder="Enter Rupee"
          />
          <TextInput
            style={[style.paiseInput]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={text => setPaise(text)}
            placeholder="Enter Paise"
          />
        </View>
      </View>
      <TouchableOpacity style={[style.payBtn]} onPress={handleSubmit}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Initiate Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
const style = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
  },
  screenName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#5F259F',
    color: 'white',
  },
  amount: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rsInput: {
    height: 40,
    width: '45%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  paiseInput: {
    height: 40,
    width: '45%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  payBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '94%',
    margin: 10,
    backgroundColor: '#5F259F',
    color: 'white',
    borderRadius: 10,
  },
});
