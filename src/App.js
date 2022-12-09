import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Smiling",
  "😁": "Grin",
  "😆": "Laughing",
  "😅": "Sweat smile",
  "😉": "Wink",
  "🤣": "Rolling on the floor laughing",
  "🥰": "Love",
  "😊": "Blush",
  "😢": "Crying",
  "😇": "Innocent",
  "😲": "Suprised",
  "😑": "Annoyed",
  "😋": "Yum",
  "🥱": "Sleepy",
  "😂": "Joy",
  "😏": "Smirking",
  "🤔": "Thinking face",
  "🥳": "Partying Face",
  "🤩": " Star-Struck",
  "😎": "Smiling Face with Sunglasses",
  "🎄": "Christmas Tree",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🎁": "Wrapped Gift",
  "🎅": "Santa Claus",
  "🔥": "Fire",
  "👍": "Thumbs Up",
  "🎉": "Party Popper",
  "❄️": "Snowflake",
  "✔️": "Check Mark",
  "✅": "Check Mark Button",
  "💀": "Skull",
  "⭐": "Star",
  "👉": "Backhand Index Pointing Right",
  "💘": "Heart with Arrow",
  "💝": "Heart with Ribbon",
  "💖": "Sparkling Heart",
  "💗": "Growing Heart",
  "💓": "Beating Heart",
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": " Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🌈": "Rainbow",
  "🌞": "Sun with Face",
  "⭐": "Star",
  "🌟": "Glowing Star",
  "🌠": "Shooting Star",
  "☁️": "Cloud",
  "🏵️": "Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐘": "Elephant",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🐈‍": "Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐆": "Horse"
};

const list = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function listItemClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>Select your emoji!</h2>
      <input placeholder="put your emoji here" onChange={emojiInputHandler} />

      <h3>{meaning}</h3>

      <h4>Emojis We Know</h4>

      {list.map((item) => {
        return (
          <span
            className="emoji"
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{ padding: "5px", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
