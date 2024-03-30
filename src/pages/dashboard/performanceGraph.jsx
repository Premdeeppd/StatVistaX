import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { Box, Typography } from '@mui/material';

const uData = [120, 300, 200, 278, 189, 239, 349];
const pData = [240, 139, 380, 180, 380, 280, 230];
const xLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

function ColorSwich({ threshold, color1, color2, id }) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;
  
    const scale = useYScale(); // You can provide the axis Id if you have multiple ones
    const y0 = scale(threshold); // The coordinate of of the origine
    const off = y0 !== undefined ? y0 / svgHeight : 0;
  
    return (
      <defs>
        <linearGradient
          id={id}
          x1="0"
          x2="0"
          y1="0"
          y2={`${svgHeight}px`}
          gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
        >
          <stop offset={0.2} stopColor={color1} stopOpacity={1} />
          <stop offset={0.8} stopColor={color2} stopOpacity={1} />
        </linearGradient>
      </defs>
    );
  }

export default function performanceGraph() {
  return (
    <div style={{width:"100%"}}>
        <Box m="20px 20px 0px 20px" p="10px" sx={{backgroundColor:"#FFFFFF", borderTopLeftRadius:"15px", borderTopRightRadius:"15px"}}>
            <Typography sx={{fontSize:"14px", fontWeight:"600"}}>Performance</Typography>
        </Box>
        <Box m="1px 20px 20px 20px" p="10px" sx={{backgroundColor:"#FFFFFF", borderBottomLeftRadius:"15px", borderBottomRightRadius:"15px"}}>
            <LineChart
                bottomAxis={{
                    axisId: 'defaultized-x-axis-0',
                    disableLine: true,
                    disableTicks: true,
                }}
                leftAxis={{
                    axisId: 'DEFAULT_Y_AXIS_KEY',
                    disableLine: true,
                    disableTicks: true,
                }}
                height={300}
                series={[
                    { data: pData, label: 'Facebook', area: true, showMark: false},
                    { data: uData, label: 'Instagram', area: true, showMark: false},
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels}]}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },
                        padding: -4,
                        labelStyle: {
                            fontSize: 12,
                        },
                        itemMarkHeight: 10,
                        itemMarkWidth: 10,
                    },
                }}
                sx={{
                    '& .MuiAreaElement-series-auto-generated-id-0': {
                    fill: 'url(#swich-color-id-1)',
                    },
                    '& .MuiAreaElement-series-auto-generated-id-1': {
                        fill: 'url(#swich-color-id-2)',
                    },
                    '& .MuiChartsLegend-mark':{
                        rx: 5,
                    },
                    '& .MuiChartsAxis-root':{
                        strokeWidth: '10',

                    }
                }}
            >
                <ColorSwich
            color1="#20C99721"
            color2="#20C99700" 
            threshold={0}
            id="swich-color-id-1"
            />
                <ColorSwich
            color1="#4285F440"
            color2="#4285F400" 
            threshold={0}
            id="swich-color-id-2"
            />
            </LineChart>

        </Box>

    </div>
  );
}