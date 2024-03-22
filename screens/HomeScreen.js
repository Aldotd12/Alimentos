import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenido</Text>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    textAlign: 'center',
    color: '#ff0000',
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
