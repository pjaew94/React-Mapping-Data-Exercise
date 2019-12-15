import React from "react";
import Emoji from "./Emoji";
import EmojiName from "./EmojiH1";
import Description from "./Description";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emojiName={props.emojiName} emoji={props.emoji} />
        <EmojiName name={props.name} />
      </dt>
      <Description description={props.description} />
    </div>
  );
}

export default Entry;
