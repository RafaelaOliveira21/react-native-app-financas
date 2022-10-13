import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require("../../../assets/Fundo.png")}
          style={{ width: '100%', height: 300 }}
          resizeMode="contain" />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8FF',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#F1F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
});