# guess_my_number
# Guess My Number Game

Welcome to the "Guess My Number" game! This is a simple web-based game where the player tries to guess a random number between 1 and 20. The game provides feedback on each guess, indicating whether the guess is too high, too low, or correct. Players can also compete to achieve a new high score.

## Features

- **Random Number Generation**: A random number is generated for every new game.
- **User Input**: Players can input their guesses using an input field.
- **Feedback Messages**: Feedback is provided based on whether the guess is too high, too low, or correct.
- **Score Management**: Players start with a score of 20, which decreases with each incorrect guess.
- **High Score Tracking**: The highest score achieved in the session is displayed.
- **Reset Game**: Players can reset the game and start again using the "Again!" button.

## How to Play

1. Enter a number between 1 and 20 in the input field.
2. Click the **Check!** button to submit your guess.
3. Follow the feedback message:
   - 📈 "Too High!" if your guess is greater than the random number.
   - 📉 "Too Low!" if your guess is less than the random number.
   - 🎉 "Correct Number!" if your guess matches the random number.
4. The game ends when you guess the correct number or your score reaches 0.
5. Click the **Again!** button to reset the game and play again.

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the user interface.
- **JavaScript**: For game logic and interactivity.

## File Structure

- `index.html`: Contains the HTML structure of the game.
- `style.css`: Defines the visual styling for the game interface.
- `script.js`: Contains the game logic and interactivity.

## Game Logic

### Key Functions

1. **`generateRandomNumber()`**
   - Generates a random number between 1 and 20.

2. **`checkGuess()`**
   - Validates the player's input and provides feedback.

3. **`resetGame()`**
   - Resets the game state for a new round.

4. **`displayMessage(message)`**
   - Updates the feedback message on the screen.

5. **`correctGuess()`**
   - Executes actions when the correct number is guessed.

6. **`changeMessage(message)`**
   - Adjusts the score and displays appropriate messages for incorrect guesses.

### Event Listeners

- **Check Button**: Triggers the `checkGuess()` function to evaluate the player's input.
- **Again Button**: Triggers the `resetGame()` function to start a new game.

## Installation and Usage

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. Start guessing the number and enjoy the game!

## Customization

Feel free to modify the following elements to personalize the game:
- **Range**: Change the range of the random number in the `generateRandomNumber()` function.
- **Styling**: Update the `style.css` file to tweak the UI.

## Screenshot

![Guess My Number Game Screenshot](https://via.placeholder.com/800x600.png?text=Game+Screenshot)

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and share it as needed.

Enjoy the game!

