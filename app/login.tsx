import { Link, router } from 'expo-router';
import { StyleSheet, 
    ImageBackground, 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    StatusBar,
    TextInput,
    Pressable
 } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {

  const image = { uri: "../assets/images/bg.jpg" };

  const handleLogin = () => {
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const json = await response.json();
      console.log(json)
      router.navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <ImageBackground 
            source={require('../assets/images/bg.jpg')}
            style={styles.background}
            resizeMode="cover">
            <View style={styles.container}> 
                <StatusBar hidden={true} backgroundColor="black" barStyle="light-content" />
                <View style={styles.centeredContainer}>
                    <Image source={require('../assets/images/icon.png')} style={styles.icon} />
                </View>
                <Text style={styles.title}>SportApp</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User (email)"
                    textAlign="center"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    autoCapitalize="none"
                    maxLength={256}
                />
                <View>
                    <TextInput
                        style={styles.input2}
                        placeholder="Password"
                        textAlign="center"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>
                <Pressable style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
                <View style={styles.containerButtons}>
                    <Pressable style={styles.buttonRow1}>
                        <Text style={styles.buttonText2}>Sign up (web)</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                </Pressable>
            </View>
        
        </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        height: 40,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 16,
        color: 'white',
    },
    input2: {
      fontSize: 18,
      height: 40,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginBottom: 16,
      color: 'white',
    },
    buttonRow1: {
      flex: 1,
      paddingVertical: 12,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#FDE767',
    },
    forgotPassword: {
      alignSelf: 'center',
    },
    containerButtons:{
        margin: 0,
        flexDirection: 'row', // Alinea los elementos horizontalmente
        justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    },
    buttonText2: {
      color: '#FDE767',
      fontSize: 18,
      fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#FDE767',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    container: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 24,
      textAlign: 'center',
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
    centeredContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    icon: {
      width: 64,
      height: 64,
      marginBottom: -10
    },
    forgotPasswordText: {
      color: 'white',
      fontSize: 14,
      textDecorationLine: 'underline',
    },
  });