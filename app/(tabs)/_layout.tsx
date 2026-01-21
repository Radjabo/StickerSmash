import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: '#25292e',
        }, 
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home', 
          headerTitleAlign: 'center',          
          tabBarIcon:( { color, focused}) => (
            <Ionicons 
              name={ focused ? 'home-outline' : 'home-outline'} 
              color={color} size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="apropos" 
        options={{
          title: 'À propos', 
          headerTitleAlign: 'center',
          tabBarIcon:( { color, focused}) => (
            <Ionicons name={ focused ? 'information-circle-outline' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}
