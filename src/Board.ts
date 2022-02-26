/*
 * This is Board Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

function findBoardFoot(length: number, width: number) {
  // Assigning and specifying the volume of a board-foot
  const VOLUME = 144

  // Calculating the height of the board
  const height = VOLUME / (length * width)

  // Returning the height of the board
  return height
}
try {
  // Input for the length of the board
  const lengthInput = prompt("Enter the length of the board: ")
  console.log()

  // Input for the width of the board
  const widthInput = prompt("Enter the width of the board: ")
  console.log()

  // Ensuring the length and width variables are numbers
  const userLength = Number(lengthInput);
  const userWidth = Number(widthInput)

  // Process
  if (isNaN(userLength) == true || isNaN(userWidth) == true) {
    // Output if errors are detected
    console.log("ERROR: Invalid Input");
  } else {
    const heightOfBoard = findBoardFoot(userLength, userWidth)
    // Output if no errors detected
    console.log("The height of the board in one board-foot is", 
                heightOfBoard, "inches.")
  }

} catch (err) {
  console.log("ERROR: Invalid Input")
}
console.log("\nDone.")
