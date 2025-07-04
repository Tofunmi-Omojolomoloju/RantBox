// import React, { useState } from "react";

// function RantItem({ rant }) {
//   const [likes, setLikes] = useState(0);
//   const [shares, setShares] = useState(0);
//   const [showCommentBox, setShowCommentBox] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   const toggleLike = () => setLikes((prev) => prev + 1);
//   const toggleShare = () => setShares((prev) => prev + 1);
//   const toggleCommentBox = () => setShowCommentBox((prev) => !prev);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setComments((prev) => [...prev, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="rant-item">
//       <div className="rant-header">
//         <div className="user">Tofunmi</div>
//         <div className="menu">•••</div>
//       </div>

//       <div className="rant-image">{rant.mood || "😤"}</div>

//       <div className="rant-content">{rant.text}</div>

//       <div className="rant-actions">
//         <span onClick={toggleLike} style={{ cursor: "pointer" }}>
//           ❤️ {likes}
//         </span>
//         <span onClick={toggleCommentBox} style={{ cursor: "pointer" }}>
//           💬
//         </span>
//         <span onClick={toggleShare} style={{ cursor: "pointer" }}>
//           🔁 {shares}
//         </span>
//       </div>

//       {showCommentBox && (
//         <div style={{ padding: "0 1rem 1rem" }}>
//           <form onSubmit={handleCommentSubmit}>
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "0.5rem",
//                 marginTop: "0.5rem",
//                 borderRadius: "6px",
//                 border: "1px solid #ddd",
//               }}
//             />
//           </form>
//           <ul style={{ marginTop: "0.75rem", paddingLeft: "1rem", fontSize: "0.9rem" }}>
//             {comments.map((c, i) => (
//               <li key={i} style={{ marginBottom: "0.4rem" }}>💬 {c}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="rant-timestamp">3h ago</div>
//     </div>
//   );
// }

// export default RantItem;


import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

function RantItem({ rant }) {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleShare = () => setShares((prev) => prev + 1);
  const handleComment = () => setShowComments((prev) => !prev);
  const submitComment = () => {
    if (commentText.trim() !== "") {
      setComments((prev) => [...prev, commentText]);
      setCommentText("");
    }
  };

  return (
    <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#ef4444" }}>T</Avatar>}
        title="Tofunmi"
        subheader="3h ago"
      />

      <Box sx={{ px: 2, pb: 1 }}>
        <Typography fontSize={40}>{rant.mood || "😤"}</Typography>
      </Box>

      <CardContent>
        <Typography>{rant.text}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton onClick={handleLike}>
          <FavoriteIcon color="error" />
          <Typography sx={{ ml: 1 }}>{likes}</Typography>
        </IconButton>

        <IconButton onClick={handleComment}>
          <ChatBubbleOutlineIcon />
        </IconButton>

        <IconButton onClick={handleShare}>
          <ShareIcon />
          <Typography sx={{ ml: 1 }}>{shares}</Typography>
        </IconButton>
      </CardActions>

      {showComments && (
        <Box sx={{ px: 2, pb: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            onClick={submitComment}
          >
            Post
          </Button>

          <Divider sx={{ my: 2 }} />

          {comments.map((comment, i) => (
            <Typography key={i} variant="body2" sx={{ mb: 1 }}>
              💬 {comment}
            </Typography>
          ))}
        </Box>
      )}
    </Card>
  );
}

export default RantItem;
