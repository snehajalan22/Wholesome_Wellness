import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function FAQ() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        PLEASE EMAIL TO sneharjalan@gmail.com
      </Text>
      <Image style={styles.logo} source={require('../assets/225744.png')} />
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
    margin: 24,
    marginTop: 300,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
