import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

const ResultadosBusca = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultados da Busca</Text>

      {/* Seção para resultados da busca */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Médicos Disponíveis</Text>

        <View style={styles.doctorCard}>
          <Text style={styles.doctorName}>Dr. João Pereira</Text>
          <Text style={styles.doctorSpecialty}>Cardiologista</Text>
          <Text style={styles.doctorLocation}>Localização: Centro</Text>
          <TouchableOpacity style={styles.agendarButton}>
            <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.doctorCard}>
          <Text style={styles.doctorName}>Dra. Marta Silva</Text>
          <Text style={styles.doctorSpecialty}>Dermatologista</Text>
          <Text style={styles.doctorLocation}>Localização: Centro</Text>
          <TouchableOpacity style={styles.agendarButton}>
            <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.doctorCard}>
          <Text style={styles.doctorName}>Dr. Carlos Santos</Text>
          <Text style={styles.doctorSpecialty}>Ortopedista</Text>
          <Text style={styles.doctorLocation}>Localização: Ubirama</Text>
          <TouchableOpacity style={styles.agendarButton}>
            <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>
        
        {/* Adicione mais médicos disponíveis aqui */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorCard: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  doctorLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  agendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  agendarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ResultadosBusca;
