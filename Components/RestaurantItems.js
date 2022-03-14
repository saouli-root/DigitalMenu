import React from 'react'
import { View, Text ,Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from  "react-native-vector-icons/MaterialCommunityIcons"


export const localRestaurants=[
  {
  name:"beachside Bar",
  image_url:"https://media-cdn.tripadvisor.com/media/photo-s/07/85/f5/e7/playatao-beach-club-restaurant.jpg",
  categories:"9$$",
  reviews:1244,
  rating:4.5,
},

{
  name:"beachside Bar",
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-pJMuuqykYPR2HKu2ufm7flbj2CiR5S8cA&usqp=CAU",
  categories:"122$$",
  reviews:1244,
  rating:4.5,
 
},

{
  name:"beachside Bar",
  image_url:"https://yureplace.com/wp-content/uploads/2020/04/IMG_4009.jpg",
  categories:"200$$",
  reviews:1244,
  rating:4.5,
  
},


];


export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      {localRestaurants.map((restaurant,index) => ( 
    <View 
    key={index}
    style={{marginTop:10 ,padding:15, backgroundColor:"white"}}>
   < RestaurantImage 
   image={restaurant.image_url}/> 
   < RestaurantInfo 
   name={restaurant.name} 
   rating={restaurant.rating}
   /> 
    </View>
    ))}
    </TouchableOpacity>
  );
}
const RestaurantImage =(props) => (
    <>
             <Image 
             source ={{
             uri:"props.image"
             }}
             style={{width:"100%" , height: 180}}
             />

<TouchableOpacity style = {{ position:"absolute" , right: 30 , top: 20}}>

<MaterialCommunityIcons name = "heart-outline" size={25} color="red" />

</TouchableOpacity>
    </>
);
const RestaurantInfo =(props) => (
      <View 
    style ={{
    flexDirection:"row" , 
    justifyContent: "space-between" , 
    alignItems:"center" ,
    marginTop:10,
    }} >
      <View>
<Text style ={{ fontSize:15 , fontWeight: "bold"}}>{ props.name} </Text>
<Text style={{ fontSize:15 , color:"gray"}}> 30 -45 . min</Text>
     </View>


<View
style={{ backgroundColor:"white", height:30 , width:30, alignItems:"center" , borderRadius:15 , justifyContent: "center"}} >
<Text> {props.rating} </Text>
</View>
    </View>
)