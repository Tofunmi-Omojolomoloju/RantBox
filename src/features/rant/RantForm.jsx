import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRant } from "./rantSlice";

export default function RantForm() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("😶");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addRant({ text, mood }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="rant-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Let it out..."
        rows={3}
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="😡">😡 Angry</option>
        <option value="😔">😔 Sad</option>
        <option value="😶">😶 Meh</option>
      </select>
      <button type="submit">Post</button>
    </form>
  );
}