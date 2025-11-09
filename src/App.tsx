import React, { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels"; // Assuming you're using react-resizable-panels or similar
import LeftPanelComponent from "./Components/LeftPanelComponent";
import RightPanelComponent from "./Components/RightPanelComponent";

// Parent Component (App)
const App: React.FC = () => {
  const [content, setContent] = useState<React.ReactNode>(null); // Manage content in the parent
  const [showBottomPanel, setShowBottomPanel] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <PanelGroup direction="horizontal">
        {/* Left Panel */}
        <Panel minSize={200} defaultSize={300}>
          <LeftPanelComponent
            setContent={setContent}
            setShowBottomPanel={setShowBottomPanel}
          />
        </Panel>

        {/* Right Panel */}
        <Panel minSize={300} defaultSize={600}>
          <RightPanelComponent
            content={content}
            showBottomPanel={showBottomPanel}
          />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default App;
