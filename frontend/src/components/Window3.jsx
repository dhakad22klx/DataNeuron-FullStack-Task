import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import axios from "axios";
import { BASE_URL } from "../services/helper";

const Window3 = ({add, update}) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        // Use add and update in the URL or headers if needed
        const response = await axios.get(`${BASE_URL}/get_data`);
        setData(response.data.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
    // console.log("hello");
  }, [add, update]);

  return (
    <Panel
      style={{
        border: "solid 2px green",
        marginLeft: "2px",
        marginTop: "2px",
      }}
      maxSize={90}
      minSize={10}
    >
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1>{data}</h1>
      </Box>
    </Panel>
  );
};

export default Window3;
