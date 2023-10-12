import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material'


export default function SingleGraph({dataX, dataY}) {
  const theme = useTheme()
  return (
    <BarChart
      sx={{
        '.MuiBarElement-root': {
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
        '.MuiChartsAxis-tickLabel':{
          // fill:'#14285A26'
        }
      }}
      xAxis={[
        {
          id: 'barCategories',
          data: dataX,
          scaleType: 'band',
          categoryGapRatio: 0.5,
          barGapRatio: 0.3,
          // hideTooltip: true,   
          label:"Days"

        },
      ]}
      yAxis={[
        {
          label:"EU Allowances",
        }
      ]}
      series={[
        {
         
          hideTooltip: true,
          data: dataY,
        },
      ]}
      width={500}
      height={300}
      tooltip={{ trigger: 'none' }}
      
    />
  );
}
