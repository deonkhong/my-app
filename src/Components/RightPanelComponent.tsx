import { PanelGroup, Panel } from "react-resizable-panels";

export default function RightPanelComponent({
  content,
  showBottomPanel,
}: {
  content: React.ReactNode;
  showBottomPanel: boolean;
}) {
  if (!showBottomPanel) {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, background: "#eaeaea" }}>
          <h3>MapView</h3>
          {/* ArcGIS MapView container */}
        </div>
      </div>
    );
  }

  return (
    <PanelGroup direction="vertical">
      <Panel minSize={30} defaultSize={60}>
        <div style={{ height: "100%", background: "#eaeaea" }}>
          <h3>MapView</h3>
          {/* ArcGIS MapView container */}
        </div>
      </Panel>

      <Panel minSize={20} defaultSize={40}>
        <div
          style={{
            height: "100%",
            background: "#f0f0f0",
            padding: 10,
            overflow: "auto",
          }}
        >
          <h3>Page Below Map</h3>
          {content}
        </div>
      </Panel>
    </PanelGroup>
  );
}
