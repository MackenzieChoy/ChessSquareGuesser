import React, { useState, useEffect } from 'react';
import { View, Text } from './Themed';
import { StyleSheet } from 'react-native';


import ChessSquare from './ChessSquare';


/**
 * Dynamically sets up the board 
 * 
 * @returns the Chess board
 */
function setupBoard() {
    let coordLetters = ['A', 'B', 'C', 'D', 'E', 'F' , 'G' , 'H'].reverse() 
    let board = [];
    // Populate next row
    for(let i = 0; i < 8; i++){
        let rank = i % 2 ? 'odd' : 'even';
        for(let j = 0; j < 8; j++){
            const coordSquare = `${coordLetters[j]}${i +1}`;
            rank === 'odd' ? 
            board.push(<ChessSquare key={coordSquare} color={j % 2 ? 'light' : 'dark'} coord={coordSquare} />) :
            board.push(<ChessSquare key={coordSquare} color={j % 2 ? 'dark' : 'light'} coord={coordSquare}/>) 
        }
    }
    return (board.reverse())
}

function checkSquareColor(board:[], coordinate:string){
    console.log(board)
}

export default function ChessBoard() {
        const [squares, setSquares] = useState(setupBoard())

        useEffect(()=>{
            console.log(squares)
        },[])
        return(
            <View>
                <Text>
                 {setupBoard()}
                </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    centerText: {
        zIndex:0,
        display:'flex',
        
        color:'purple',
        fontSize: 40

    },
})