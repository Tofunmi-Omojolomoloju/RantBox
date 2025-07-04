// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addRant } from "./rantSlice";

// export default function RantForm() {
//   const [text, setText] = useState("");
//   const [mood, setMood] = useState("😶");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!text.trim()) return;
//     dispatch(addRant({ text, mood }));
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="rant-form">
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Let it out..."
//         rows={3}
//       />
//       <select value={mood} onChange={(e) => setMood(e.target.value)}>
//         <option value="😡">😡 Angry</option>
//         <option value="😔">😔 Sad</option>
//         <option value="😶">😶 Meh</option>
//       </select>
//       <button type="submit">Post</button>
//     </form>
//   );
// }


// src/components/RantForm.jsx
import React, { useState } from 'react';
import { Box, Button, MenuItem, TextField, Typography, Stack } from '@mui/material';

const moods = [
  { label: 'Angry', emoji: '😡' },
  { label: 'Happy', emoji: '😊' },
  { label: 'Sad', emoji: '😢' },
  { label: 'Excited', emoji: '🤩' },
  { label: 'Tired', emoji: '🥱' },
  { label: 'Frustrated', emoji: '😣' },
  { label: 'Chill', emoji: '😎' },
  { label: 'In Love', emoji: '😍' },
  { label: 'Confused', emoji: '😵‍💫' },
  { label: 'Proud', emoji: '😌' },
  { label: 'Heartbroken', emoji: '💔' },
  { label: 'Mind Blown', emoji: '🤯' },
  { label: 'Laughing', emoji: '😂' },
  { label: 'Overthinking', emoji: '🧠' },
  { label: 'Speechless', emoji: '🤐' },
  { label: 'Triggered', emoji: '🚨' },
  { label: 'Low-key angry', emoji: '😠' },
  { label: 'Triggered', emoji: '🚨' },
  { label: 'Speechless', emoji: '🤐' },
  { label: 'Disgusted', emoji: '🤢' },          
  { label: 'Shocked', emoji: '😱' },            
  { label: 'Embarrassed', emoji: '😳' },       
  { label: 'Blank', emoji: '😐' },   
];

function RantForm({ onAddRant, streak }) {
  const [text, setText] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddRant({ text, mood });
    setText('');
    setMood('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={5}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6">
          Let it out...
        </Typography>
        <Box
          sx={{
            color: 'black',
            px: 1.5,
            py: 0.5,
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            animation: 'flameFlicker 1s infinite ease-in-out',
          }}
        >
          🔥 {streak?.count ?? 0}
        </Box>
      </Stack>

      <Stack spacing={2}>
        <TextField
          label="What's on your mind?"
          multiline
          minRows={3}
          fullWidth
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <TextField
          select
          label="Mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          {moods.map((option) => (
            <MenuItem key={option.label} value={option.emoji}>
              {option.emoji} {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" color="primary" type="submit">
          Rant!
        </Button>
      </Stack>
    </Box>
  );
}

export default RantForm;
