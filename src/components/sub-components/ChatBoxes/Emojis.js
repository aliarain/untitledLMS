import React, {useState} from 'react'
import Picker from 'emoji-picker-react';
import './css/Chat.css'

function Emojis() {
    var realEmoji = ""
    const [chosenEmoji, setChosenEmoji] = useState("emoji");
    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
      realEmoji = chosenEmoji.emoji
      console.log(realEmoji)
      
    };

    return (
        <div className="emojiPanel">
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    )
}

export default Emojis
