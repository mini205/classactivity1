import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View>

      <View>
        <Image src={require('/img/welcome_to_rect.jpg')}></Image>
      </View>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>
      <Text>Enter Name:</Text>
      <TextInput placeholder="First Name"/>
      <Text>Enter Surname</Text>
      <TextInput placeholder="Surname"/>
      


<Button title="Add User"/>

    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center'
  }
 
});
