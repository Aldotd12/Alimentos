import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const ProductItem = ({ item, deleteProd, navigation }) => {

  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <Text style={styles.textItem}>Código de barras: {item.barcode}</Text>
        <Text style={styles.textItem}>Precio de venta: {item.price}</Text>
        <Text style={styles.textItem}>Fecha de caducidad: {item.expiredDate}</Text>
        <Text style={styles.textItem}>Existencias: {item.stock}</Text>
        <Text style={styles.textItem}>Tipo de alimento: {item.foodType}</Text>
        <Text style={styles.textItem}>Total de bultos: {item.totalPackages}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            navigation.navigate('EditProductFormScreen', { item: item });
          }}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteProd(item.barcode)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(32, 163, 158, 0.8)', // Fondo transparente con un tono de verde
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  cardBody: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
  },
  textItem: {
    fontSize: 15,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonEdit: {
    backgroundColor: '#9CEC5B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonDelete: {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 7.05,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductItem;
