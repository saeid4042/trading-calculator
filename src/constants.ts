// @ts-nocheck
import { formProps } from "./App";

const isLong = (f: formProps) => f.entryPrice < f.exitPrice;

export const metrics = {
  margin: {
    color: "success",
    title: (f: formProps) => "Margin",
    value: (f: formProps) =>
      isLong(f)
        ? (f.asset * f.risk * f.stopLoss) /
          ((f.entryPrice - f.stopLoss) * f.lev) /
          100
        : (f.asset * f.risk * f.entryPrice) /
          ((f.stopLoss - f.entryPrice) * f.lev) /
          100,
  },
  volume: {
    color: "success",
    title: (f: formProps) => `Volume`,
    value: (f: formProps) => {
      const a = (f.asset * f.risk) / 100;
      const b = f.entryPrice - f.stopLoss;
      return Math.abs((a / b) * f.entryPrice) / f.lev;
    },
  },
  liq: {
    color: "error",
    title: (f: formProps) => "Liquidity",
    value: (f: formProps) =>
      isLong(f)
        ? f.entryPrice - (100 / f.lev / 100) * f.entryPrice
        : f.entryPrice + (100 / f.lev / 100) * f.entryPrice,
  },
  RR: {
    floatingPosition: 1,
    postFix: "%",
    color: "error",
    title: (f: formProps) => "R/R %",
    value: (f: formProps) =>
      metrics.totalProfit.value(f) / metrics.totalLoss.value(f),
  },
  diff: {
    hidden: true,
    color: "success",
    title: (f: formProps) => "Diff",
    value: (f: formProps) =>
      isLong(f) ? f.exitPrice - f.entryPrice : f.entryPrice - f.stopLoss,
  },
  diff1: {
    color: "success",
    title: (f: formProps) => "Diff",
    value: (f: formProps) => f.exitPrice - f.entryPrice,
    hidden: true,
  },

  diff2: {
    color: "success",
    title: (f: formProps) => "Diff",
    value: (f: formProps) => f.entryPrice - f.stopLoss,
    hidden: true,
  },
  gross: {
    color: "success",
    title: (f: formProps) => "Gross",
    value: (f: formProps) => f.amount * f.lev,
    hidden: true,
  },

  lossPercentage: {
    floatingPosition: 1,
    postFix: "%",
    color: "error",
    title: (f: formProps) => "Loss %",
    value: (f: formProps) => (metrics.diff2.value(f) * 100) / f.entryPrice,
  },
  totalLoss: {
    color: "error",
    title: (f: formProps) => "Total Loss",
    value: (f: formProps) => (metrics.lossPercentage.value(f) * f.amount) / 100,
    hidden: true,
  },
  profitPercentage: {
    floatingPosition: 1,
    postFix: "%",
    color: "success",
    title: (f: formProps) => "Profit %",
    value: (f: formProps) => (metrics.diff1.value(f) * 100) / f.entryPrice,
  },
  totalProfit: {
    color: "success",
    title: (f: formProps) => "Total Profit",
    value: (f: formProps) =>
      (metrics.profitPercentage.value(f) * f.amount) / 100,
    hidden: true,
  },
  lossPercentageLev: {
    color: "error",
    title: (f: formProps) => "Loss % Lev.",
    value: (f: formProps) => metrics.lossPercentage * f.lev,
    hidden: true,
  },
  totalLossLev: {
    isInteger: true,
    color: "error",
    title: (f: formProps) => "Total Loss Lev.",
    value: (f: formProps) => metrics.totalLoss.value(f) * f.lev,
  },
  profitPercentageLev: {
    color: "success",
    title: (f: formProps) => "Profit % Lev.",
    value: (f: formProps) => metrics.profitPercentage * f.lev,
    hidden: true,
  },
  totalProfitLev: {
    isInteger: true,
    color: "success",
    title: (f: formProps) => "Total Profit Lev.",
    value: (f: formProps) => metrics.totalProfit.value(f) * f.lev,
  },
  totalLossLevInToman: {
    isInteger: true,
    postFix: "T",
    color: "error",
    title: (f: formProps) => "Total Loss Lev (T)",
    value: (f: formProps) => metrics.totalLossLev.value(f) * f.dollar,
  },
  totalProfitLevInToman: {
    isInteger: true,
    postFix: "T",
    color: "success",
    title: (f: formProps) => "Total Profit Lev (T)",
    value: (f: formProps) => metrics.totalProfitLev.value(f) * f.dollar,
  },
};

export const inputTitles = {
  asset: {
    title: "Asset",
    color: "black",
  },
  risk: {
    title: "Risk %",
    color: "error",
  },
  amount: {
    title: "Amount",
    color: "black",
  },
  entryPrice: {
    title: "Entry Price",
    color: "primary",
  },
  stopLoss: {
    title: "Stop Loss",
    color: "error",
  },
  exitPrice: {
    title: "Target Point",
    color: "success",
  },
  lev: {
    title: "Leverage",
    color: "error",
  },
  dollar: {
    title: "Dollar",
    color: "secondary",
  },
};

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
  variant:
    | "FADE_FROM_LEFT"
    | "FADE_FROM_RIGHT"
    | "FADE"
    | "FADE_FROM_TOP"
    | "FADE_FROM_BOTTOM"
    | "ROTATE"
    | "ZOOM"
    | "ROTATE_X",
  delay?: number,
  duration?: number
) => ({
  ...(variant === "FADE_FROM_LEFT" && {
    variants: animationVariants.FADE_FROM_LEFT,
  }),
  ...(variant === "FADE_FROM_RIGHT" && {
    variants: animationVariants.FADE_FROM_RIGHT,
  }),
  ...(variant === "FADE_FROM_TOP" && {
    variants: animationVariants.FADE_FROM_TOP,
  }),
  ...(variant === "FADE_FROM_BOTTOM" && {
    variants: animationVariants.FADE_FROM_BOTTOM,
  }),
  ...(variant === "FADE" && { variants: animationVariants.FADE }),
  ...(variant === "ROTATE" && { variants: animationVariants.ROTATE }),
  ...(variant === "ZOOM" && { variants: animationVariants.ZOOM }),
  ...(variant === "ROTATE_X" && { variants: animationVariants.ROTATE_X }),
  initial: "enter",
  animate: "visible",
  exit: "exit",
  transition: {
    ...(delay && { delay }),
    ...(duration && { duration }),
  },
});
