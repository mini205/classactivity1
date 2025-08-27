import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreen } from 'react-native-screens';
import { Animated } from 'react-native';


const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function MainScreen({ navigation , route }:any)  {
const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

console.log("App starting up");
return(
<View>
  <SafeAreaView >
    <ScrollView >  
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./img/welcome_to_rect.jpg')}></Image>
      </View>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>
      <FadeInView>
      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Name:</Text>
       <TextInput style={styles.InputBoxs} placeholder="First Name" 
        onChangeText={newText => setName(newText)}
       />
       </View>
       <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Surname</Text>
        <TextInput style={styles.InputBoxs} placeholder="Surname"
       onChangeText={newText => setSurname(newText)}
        />

       </View>
      <Button title="Add User"
      onPress={() => {
        console.log("Name: " + Name + " Surname: " + Surname)
      }}></Button>
      </FadeInView>
      </ScrollView>
      </SafeAreaView>
      </View>
)
};

// Animation Component
const FadeInView = (props:any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect (() => {
    Animated.timing(
      fadeAnim, 
      { toValue: 1,
        duration: 3000,
        useNativeDriver: false

      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
    style={{
      ...props.style,
      opacity: fadeAnim,
    }}
    >
      {props.children}
    </Animated.View>
  );
}

function ViewDetails({ navigation , route} :any) {
  const NammeGet = route.parms.NameSend;
  const SurnameGet = route.parms.SurnameSend;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Name : {NammeGet} Surname: {SurnameGet}</Text>
       
        </View> 

      );
    };



const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center'
  },
  HeadingText: {
      paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center'
  },

  InputBoxs: {
    fontSize:32,
    backgroundColor:'yellow',
    paddingHorizontal:20,
    width:150,

  },

    ImageSize: {
      width: 350,
      height: 350
    },

    mainPicture: {
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    InputFlex:{
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'space-evenly',
    },
    
 
});
