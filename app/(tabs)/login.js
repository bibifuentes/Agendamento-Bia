import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'; 
import { useRouter } from 'expo-router';

const Cadastro = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>

      <Image source={require('../../assets/images/FrameLogin.png')} style={styles.userImage} />


        <Text style={styles.title}>Faça Login em sua conta!</Text>

       

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            color="black"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry={true}
            color="black"
          />

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/cadastro')}>
          <Text style={styles.registerButtonText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', 
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 30,
    alignItems: 'center', 
  },
  input: {
    height: 50,
    width: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 19,
    color: 'black',
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default Cadastro;
