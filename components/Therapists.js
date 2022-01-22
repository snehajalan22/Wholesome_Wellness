import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Therapists extends React.Component {    

  constructor(){
    super()
    this.state={
      text:"",
      numbers:[]
    }
  }
  triggerCall=()=>{
    if(this.state.numbers.length != 10){
    alert("Insert correct number")
    }
  }
  
 triggerCalling= (s) => {
    // Check for perfect 10 digit length
   
    

    const args = {
      number: s,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };


   

  goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }

   goTocall=()=>{
    this.props.navigation.navigate("appNav6")
  }

  goTomom=()=>{
this.props.navigation.navigate("appNav3")
  }

  goTodad=()=>{
this.props.navigation.navigate("appNav4")
  }

  render() {
    return (
      <ScrollView>
       
      


<View style = {{ marginTop: 100, marginLeft: 160}}><Text>Therapists</Text></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('097013 94932')}}><Text>Psynapse Psychological Counselling Services: Shruti Naik</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('4023354766')}}><Text>Sringar Centre for Medical Psychology and Rehabilitation - Dr. Kalpana Sringar</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('6309648540')}}><Text>Mind O Mind</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('9390044031')}}><Text>Dr. Hypno Kamalakars Mind and Personality Care - Psychological Counselling Clinic
</Text></TouchableOpacity></View>
      

       <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('9849574265')}}><Text>Genesis Mental Well Being Center</Text></TouchableOpacity></View>

    


      <TouchableOpacity style={{marginTop:20, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#CCF1FF",
  width: 300,
  height: 105,
  marginTop: 50,
  marginLeft: 90,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
},

Add:{
backgroundColor: "#ffffed",
  width: 300,
  height: 40,
  marginTop: 10,
  marginLeft: 30,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
},


textInputStyle:{
marginTop: 10, marginLeft: 10, width: "80%", height: 40, alignSelf: "center", textAlign: "center", borderWidth: 1
}



})

export default Therapists;