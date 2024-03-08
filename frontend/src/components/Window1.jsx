import React, {  useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../services/helper";

const Window1 = ({add,setAdd}) => {
  const [count, setCount] = useState(0);
  const handleChange = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/add_data`,
        JSON.stringify({content : add}),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error.response.data);
    }
    setAdd("");
    setCount(count+1);
  };
  return (
    <Panel
      style={{
        border: "solid 2px green",
        marginLeft: "2px",
        padding: "5px",
      }}
      minSize={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <div>
          <TextField
            onChange={(event) => setAdd(event.target.value)}
            value={add}
            id="text"
            label="Text"
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            align="center"></TextField>
        </div>
        <div>
          <Button
            type="submit"
            align="center"
            variant="contained"
            color="primary"
            onClick={handleChange}
            >
            Add {count}
          </Button>
          
        </div>
      </Box>
    </Panel>
  );
};

export default Window1;
