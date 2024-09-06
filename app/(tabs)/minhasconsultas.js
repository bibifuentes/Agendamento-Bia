import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones

const MinhasConsultas = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>

      <TouchableOpacity style={styles.agendarButton}>
        <MaterialIcons name="calendar-today" size={24} color="#fff" />
        <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas Consultas</Text>
        <View style={styles.consultationItem}>
          <View style={styles.consultationDetails}>
            <Text style={styles.consultationText}>Consulta com Dr. Silva</Text>
            <Text style={styles.consultationText}>Data: 15/10/2024</Text>
            <Text style={styles.consultationText}>Horário: 10:00</Text>
          </View>
        </View>
        {/* Adicione mais consultas futuras aqui */}
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consultas Passadas</Text>
        <View style={styles.consultationItem}>
          <View style={styles.consultationDetails}>
            <Text style={styles.consultationText}>Consulta com Dr. Santos</Text>
            <Text style={styles.consultationText}>Data: 05/09/2024</Text>
            <Text style={styles.consultationText}>Horário: 11:00</Text>
          </View>
        </View>
        <View style={styles.consultationItem}>
          <View style={styles.consultationDetails}>
            <Text style={styles.consultationText}>Consulta com Dra. Costa</Text>
            <Text style={styles.consultationText}>Data: 12/09/2024</Text>
            <Text style={styles.consultationText}>Horário: 16:00</Text>
          </View>
        </View>
        {/* Adicione mais consultas passadas aqui */}
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Doutores Disponíveis</Text>
        <View style={styles.doctorCard}>
          <Text style={styles.doctorName}>Dr. José da Silva</Text>
          <Text style={styles.doctorSpecialty}>Cardiologista</Text>
          <TouchableOpacity style={styles.agendarButton}>
            <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doctorCard}>
          <Text style={styles.doctorName}>Dra. Ana Oliveira</Text>
          <Text style={styles.doctorSpecialty}>Dermatologista</Text>
          <TouchableOpacity style={styles.agendarButton}>
            <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>
        {/* Adicione mais doutores aqui */}
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
  agendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
  },
  agendarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  consultationItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  consultationDetails: {
    flex: 1,
  },
  consultationText: {
    fontSize: 16,
    color: '#333',
  },
  doctorCard: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
});

export default MinhasConsultas;
