// @ts-nocheck
import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import DeleteIcon from '@mui/icons-material/Delete';
import Inputs from './components/Inputs';
import Results from './components/Results';

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
  const initialData = {
    amount: null,
    entryPrice: null,
    exitPrice: null,
    stopLoss: null,
    lev: null,
    dollar: null,
    asset: null,
    risk: null,
  }
  const [formData, _setFormData] = useState<formProps>(initialData)
  const setFormData = (newData) => _setFormData({ ...formData, ...newData});
  const calculateMode = () => {
    if (formData.entryPrice > formData.exitPrice) return <><p>short</p><SouthEastIcon size="small" /></>;
    if (formData.entryPrice < formData.exitPrice) return <><p>long</p><NorthEastIcon size="small" /></>;
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
        <header>
          <h1>Trade Calculator</h1>
          <span style={{ color:  calculateModeColor() }}><p>Position: </p>{calculateMode()}</span>
        </header>
        <main>
          <Inputs formData={formData} setFormData={setFormData} />
          <Results formData={formData} />
        </main>
        <footer>
          <Button variant='contained' color="error" fullWidth onClick={() => _setFormData(initialData)}>
            Clear <DeleteIcon size="small" sx={{ ml: '5px' }} />
          </Button>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
