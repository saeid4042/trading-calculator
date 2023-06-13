// @ts-nocheck
import React, { useState } from 'react';
import './App.css';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { inputTitles, metrics } from './constants';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function App() {
  const [formData, _setFormData] = useState<formProps>({
    amount: null,
    entryPrice: null,
    exitPrice: null,
    stopLoss: null,
    lev: null,
    dollar: null,
    asset: null,
    risk: null,
  })
  const setFormData = (newData) => _setFormData({ ...formData, ...newData});
  const calculateMode = () => {
    if (formData.entryPrice > formData.exitPrice) return 'short';
    if (formData.entryPrice < formData.exitPrice) return 'long';
    return '-';
  }

  const calculateModeColor = () => {
    if (formData.entryPrice > formData.exitPrice) return 'red';
    if (formData.entryPrice < formData.exitPrice) return 'green';
    return 'black';
  }


  const theme = createTheme({
    palette: {
      black: {
        main: '#111',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <h1>Trade Calculator</h1>
      <p style={{ color:  calculateModeColor() }}>Position: {calculateMode()}</p>
      <main>
        <div className='inputs'>
          {Object.keys(inputTitles).map(i => (
            <TextField focused color={inputTitles[i].color} type='number' label={inputTitles[i].title} value={formData[i]} onChange={e => setFormData({ [i]: parseInt(e.target.value) || 0 })}  />
          ))}
        </div>
        <div>
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
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
