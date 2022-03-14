import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import AntIcon from "react-native-vector-icons/AntDesign";




export default function SearchBar() {
  return (
    <View style={{marginTop:15 , flexDirection:"row"}}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      styles={{
        textInput:{
          backgroundColor:"#eee",
          borderRadius:20,
          fontWeight:"700",
          marginTop:7,
        },
        textInputContainer:{
          backgroundColor:"white",
          borderRadius:50,
          flexDirection:"row",
          alignItems:"center",
          marginRight:10,
        },
      }}
     renderLeftButton={()=>(
<View style={{marginLeft:20}}>
  <AntDesign name='CompassOutlined' size={24} />

 

</View>
     )} 


     renderRightButton={()=> (
<View
style = {{
  flexDirection:'row',
  marginRight:10,
  backgroundColor:"white",
  paddding:9,
  borderRadius:30,
  alignItems:"center",

}}>
  <AntDesign name= 'clockcircle' size={19} style={{marginRight:6}}/>
     <Text> Search </Text>
</View>
     )}

      />
    </View>
  );
}