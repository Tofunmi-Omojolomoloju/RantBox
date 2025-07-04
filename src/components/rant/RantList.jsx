// import React from "react";
// import RantItem from "./RantItem";
// import { useSelector } from "react-redux";

// function RantList() {
//   const rants = useSelector((state) => state.rant.rants);

//   if (rants.length === 0) {
//     return <p className="empty">No rants yet. Start one!</p>;
//   }

//   return (
//     <div className="rant-list">
//       {rants.map((rant, index) => (
//         <RantItem key={index} rant={rant} />
//       ))}
//     </div>
//   );
// }

// export default RantList;

// src/components/RantList.jsx
import React from 'react';
import { Box, Typography} from '@mui/material';
import RantItem from './RantItem';

function RantList({ rants }) {
  if (!rants.length) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h7" color="text.secondary" sx={{
    fontStyle: 'italic',
    opacity: 0.3,
  }}>
          No rants yet. Start one!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="grid"
      gap={3}
      gridTemplateColumns={{
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr',
      }}
    >
      {rants.map((rant, index) => (
        <RantItem key={index} rant={rant} />
      ))}
    </Box>
  );
}

export default RantList;
