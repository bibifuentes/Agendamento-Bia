import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const [especialidade, setEspecialidade] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  const handleBuscar = () => {
    // Navega para a página de ResultadosBusca com parâmetros de busca
    router.push('/resultadobusca');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Boas Vindas */}
        <Text style={styles.welcomeText}>Boas Vindas</Text>

        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Digite sua especialidade"
            placeholderTextColor="#888"
            value={especialidade}
            onChangeText={setEspecialidade}
            color="black"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Digite sua localização"
            placeholderTextColor="#888"
            value={localizacao}
            onChangeText={setLocalizacao}
            color="black"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleBuscar}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.testimonialTitle}>Depoimentos</Text>

        <View style={styles.testimonialContainer}>
          <Text style={styles.testimonialText}>
            "Ótimo aplicativo, consegui agendar minha consulta sem complicações!" - Maria, 28 anos
          </Text>
          <Text style={styles.testimonialText}>
            "Prático e eficiente. A equipe de suporte também é excelente!" - João, 35 anos
          </Text>
          <Text style={styles.testimonialText}>
            "Facilitou muito meu dia a dia, recomendo a todos." - Ana, 42 anos
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  searchContainer: {
    marginBottom: 50,
    backgroundColor: '#D8D8D8',
    padding: 40,
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  testimonialTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  testimonialContainer: {
    marginTop: 10,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
});

export default Home;
