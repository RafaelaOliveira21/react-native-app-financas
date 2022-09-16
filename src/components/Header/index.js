import React from "react";
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
 
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.username}>Rafaela Oliveira</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFFFFF"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0597F2',
    paddingTop: statusBarHeight,
  }
})