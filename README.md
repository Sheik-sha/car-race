# 🚗 Car Racing Game

A fun and interactive browser-based car racing game built with HTML5, CSS3, and JavaScript. Control your car with arrow keys and avoid opponent cars to achieve the highest score!

## 🎮 Demo

Open `index.html` in your browser to start playing immediately!

## ✨ Features

- **Smooth Controls**: Intuitive arrow key navigation
- **Dynamic Gameplay**: Increasing difficulty with speed progression
- **Score System**: Real-time score tracking and high score persistence
- **Collision Detection**: Realistic car collision mechanics
- **Visual Effects**: Animated road lines and colorful opponent cars
- **Responsive Design**: Works on different screen sizes
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries required

## 🎯 How to Play

1. **Start the Game**: Click "Click here to start the game" on the start screen
2. **Control Your Car**: Use the arrow keys to navigate
   - ⬆️ **Up Arrow**: Move car upward
   - ⬇️ **Down Arrow**: Move car downward
   - ➡️ **Right Arrow**: Move car to the right
   - ⬅️ **Left Arrow**: Move car to the left
3. **Avoid Opponents**: Steer clear of the blue opponent cars
4. **Score Points**: Survive longer to increase your score
5. **Game Over**: The game ends when you collide with an opponent car

## 🛠️ Technology Stack

- **HTML5**: Game structure and elements
- **CSS3**: Styling, animations, and visual effects
- **JavaScript (ES6+)**: Game logic, controls, and mechanics
- **Google Fonts**: Lobster font for typography

## 📁 Project Structure

```
car-game/
├── index.html          # Main game file
├── style.css           # Game styling and animations
├── script.js           # Game logic and mechanics
└── README.md           # Project documentation
```

## 🚀 Installation & Setup

### Option 1: Direct Play (Recommended)
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start playing immediately!

### Option 2: Local Server (For Development)
1. Navigate to the project directory
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

## 🎨 Game Mechanics

### Player Car
- **Color**: Red
- **Size**: 50px × 75px
- **Starting Position**: Center of the road
- **Movement**: Smooth arrow key controls

### Opponent Cars
- **Color**: Blue (with random color variations)
- **Size**: 50px × 75px
- **Behavior**: Move from top to bottom at increasing speeds
- **Spawn**: Random horizontal positions

### Road Elements
- **Background**: Dark gray road with dashed white borders
- **Lane Markers**: White lines that move to create motion effect
- **Boundaries**: Confined movement area to keep cars on the road

### Scoring System
- **Score**: Increases continuously while playing
- **High Score**: Persists during the session
- **Speed**: Gradually increases to make the game more challenging

## 🔧 Customization

### Changing Car Colors
Edit the CSS in `style.css`:
```css
.car {
    background: #ff0000; /* Change player car color */
}

.Opponents {
    background: #0000ff; /* Change opponent car color */
}
```

### Adjusting Game Speed
Modify the speed values in `script.js`:
```javascript
let player = {
    speed: 5, // Initial speed
    // ...
}
```

### Adding Sound Effects
You can enhance the game by adding audio elements for:
- Car movement
- Collision sounds
- Background music
- Score milestones

## 🐛 Known Issues

- High score resets when the page is refreshed (local storage not implemented)
- Game optimized for desktop browsers (mobile touch controls not included)

## 🚀 Future Enhancements

- [ ] Add sound effects and background music
- [ ] Implement local storage for persistent high scores
- [ ] Add mobile touch controls
- [ ] Create multiple difficulty levels
- [ ] Add power-ups and special effects
- [ ] Implement a pause feature
- [ ] Add different car skins
- [ ] Create a level progression system

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using HTML5, CSS3, and JavaScript.

---

**Enjoy playing! 🎮**

*If you like this game, please give it a ⭐ on GitHub!* 