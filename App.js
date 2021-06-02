import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';
import products from './products.json';
import ProductCard from './src/components/ProductCard';

const App = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            <TextInput style={styles.search} placeholder="Ara.." />
          </View>
        )}
        style={styles.flatList}
        data={products}
        renderItem={renderProduct}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  flatList: {
    backgroundColor: 'white',
  },
  search: {
    backgroundColor: '#eceff1',
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: Dimensions.get('window').height / 18,
  },
});

export default App;
