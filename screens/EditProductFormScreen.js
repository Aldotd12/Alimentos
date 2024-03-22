import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { updateProduct } from '../api';

const EditProductFormScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [product, setProduct] = useState({
    barcode: item.barcode,
    price: item.price,
    expiredDate: item.expiredDate,
    stock: item.stock
  });

  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  const handleSubmit = async () => {
    try {
      const updatedProduct = await updateProduct(product);
      console.log('Producto actualizado:', updatedProduct);
      navigation.navigate('HomeScreen'); // Regresamos al HomeScreen después de la actualización
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Producto</Text>
      <TextInput
        placeholder="Código de barras"
        onChangeText={(text) => handleChange('barcode', text)}
        style={styles.input}
        value={product.barcode}
      />
      <TextInput
        placeholder="Precio"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('price', parseFloat(text))}
        style={styles.input}
        value={product.price.toString()}
      />
      <TextInput
        placeholder="Fecha de caducidad"
        onChangeText={(text) => handleChange('expiredDate', text)}
        style={styles.input}
        value={product.expiredDate}
      />
      <TextInput
        placeholder="Existencias"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('stock', parseInt(text))}
        style={styles.input}
        value={product.stock.toString()}
      />
      <Button
        title="Actualizar"
        onPress={handleSubmit}
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
    paddingHorizontal: 30,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    height: 50,
    borderColor: '#41658A',
    borderWidth: 4,
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: '#000',
    width: 'auto',
  },
  button: {
    backgroundColor: '#621B00',
    padding: 18,
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
    width: '50%',
    alignSelf: 'center',
  },
});

export default EditProductFormScreen;
