import React from 'react';
import {Box, IconButton, InputBase, useMediaQuery, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import Badge from '@mui/material/Badge';
import CompanyLogo from '../../components/companyLogo';
import MenuIcon from '@mui/icons-material/Menu';


const Topbar = ({toggled, setToggled}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box display="flex" flexDirection={isMobile ? 'column-reverse' : 'row'} justifyContent="space-between" p={2} style={{backgroundColor:"#FFFFFF"}}>
            <Box display="flex" backgroundColor="#FFFFFF" borderRadius="3px" outline="1px solid #EAECF0" sx={{flex:2}}>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <InputBase placeholder="Search..."/>
            </Box>

            <Box display="flex" flexDirection='row' justifyContent='space-between' sx={{ml:2}}>
                {/* <Badge variant='dot' color="error" overlap='circular'>
                    <NotificationsNoneOutlinedIcon/>
                </Badge> */}
                {isMobile ? <CompanyLogo/> : null}
                {isMobile ? null : <IconButton><NotificationsNoneOutlinedIcon/></IconButton>}
                {isMobile ? null : <IconButton><CalendarTodayOutlinedIcon/></IconButton>}
                {isMobile ? null : <IconButton><GridViewOutlinedIcon/></IconButton>}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <IconButton><AccountCircleOutlinedIcon fontSize={isMobile ? 'large' : 'inherit'}/></IconButton>
                    {isMobile ? <IconButton onClick={() => setToggled(!toggled)}><MenuIcon fontSize='large'/></IconButton> : null}
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;