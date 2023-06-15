// @ts-nocheck
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { inputTitles } from '../constants';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { styled } from '@mui/material/styles';

export type formProps = {
  amount: number | null;
  entryPrice: number | null;
  exitPrice: number | null;
  stopLoss: number | null;
  lev: number | null;
  dollar: number | null;
  asset: number | null;
  risk: number | null;
}

function Inputs({ formData, setFormData }) {

  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
  }));


  return (
    <div className="inputsContainer">
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
            <div className='inputs'>
                {Object.keys(inputTitles).map(i => (
                    <TextField size='small' focused color={inputTitles[i].color} type='number' label={inputTitles[i].title} value={formData[i]} onChange={e => setFormData({ [i]: parseInt(e.target.value) || 0 })}  />
                ))}
            </div>
        </Collapse>
    </div>
  );
}

export default Inputs;
