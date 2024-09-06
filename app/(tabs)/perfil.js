import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.profileTitle}>MEU PERFIL</Text>

        
        <Image source={require('../../assets/images/perfil.png')} style={styles.userImage} />

        <Text style={styles.infoText}>Nome: Bianca Fuentes</Text>
        <Text style={styles.infoText}>Idade: 17 Anos</Text>
        <Text style={styles.infoText}>Email: biapfu@gmail.com</Text>

        <View style={styles.separator} />

        <Text style={styles.historyTitle}>Histórico Médico</Text>
        <Text style={styles.historyText}>- Consulta com cardiologista em 12/08/2023</Text>
        <Text style={styles.historyText}>- Exame de sangue em 25/07/2023</Text>
        <Text style={styles.historyText}>- Cirurgia em 10/05/2023</Text>
      </ScrollView>
    </View>
  );
}

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
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  historyText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
  },
});

export default Perfil;
