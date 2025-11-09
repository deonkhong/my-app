import React, { useState } from "react";

export default function LeftPanelComponent({
  content,
  setContent,
  setShowBottomPanel,
}: {
  content: string;
  setContent: (content: string) => void;
  setShowBottomPanel: (show: boolean) => void;
}) {
  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value); // Update content in parent

    if (e.target.value.trim() !== "") {
      // Show bottom panel if content is not empty
      setShowBottomPanel(true);
    } else {
      // Hide bottom panel if content is empty
      setShowBottomPanel(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Details Panel</h2>
      <input
        type="text"
        value={content}
        onChange={handleChangeContent}
        placeholder="Type something here..."
      />
    </div>
  );
}
