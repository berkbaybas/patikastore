import React from 'react';
import {View, FlatList,Text,Image, StyleSheet} from 'react-native';
import styles from './product.style'

const ProductCard = ({product}) => {
  var inStock = product.inStock;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
        style={styles.logo}
          source={{
            uri: product.imgURL,
          }}
          resizeMode = 'stretch'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        { !inStock && (
          <Text style= {styles.inStock}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  );

};

export default ProductCard;