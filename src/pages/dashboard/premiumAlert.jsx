import React from 'react';
import {Box, Typography, Button, useMediaQuery, useTheme} from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';


const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#FFFFFF'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
  },
});

const PremiumAlert = () => {
    const theme2 = useTheme();
    const isMobile = useMediaQuery(theme2.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
        <Box m="20px 20px">
            <Box display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-between" bgcolor="#282828" borderRadius="15px">
                <Box color="white" p="15px 25px 15px 25px">
                    <Typography align={isMobile ? 'center':'inherit'} fontSize="28px" fontWeight="600">Unlock premium stats</Typography>
                    <Typography align={isMobile ? 'center':'inherit'} fontSize="14px">Get up to 10TB of storage for a limited time</Typography>
                </Box>
                <Box p="15px 25px 15px 25px" display="flex" justifyContent="center" alignItems="center"> 
                    <Button variant="contained" color="anger" style={{textTransform:'none', borderRadius:"20px", fontWeight:"bold"}}><BoltOutlinedIcon/> Upgrade</Button>
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

export default PremiumAlert;