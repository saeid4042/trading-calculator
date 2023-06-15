// @ts-nocheck
import React from 'react';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { metrics } from '../constants';
import EqualizerIcon from '@mui/icons-material/Equalizer';

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

function Results({ formData }) {
  return (
    <div className='resultsContainer'>
      <header>
        <EqualizerIcon />
        <h3>Results</h3> 
      </header>
      <Table>
        <TableBody>
            {Object.values(metrics).filter(metric => !metric?.hidden).map(metric => (
              <TableRow>
                <TableCell sx={{ color: metric.color }}>{metric.title}</TableCell>
                <TableCell align='right' sx={{ color: metric.color }} key={formData}>{Math.abs(metric.value(formData)) || '-'}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Results;
