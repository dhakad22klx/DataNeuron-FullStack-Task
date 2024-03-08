import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Window1 from "./components/Window1";
import Window2 from "./components/Window2";
import Window3 from "./components/Window3";

function App() 
{
  const [add, setAdd] = useState("");
  const [update, setUpdate] = useState("");

  return (
    <PanelGroup
      direction="horizontal"
      style={{
        height: "97vh",
        padding: "3px",
      }}
    >
      <Panel>
        <PanelGroup direction="vertical">
          <Panel>
            <PanelGroup direction="horizontal">
              <Window1 add={add} setAdd={setAdd}/>
              <PanelResizeHandle />
              <Window2 update={update} setUpdate={setUpdate}/>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle />
          <Window3 add={add} update={update}  />
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
}

export default App;