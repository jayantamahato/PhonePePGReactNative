import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Snackbar from 'react-native-snackbar';

const MySnackbar = title => {
  Snackbar.show({
    text: title,
    duration: Snackbar.LENGTH_SHORT,
  });
};

export default MySnackbar;
