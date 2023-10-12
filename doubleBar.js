import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material'

export default function MultiGraph({ dataX }) {
  const theme = useTheme()
  const categories = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };
  return (
    <BarChart
      sx={{
        '.css-1vuxth3-MuiBarElement-root': {
          fill: '#FFCC00',
          width: "13px"
        },
        '.css-6kig8r-MuiBarElement-root': {
          fill: theme.palette.primary.main,
          width: "13px"
        },
       
        '.MuiChartsAxis-line': {

          stroke: "#14285A26",
          color: "#14285A26"
        },
        '.MuiChartsAxis-tick': {

          stroke: "#14285A26",
        },
        '.MuiChartsAxis-tickLabel': {
          // fill:'#14285A26'
        }
      }}
      xAxis={
        [
          {
            id: 'barCategories',
            data: dataX,
            scaleType: 'band',
            categoryGapRatio: 0.5,
            barGapRatio: 0.3,
            // hideTooltip: true,
            label: "Days",
            },
        ]}
      yAxis={
        [
          {
            label: "EU Allowances",
          }
        ]}
      series={[{ data: [4, 3, 5, 4, 3, 5, 4, 3, 5] }, { data: [1, 6, 3, 6, 3, 3, 7, 5, 3] },]}
      width={500}
      height={300}
      tooltip={{ trigger: 'axis' }}

    />

  );
}

