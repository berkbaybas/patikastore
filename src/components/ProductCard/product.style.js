import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#eceff1',
        borderRadius: 5,
    },
    imageContainer: {
        flex: 1
    },
    textContainer: {
        flex: 2,
        justifyContent: 'space-between'
    },
    logo: {
        height : Dimensions.get('window').height / 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    price: {
        color: '#808080',
        fontWeight: '700'
    },
    inStock: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    }
});