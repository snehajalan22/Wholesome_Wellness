import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, font} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";



class Spa extends React.Component {    

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
       
      <View style= {{marginTop:100 , marginLeft: 10}}>
     <Text>The Soul And Skin Spa And Saloon</Text><Text>502, Concourse House, Greenlands Rd, Divyashakti Appartments, Ameerpet, Hyderabad, Telangana 500016
     </Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 100}} onPress={()=>{this.triggerCalling('7995292348')}}><Text>Call Now</Text></TouchableOpacity>
 </View>

   <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Tattva Spa - Tank Bund Rd, Hyderabad</Text><Text>Hyderabad Marriott Hotel and Convention Centre 1-3, 1024, Lower Tank Bund Rd, Hyderabad, Telangana 500080 </Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('9999120413')}}><Text>Call Now</Text></TouchableOpacity></View>


      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Bliss Spa and Salon</Text><Text>3rd floor, Sanali Arcade, 8-2-270/1, Road No. 2, beside Anu Wines, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('96664 22722 ')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Somara Wellness</Text><Text>Lotus Pond, H.No: 8/2/293/82/L/259/C/B, beside Raavi Narayana Reddy Auditorium, Hyderabad, Telangana 500001</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('97049 11402')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>>Spa Nirvana</Text><Text>Burri Residency, 8-2-610/A, Silver Tower Banjara Floor, Rd Number 11, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('090008 89922')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Da Velvet Spa</Text><Text>M.No- 8 - 2 - 684/A, 2nd floor, Above Daman Organic Store, Kimiti Colony Gate 2, Rd Number 12, near Fortune Hotel, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('95427 27964')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Belezza Spa</Text><Text>8-2-684/4/A, 2nd floor Anand Banjara Colony, Kimtee Enclave, Rd Number 12, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('7947163578')}}><Text>Call Now</Text></TouchableOpacity></View>

     <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Envi Salon & Spa - Banjara Hills</Text><Text>8-2-684/3/162, Rd Number 12, Kaushik Society, Bhavani Nagar, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('93936 01415')}}><Text>Call Now</Text></TouchableOpacity></View>

      <TouchableOpacity style={{marginTop:20, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#fed8b1",
  width: 220,
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

  
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },


textInputStyle:{
marginTop: 10, marginLeft: 10, width: "80%", height: 40, alignSelf: "center", textAlign: "center", borderWidth: 1
},



})

export default Spa;