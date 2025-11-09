import React, { useState } from "react";

type Props = {
  setContent: (c: React.ReactNode) => void;
  setShowBottomPanel: (show: boolean) => void;
};

export default function LeftPanelComponent({
  setContent,
  setShowBottomPanel,
}: Props) {
  const [input, setInput] = useState("");

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setContent(
      <div>
        <h4>Generated Snapshot</h4>
        <p>You entered: {e.target.value}</p>
      </div>
    );

    if (e.target.value.trim()) {
      // Show bottom panel if content is not empty
      setShowBottomPanel(true);
    } else {
      // Hide bottom panel if content is empty
      setContent(null);
      setShowBottomPanel(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Details Panel</h2>
      <input
        type="text"
        value={input}
        onChange={handleChangeContent}
        placeholder="Type something here..."
      />
    </div>
  );
}
