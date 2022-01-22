import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function About() {

   goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Wellness is the act of practicing healthy habits on a daily basis to attain better physical and mental health outcomes, so that instead of just surviving, you are thriving. Everybody needs it. This app contains a few actvities and essentials. We have included evrthing under each section so that you get a better access. This app is meant for users of Hyderabad Thank you for downloading this app and we hope you like it and its functionality.
      </Text>
      <Image style={styles.logo} source={require('../assets/yoga_wellness.png')} />
        <TouchableOpacity style={{marginTop:0, marginLeft: 70, justifyContent:"center", fontSize: 30}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>
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
