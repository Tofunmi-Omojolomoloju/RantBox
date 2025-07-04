// import React, { useContext } from "react";
// import RantForm from "./features/rant/RantForm";
// import RantList from "./features/rant/RantList";
// import StreakCounter from "./features/rant/StreakCount";
// import { ThemeContext } from "./context/ThemeContext";
// import "./App.css";

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//     <div className={`app ${theme}`}>
//       <header className="fade-slide">
//         <h1>RantBox</h1>
//         <button onClick={toggleTheme} className="theme-btn">
//           {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
//         </button>
//       </header>
//       <main className="fade-slide">
//         <StreakCounter />
//         <RantForm />
//         <RantList />
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { ThemeProvider, CssBaseline, Box, Grid, Typography, Switch } from '@mui/material';
// import { getTheme } from './theme';
// import RantForm from './components/rant/RantForm';
// import RantList from './components/rant/RantList';
// import { useEffect } from 'react';


// function App() {
//   const [mode, setMode] = useState('light');
//   const [rants, setRants] = useState([]);

//   const handleAddRant = (newRant) => {
//     setRants([newRant, ...rants]);
//   };

//   const theme = getTheme(mode);

//   const [streak, setStreak] = useState(() => {
//   const saved = JSON.parse(localStorage.getItem('rant-streak'));
//   return saved?.count || 1;
// });

// const today = new Date().toDateString();
// const saved = JSON.parse(localStorage.getItem('rant-streak')) || {};

// if (saved.lastPosted === today) {
//   // Already posted today, do nothing
// } else {
//   const lastDate = new Date(saved.lastPosted);
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);

//   if (lastDate.toDateString() === yesterday.toDateString()) {
//     // Posted yesterday, increase streak
//     setStreak(prev => prev + 1);
//     localStorage.setItem('rant-streak', JSON.stringify({
//       count: streak + 1,
//       lastPosted: today
//     }));
//   } else {
//     // Missed a day, reset streak
//     setStreak(1);
//     localStorage.setItem('rant-streak', JSON.stringify({
//       count: 1,
//       lastPosted: today
//     }));
//   }
// }



// src/App.jsx
import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Switch,
  Typography,
  Box,
} from '@mui/material';
import { getTheme } from './theme';
import RantForm from './components/rant/RantForm';
import RantList from './components/rant/RantList';

function App() {
  const [mode, setMode] = useState('light');
  const [rants, setRants] = useState([]);

  const [streak, setStreak] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('rant-streak')) || {};
    return {
      count: saved.count || 0,
      lastPosted: saved.lastPosted || '',
    };
  });

  const handleAddRant = (newRant) => {
    setRants([newRant, ...rants]);

    const today = new Date().toDateString();
    const lastDate = new Date(streak.lastPosted);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let newCount = streak.count;

    if (streak.lastPosted === today) {
      newCount = streak.count;
    } else if (lastDate.toDateString() === yesterday.toDateString()) {
      newCount = streak.count + 1;
    } else {
      newCount = 1;
    }

    const updatedStreak = {
      count: newCount,
      lastPosted: today,
    };

    setStreak(updatedStreak);
    localStorage.setItem('rant-streak', JSON.stringify(updatedStreak));
  };

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          overflowY: 'scroll',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 2,
          py: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: 1000,
            mb: 4,
          }}
        >
          <Typography variant="h2" fontWeight={600} color="primary">
            RantBox
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2"></Typography>
            <Switch
              checked={mode === 'dark'}
              onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
            />
          </Box>
        </Box>

         <Box sx={{ width: '100%', maxWidth: 800 }}>
          <RantForm onAddRant={handleAddRant} streak={streak} />
          <RantList rants={rants} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
