import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class Startscreen extends React.Component {
 goToMain=()=>{
   this.props.navigation.navigate("appNav2")
 }
  render() {
    return (

      <View>
      <TouchableOpacity onPress= {this.goToMain}><Text style= {news.Text}>Wholesome Wellness </Text></TouchableOpacity>
      <Image style ={news.Image} source = {require('../assets/well-being.png')} />
      <Image style ={news.Image1} source = {require('../assets/vegetables-1.png')} />
      <Image style ={news.Image2} source = {require('../assets/health-is-a-priority-flat.png')} />
      <Image style ={news.Image3} source = {require('../assets/dumbbell.webp')} />
     </View>
    )
    }
}
const news = StyleSheet.create({
  Text:{
    backgroundColor: "#F9A6C2", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 440,
   fontSize: 30,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 90,
   justifyContent: "center",
   borderRadius: 50,
 },
 
 Image:{
   width: 100,
   height: 100, 
 },

 Image1:{
    width: 100,
   height: 100, 
   marginLeft: 190,
   marginTop: 40,
 },
 
 Image2:{
   width: 110,
   height: 110, 
   marginLeft: 290,
   marginTop: -460,
   borderRadius: 200
 },

 Image3:{
    width: 110,
   height: 110, 
   marginLeft: 30,
   marginTop: -160,
 }
  }
)