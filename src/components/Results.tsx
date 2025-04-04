// @ts-nocheck
import React, { useState } from "react";
import Table from "@mui/material/Table";
import {
  Collapse,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { metrics, getAnimationProps } from "../constants";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { separateEvery3digit } from "../utils";

function Results({ formData }) {
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
    <motion.div {...getAnimationProps("FADE", 1)} className="resultsContainer">
      <header>
        <EqualizerIcon />
        <h3>Results</h3>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </header>
      <Collapse in={expanded} timeout="auto">
        <div className="inputs">
          {Object.values(metrics)
            .filter((metric) => !metric?.hidden)
            .map((metric, index) => (
              <motion.div key={metric.title(formData)}>
                <TextField
                  size="small"
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                  label={metric.title(formData)}
                  color={metric.color}
                  fullWidth
                  focused
                  onChange={() => {}}
                  onInput={() => {}}
                  onKeyDown={() => {}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        {metric.postFix}
                      </InputAdornment>
                    ),
                  }}
                  value={`${
                    !isNaN(metric.value(formData))
                      ? separateEvery3digit(
                          metric.isInteger
                            ? Math.round(metric.value(formData)) || "-"
                            : Math.abs(metric.value(formData))?.toFixed(
                                metric.floatingPosition || 4
                              ) || "-"
                        )
                      : "-"
                  }`}
                />
              </motion.div>
            ))}
        </div>
      </Collapse>
    </motion.div>
  );
}

export default Results;
