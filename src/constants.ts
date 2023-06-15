// @ts-nocheck
import { formProps } from './App';
export const metrics = {
    margin: {
        color: 'green',
        title: 'Margin',
        value: (f: formProps) => 0,
    },
    liq: {
        color: 'red',
        title: 'Liquidity',
        value: (f: formProps) => 0,
    },
    RR: {
        color: 'red',
        title: 'R/R',
        value: (f: formProps) => metrics.totalLoss.value(f) / metrics.totalProfit.value(f),
    },
    diff: {
        color: 'green',
        title: 'Diff',
        value: (f: formProps) => (f.entryPrice < f.exitPrice) ? (f.exitPrice - f.entryPrice) : (f.entryPrice - f.stopLoss),
    },
    diff1: {
        color: 'green',
        title: 'Diff',
        // value: (f: formProps) => (f.entryPrice < f.exitPrice) ? (f.exitPrice - f.entryPrice) : (f.entryPrice - f.stopLoss),
        value: (f: formProps) => f.exitPrice - f.entryPrice,
        hidden: true
    },
    
    diff2: {
        color: 'green',
        title: 'Diff',
        value: (f: formProps) => f.entryPrice - f.stopLoss,
        hidden: true
    },
    gross: {
        color: 'green',
        title: 'Gross',
        value: (f: formProps) => f.amount * f.lev,
        hidden: true,
    },
    
    lossPercentage: {
        color: 'red',
        title: 'Loss Percentage',
        value: (f: formProps) => metrics.diff2.value(f) * 100 / f.entryPrice,
    },
    totalLoss: {
        color: 'red',
        title: 'Total Loss',
        value: (f: formProps) => metrics.lossPercentage.value(f) * f.amount / 100,
        hidden: true
    },
    profitPercentage: {
        color: 'green',
        title: 'Profit Percentage',
        value: (f: formProps) => metrics.diff1.value(f) * 100 / f.entryPrice,
    },
    totalProfit: {
        color: 'green',
        title: 'Total Profit',
        value: (f: formProps) => metrics.profitPercentage.value(f) * f.amount / 100,
        hidden: true,
    },
    lossPercentageLev: {
        color: 'red',
        title: 'Loss Percentage Lev.',
        value: (f: formProps) => metrics.lossPercentage * f.lev,
        hidden: true,
    },
    totalLossLev: {
        color: 'red',
        title: 'Total Loss Lev.',
        value: (f: formProps) => metrics.totalLoss.value(f) * f.lev,
    },
    profitPercentageLev: {
        color: 'green',
        title: 'Profit Percentage Lev.',
        value: (f: formProps) => metrics.profitPercentage * f.lev,
        hidden: true,
    },
    totalProfitLev: {
        color: 'green',
        title: 'Total Profit Lev.',
        value: (f: formProps) => metrics.totalProfit.value(f) * f.lev,
    },
    totalLossLevInToman: {
        color: 'red',
        title: 'Total Loss Lev (T)',
        value: (f: formProps) => metrics.totalLossLev.value(f) * f.dollar,
    },
    totalProfitLevInToman: {
        color: 'green',
        title: 'Total Profit Lev (T)',
        value: (f: formProps) => metrics.totalProfitLev.value(f) * f.dollar,
    },
}

export const inputTitles = {
    asset: {
        title: 'Asset',
        color: 'black'
    },
    risk: {
        title: 'Risk',
        color: 'error',
    },
    amount: {
        title: 'Amount',
        color: 'black'
    },
    entryPrice: {
        title: 'Entry Price',
        color: 'primary',
    },
    exitPrice: {
        title: 'Target Point',
        color: 'success',
    },
    stopLoss: {
        title: 'Stop Loss',
        color: 'error',
    },
    lev: {
        title: 'Leverage',
        color: 'error',
    },
    dollar: {
        title: 'Dollar',
        color: 'secondary',
    },
}

export const animationVariants = {
    FADE_FROM_RIGHT: {
      enter: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    FADE_FROM_LEFT: {
      enter: { opacity: 1, x: -20 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: 20 },
    },
    FADE_FROM_BOTTOM: {
      enter: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    FADE_FROM_TOP: {
      enter: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    FADE: {
      enter: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
    ROTATE: {
      enter: { rotate: 180 },
      visible: { rotate: 0 },
      exit: { rotate: -180 },
    },
    ROTATE_X: {
      enter: { rotateX: 90 },
      visible: { rotateX: 0 },
      exit: { rotateX: -90 },
    },
    ZOOM: {
      enter: { scale: 0 },
      visible: { scale: 1 },
      exit: { scale: 0 },
    },
  };
  
export const getAnimationProps = (
    variant: 'FADE_FROM_LEFT' | 'FADE_FROM_RIGHT' | 'FADE' | 'FADE_FROM_TOP' | 'FADE_FROM_BOTTOM' | 'ROTATE' | 'ZOOM' | 'ROTATE_X',
    delay?: number,
    duration?: number,
) => ({
    ...(variant === 'FADE_FROM_LEFT' && { variants: animationVariants.FADE_FROM_LEFT }),
    ...(variant === 'FADE_FROM_RIGHT' && { variants: animationVariants.FADE_FROM_RIGHT }),
    ...(variant === 'FADE_FROM_TOP' && { variants: animationVariants.FADE_FROM_TOP }),
    ...(variant === 'FADE_FROM_BOTTOM' && { variants: animationVariants.FADE_FROM_BOTTOM }),
    ...(variant === 'FADE' && { variants: animationVariants.FADE }),
    ...(variant === 'ROTATE' && { variants: animationVariants.ROTATE }),
    ...(variant === 'ZOOM' && { variants: animationVariants.ZOOM }),
    ...(variant === 'ROTATE_X' && { variants: animationVariants.ROTATE_X }),
    initial: 'enter',
    animate: 'visible',
    exit: 'exit',
    transition: {
        ...(delay && { delay }),
        ...(duration && { duration }),
    },
});