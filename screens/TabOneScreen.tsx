import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChessSquare  from '../components/ChessSquare';
import ChessBoard from '../components/ChessBoard';
import { generateCoordinates, getRandomCoordinate } from '../hooks/useRandomCoordinate'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let coordList = generateCoordinates();
  const [coordinate, setCoordinate] = useState(getRandomCoordinate(coordList))
  
  /**
   * Takes the users guess and compares it to the Random coordinate.
   * 
   * @param guess the color of the square
   */
  function guessColor(guess:string){
    setCoordinate(getRandomCoordinate(coordList))
    console.log(<ChessBoard></ChessBoard>)
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color guesser</Text>
      <Text style={styles.title}>{coordinate}</Text>
      <ChessBoard />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="dark" onPress={() => guessColor('dark')}></Button>
      <Button title="light" onPress={() => guessColor('light')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
