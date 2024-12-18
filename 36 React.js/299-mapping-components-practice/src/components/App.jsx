import React from "react";
import EmojiID from "./EmojiID";
import emojipedia from "../emojipedia";

function App() {
  let emojiList = emojipedia.map((emoji) => {
    return (
      <EmojiID
        key={emoji.id}
        emoji={emoji.emoji}
        emojiName={emoji.name}
        emojiMeaning={emoji.meaning}
      />
    );
    return emojiList;
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiList}</dl>
    </div>
  );
}

export default App;
