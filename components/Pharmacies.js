import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Pharmacies extends React.Component {    

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
       
      
<View style = {{ marginTop: 100, marginLeft: 60}}><Text style = {{fontSize: 48, fontWeight: "bold", fontFamily: 'sans-serif'}}>PHARMACIES</Text></View>



      <View style= {{marginTop: 30, marginLeft: 10}}>
     <Text>ALLIED PHAARMA</Text><Text>Rd Number 12, NBT Nagar, Banjara Hills, Hyderabad, Telangana 500034
     </Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('9246213877')}}><Text>Call Now</Text></TouchableOpacity></View>

   <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy</Text><Text>Door No 8/2, 289/8/G, Rd Number 14, Venkateshwara Nagar, Venkat Nagar, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('04023431722')}}><Text>Call Now</Text></TouchableOpacity></View>


      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy</Text><Text>No 13, D No 8/3/945/K & L, Shop No G2, Yellareddy Guda, Khairatabad, opposite Vasan Eye Care Hospital, Ameerpet, Hyderabad, Telangana 500073</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('04023431715')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy</Text><Text>Door No 2, 8/2/682, B/2A, Rd Number 12, Aurora Colony, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('04023431783')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy</Text><Text>1/G2, Ground Floor, 8/2/272/4, No 12, Mehdipatnam - Banjara Hills Rd, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('9177333641')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Hetero Pharmacy</Text><Text>Shop Number 8-3-231/1, Srinagar Colony Main Rd, near Mahesh Bank, Sri Nagar Colony, Krishna Nagar, Yousufguda, Hyderabad, Telangana 500045</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('040 2354 0069')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Mor Chemists</Text><Text>Shop No.1304, Rd Number 12, Near International Dental Care, Kaushik Society, Bhavani Nagar, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('7947163578')}}><Text>Call Now</Text></TouchableOpacity></View>

     <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Mukesh Medicals</Text><Text>6-3-666/1/2, 3 & 4D, Opp. NIMS Hospital, Punjagutta, to, Khairatabad Rd, Matha Nagar, Somajiguda, Hyderabad, Telangana 500082</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('098495 44001')}}><Text>Call Now</Text></TouchableOpacity></View>





      <TouchableOpacity style={{marginTop:40, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#fed8b1",
  width: 200,
  height: 60,
  marginTop: 50,
  marginLeft: 115,
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

export default Pharmacies;