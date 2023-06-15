// @ts-nocheck
import React from 'react';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { metrics, getAnimationProps } from '../constants';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { motion } from 'framer-motion';

function Results({ formData }) {
  return (
    <motion.div {...getAnimationProps('FADE', 1)} className='resultsContainer'>
      <header>
        <EqualizerIcon />
        <h3>Results</h3> 
      </header>
      <Table>
        <TableBody>
            {Object.values(metrics).filter(metric => !metric?.hidden).map(metric => (
              <TableRow key={metric.title}>
                <TableCell sx={{ color: metric.color }}>{metric.title}</TableCell>
                <TableCell 
                  align='right' 
                  sx={{ color: metric.color }} 
                  key={formData}
                >
                  {Math.abs(metric.value(formData)).toFixed(4) || '-'}
                  </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default Results;
