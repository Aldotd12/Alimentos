import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { insertProduct } from '../api';

const ProductFormScreen = ({ navigation }) => {
  const [product, setProduct] = useState({
    barcode: '',
    price: 0,
    foodType: '',
    expiredDate: '',
    totalPackages: 0,
    stock: 0
  });

  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  const handleEnviarFormulario = async () => {
    const res = await insertProduct(product);
    console.log(JSON.stringify(product));
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo Producto</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Código de barras"
          onChangeText={(text) => handleChange('barcode', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Precio"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('price', parseFloat(text))}
          style={styles.input}
        />
        <TextInput
          placeholder="Tipo de alimento"
          onChangeText={(text) => handleChange('foodType', text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Fecha de Caducidad'
          onChangeText={(text) => handleChange('expiredDate', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Total de bultos"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('totalPackages', parseInt(text))}
          style={styles.input}
        />
        <TextInput
          placeholder="Existencias"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('stock', parseInt(text))}
          style={styles.input}
        />
      </View>
      <Button
        title="Enviar"
        onPress={handleEnviarFormulario}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4AC45",
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  textInputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#41658A',
    borderWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 9,
    color: '#fff',
  },
  button: {
    backgroundColor: '#F50000',
    padding: 15,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    width: '40%',
    alignSelf: 'center',
  },
});

export default ProductFormScreen;
