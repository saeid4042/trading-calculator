// @ts-nocheck
import React from 'react';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { metrics, getAnimationProps } from '../constants';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { motion } from 'framer-motion';
import { separateEvery3digit } from '../utils';

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
              <TableRow key={metric.title(formData)}>
                <TableCell sx={{ color: metric.color }}>{metric.title(formData)}</TableCell>
                <TableCell 
                  align='right' 
                  sx={{ color: metric.color }} 
                  key={formData}
                >
                  {!isNaN(metric.value(formData)) 
                  ? separateEvery3digit(
                      metric.isInteger 
                        ? Math.round(metric.value(formData)) || '-' 
                        : Math.abs(metric.value(formData))?.toFixed(metric.floatingPosition || 4) || '-'
                    ) 
                  : '-'} {metric.postFix || ''}
                  </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default Results;
