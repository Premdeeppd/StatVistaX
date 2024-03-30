import React from 'react';
import './component.css';
import logo from '../assets/Logohere.png';
import {Box, useMediaQuery, useTheme} from '@mui/material';

const CompanyLogo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box className="logo-container" marginLeft={isMobile ? "-15px" : "25px"} >
            <img src={logo} alt="Company Logo" /> 
        </Box>
    );
};

export default CompanyLogo;