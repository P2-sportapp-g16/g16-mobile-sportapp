import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const data = [
  { id: '1', title: 'Entrenamiento 1', description: 'Descripción del Entrenamiento 1' },
  { id: '2', title: 'Entrenamiento 2', description: 'Descripción del Entrenamiento 2' },
  { id: '3', title: 'Entrenamiento 3', description: 'Descripción del Entrenamiento 3' },
  { id: '4', title: 'Entrenamiento 4', description: 'Descripción del Entrenamiento 4' },
  { id: '5', title: 'Entrenamiento 5', description: 'Descripción del Entrenamiento 5' },
  { id: '6', title: 'Entrenamiento 4', description: 'Descripción del Entrenamiento 6' },
  { id: '7', title: 'Entrenamiento 5', description: 'Descripción del Entrenamiento 7' },
];

const App = () => {
  const handlePress = (title: String) => {
    Alert.alert('Iniciar', `El botón del ${title} ha sido presionado`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Iniciar" onPress={() => handlePress(item.title)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entrenamientos</Text>
      <Calendar
        // Puedes añadir aquí las propiedades que necesites para personalizar el calendario
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        style={styles.calendar}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  header: {
    fontSize: 32,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50, // Ajusta esto si necesitas un margen superior diferente
  },
  calendar: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    margin: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default App;