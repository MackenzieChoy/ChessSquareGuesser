import * as React from 'react';

import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';




type Sqaure = {
    /**
     * The color of the square
     */
    color: string, 
    /**
     * Display text 
     */
    text?: string, 
    /**
     * The coordinate of the square
     */
    coord: string,
}

export default function ChessSquare(props : Sqaure) {
    return(
        <View style={props.color === 'dark' ? styles.darkSquare : styles.lightSquare }> 
        <Text style={styles.square}>{props.text ? props.text : props.coord}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    darkSquare: {
        backgroundColor: 'green',
        width:50,
        height:50

    },
    lightSquare:{
        backgroundColor:'white',
        width:50,
        height:50
    },
    square:{
        display:'flex',
        textAlign: "center",
        color:'black'
    }
  });