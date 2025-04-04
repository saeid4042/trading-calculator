// @ts-nocheck
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { inputTitles, getAnimationProps } from "../constants";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Inputs({ formData, setFormData }) {
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <motion.div {...getAnimationProps("FADE")} className="inputsContainer">
      <header>
        <EditNoteIcon />
        <h3>Inputs</h3>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </header>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="inputs">
          {Object.keys(inputTitles).map((i, index) => (
            <motion.div
              key={inputTitles[i].title}
              {...getAnimationProps("ZOOM", (index + 1) * 0.1)}
            >
              {inputTitles[i].title === inputTitles.risk.title ? (
                <FormControl
                  fullWidth
                  focused
                  color={inputTitles[i].color}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">
                    {inputTitles[i].title}
                  </InputLabel>
                  <Select
                    label={inputTitles[i].title}
                    type="number"
                    value={formData[i]}
                    onChange={(e) =>
                      setFormData({ [i]: parseFloat(e.target.value) || 0 })
                    }
                  >
                    <MenuItem value={0.5}>0.5</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={1.5}>1.5</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  size="small"
                  focused
                  color={inputTitles[i].color}
                  type="number"
                  label={inputTitles[i].title}
                  value={formData[i]}
                  onChange={(e) =>
                    setFormData({ [i]: parseFloat(e.target.value) || 0 })
                  }
                />
              )}
            </motion.div>
          ))}
        </div>
      </Collapse>
    </motion.div>
  );
}

export default Inputs;
