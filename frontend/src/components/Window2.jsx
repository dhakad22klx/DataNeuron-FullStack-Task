import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../services/helper";

const Window2 = ({update, setUpdate}) => {
  const [count, setCount] = useState(0);
  const handleChange = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/update_data`, JSON.stringify({content : update}), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error updating data:', error);
    }
    setUpdate("")
    setCount(count+1);
  }
  return (
    <Panel
      style={{
        border: "solid 2px green",
        marginLeft: "2px",
        padding: "5px",
      }}
      minSize={10}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignContent: "center",
          //   "& .MuiButton-root": { width: "15ch" },
          //   "& .MuiTextField-root": { width: "50ch" },
        }}
      >
        <div>
          <TextField
            onChange={(event) => setUpdate(event.target.value)}
            value={update}
            id="text"
            label="Text"
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            align="center"
          ></TextField>
        </div>
        <div>
          <Button
            type="submit"
            align="center"
            variant="contained"
            color="primary"
            onClick={handleChange}
          >
            Update {count}
          </Button>
        </div>
      </Box>
    </Panel>
  );
};

export default Window2;
