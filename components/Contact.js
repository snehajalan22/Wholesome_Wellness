import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Call- +91 9502181357
        Email- sneharjalan@gmail.com
      </Text>
      <Image style={styles.logo} source={require('../assets/yoga_wellness.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 15,
    marginTop: 150,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  }
});
