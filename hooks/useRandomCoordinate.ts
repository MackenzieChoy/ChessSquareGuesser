/**
 * Generates a list of all possible chess coordinates
 *
 * @returns chess coordinates
 */
export function generateCoordinates(): string[] {
  let coordLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let coordinates = [];
  // Populate next row
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const coordSquare = `${coordLetters[j]}${i + 1}`;
      coordinates.push(coordSquare);
    }
  }
  return coordinates;
}

/**
 * Returns a random chess coordinate from
 * @param coordItems The list of chess coordinates
 * @returns
 */
export function getRandomCoordinate(coordItems: string[]) {
  return coordItems[Math.floor(Math.random() * coordItems.length)];
}
