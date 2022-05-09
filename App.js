//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Box,
  CheckIcon,
  CircleIcon,
  IconButton,
  NativeBaseProvider,
} from 'native-base';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconRn} from '@rneui/themed';

// create a component
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Home!</Text>
    </View>
  );
}
function ChatbotScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Chatbot!</Text>
    </View>
  );
}
function OptedScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Opted!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Profile</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      activeColor="#fff"
      labelStyle={{fontSize: 18}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={25} color="white" />
            // <IconRn name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Opted"
        component={OptedScreen}
        options={{
          tabBarLabel: 'Opted',
          tabBarIcon: ({color, size}) => (
            <Icon name="school" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBot"
        component={ChatbotScreen}
        options={{
          tabBarLabel: 'Chatbot',
          tabBarIcon: ({color, size}) => (
            <Icon name="robot" size={25} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="tools" size={25} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
