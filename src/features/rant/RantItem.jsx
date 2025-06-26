import React, { useState } from "react";

function RantItem({ rant }) {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleLike = () => setLikes((prev) => prev + 1);
  const toggleShare = () => setShares((prev) => prev + 1);
  const toggleCommentBox = () => setShowCommentBox((prev) => !prev);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments((prev) => [...prev, comment]);
      setComment("");
    }
  };

  return (
    <div className="rant-item">
      <div className="rant-header">
        <div className="user">Tofunmi</div>
        <div className="menu">•••</div>
      </div>

      <div className="rant-image">{rant.mood || "😤"}</div>

      <div className="rant-content">{rant.text}</div>

      <div className="rant-actions">
        <span onClick={toggleLike} style={{ cursor: "pointer" }}>
          ❤️ {likes}
        </span>
        <span onClick={toggleCommentBox} style={{ cursor: "pointer" }}>
          💬
        </span>
        <span onClick={toggleShare} style={{ cursor: "pointer" }}>
          🔁 {shares}
        </span>
      </div>

      {showCommentBox && (
        <div style={{ padding: "0 1rem 1rem" }}>
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
              }}
            />
          </form>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1rem", fontSize: "0.9rem" }}>
            {comments.map((c, i) => (
              <li key={i} style={{ marginBottom: "0.4rem" }}>💬 {c}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="rant-timestamp">3h ago</div>
    </div>
  );
}

export default RantItem;