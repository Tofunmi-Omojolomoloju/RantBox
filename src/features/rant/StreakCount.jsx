import React from "react";
import { useSelector } from "react-redux";

export default function StreakCounter() {
  const streak = useSelector((state) => state.rant.streak);

  return (
    <div className="streak">
      🔥 Daily Streak: <strong>{streak}</strong>
    </div>
  );
}