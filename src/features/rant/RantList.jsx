import React from "react";
import RantItem from "./RantItem";
import { useSelector } from "react-redux";

function RantList() {
  const rants = useSelector((state) => state.rant.rants);

  if (rants.length === 0) {
    return <p className="empty">No rants yet. Start one!</p>;
  }

  return (
    <div className="rant-list">
      {rants.map((rant, index) => (
        <RantItem key={index} rant={rant} />
      ))}
    </div>
  );
}

export default RantList;

