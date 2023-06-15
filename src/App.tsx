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
import { motion } from 'framer-motion';
import { getAnimationProps } from './constants';

export type formProps = {
  amount: number;
  entryPrice: number;
  exitPrice: number;
  stopLoss: number;
  lev: number;
  dollar: number;
  asset: number;
  risk: number;
}

function App() {
  const initialData = {
    amount: '',
    entryPrice: '',
    exitPrice: '',
    stopLoss: '',
    lev: '',
    dollar: '',
    asset: '',
    risk: '',
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
          <motion.h1 {...getAnimationProps('FADE_FROM_BOTTOM')}>Trade Calculator</motion.h1>
          <motion.span {...getAnimationProps('FADE_FROM_TOP')} style={{ color:  calculateModeColor() }}><p>Position: </p>{calculateMode()}</motion.span>
        </header>
        <main>
          <Inputs formData={formData} setFormData={setFormData} key={formData} />
          <Results formData={formData} />
        </main>
        <motion.footer {...getAnimationProps('FADE', 0.5)}>
          <Button variant='contained' color="error" fullWidth onClick={() => _setFormData(initialData)}>
            Clear <DeleteIcon size="small" sx={{ ml: '5px' }} />
          </Button>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
