import { View, Text ,SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories.js'
import RestaurantItems, { localRetaurants } from '../Components/RestaurantItems'


export default function Home() {
  const [restaurantData,setRestaurantData]= React.useState(localRetaurants);
  return (
    <SafeAreaView style ={{backgroundColor:"#eee", flex:1 }}>
      <View style={{backgroundColor:"teal", padding: 15}}>
      <HeaderTabs/>
      <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator ={false}>
      <Categories/>
      <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  )
}