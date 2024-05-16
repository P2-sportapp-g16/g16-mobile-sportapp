import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

let data = [
];

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.20.10.2:3000/trainings');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (title: String) => {
    Alert.alert('Iniciar', `El botón del ${title} ha sido presionado`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.fin_sesion}</Text>
      <Text style={styles.description}>{item.notas}</Text>
      <Text style={styles.description}>{item.notas}</Text>
      <Button title="Iniciar" onPress={() => handlePress(item.title)} />
    </View>
  );

  const createTraining = async () => {
    try {
      const response = await fetch('http://172.20.10.2:3000/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega aquí cualquier otra cabecera necesaria
        },
        body: JSON.stringify({
          // Agrega aquí el cuerpo de la solicitud
          "id_usuario": "1",
          "id_plandeportivo": "1",
          "riesgo": "biologico",
          "inicio_sesion": "2024-04-10 18:00:00",
          "fin_sesion": "2024-04-10 18:00:20",
          "frecuencia_cardiaca": 200,
          "ritmo_cardiaco": 200,
          "calorias_quemadas": 1000,
          "distancia_recorrida": 3,
          "notas": "Casi me muero"
        }),
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
    } catch (error) {
      console.error('Error al consumir el endpoint:', error);
      Alert.alert('Error', 'Ha ocurrido un error al intentar obtener los datos del servidor');
    }
  }

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
      <Button title="Crear" onPress={() => createTraining()} />
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