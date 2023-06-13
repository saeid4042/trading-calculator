// @ts-nocheck
import { formProps } from './App';
export const metrics = {
    
    margin: {
        color: 'green',
        title: 'Margin',
        value: (f: formProps) => 0,
    },
    liq: {
        color: 'green',
        title: 'Liquidity',
        value: (f: formProps) => 0,
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
        value: (f: formProps) => metrics.diff2.value(f) * 100 / f.entryPrice, // check
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
        value: (f: formProps) => metrics.diff1.value(f) * 100 / f.entryPrice, // check
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
    RR: {
        color: 'green',
        title: 'R/R',
        value: (f: formProps) => metrics.totalLoss.value(f) / metrics.totalProfit.value(f),
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
