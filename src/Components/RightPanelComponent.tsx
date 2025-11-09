export default function RightPanelComponent({
  content,
  showBottomPanel,
}: {
  content: string;
  showBottomPanel: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, backgroundColor: "#eaeaea" }}>
        <h3>MapView</h3>
        {/* Your MapView content */}
      </div>

      {/* Conditionally render the bottom section */}
      {showBottomPanel && (
        <div
          style={{ height: "50%", backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          <h3>Page Below Map</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
