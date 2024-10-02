import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Cadastro3 = () => {
  const router = useRouter();
  const [planoSaude, setPlanoSaude] = useState('');

  const handleFinalizar = () => {
    router.push('/'); 
  };

  const handleVoltar = () => {
    router.push('/cadastro2');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/FrameLogin.png')} style={styles.userImage} />
      <Text style={styles.title}>Escolha seu Plano de Saúde</Text>

      
      <TouchableOpacity 
        style={[styles.option, planoSaude === 'Plano A' && styles.selectedOption]}
        onPress={() => setPlanoSaude('Plano A')}
      >
        <Text style={styles.optionText}>BRADESCO</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.option, planoSaude === 'Plano B' && styles.selectedOption]}
        onPress={() => setPlanoSaude('Plano B')}
      >
        <Text style={styles.optionText}>UNIMED</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.option, planoSaude === 'Plano C' && styles.selectedOption]}
        onPress={() => setPlanoSaude('Plano C')}
      >
        <Text style={styles.optionText}>SULAMERICA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.option, planoSaude === 'Plano C' && styles.selectedOption]}
        onPress={() => setPlanoSaude('Plano C')}
      >
        <Text style={styles.optionText}>OUTRO</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={[styles.option, planoSaude === 'Plano C' && styles.selectedOption]}
        onPress={() => setPlanoSaude('Plano C')}
      >
        <Text style={styles.optionText}>NÃO TENHO</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.button} 
        onPress={handleFinalizar}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  userImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cadastro3;
