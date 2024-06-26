import React from 'react';
import {useState} from 'react';
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
// import {Box, IconButton, Typography, useTheme} from '@mui/material';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './global.css';
import  CompanyLogo from '../../components/companyLogo';
import {Box, IconButton, InputBase, useMediaQuery, useTheme} from '@mui/material';

const Sidebarx = ({toggled, setToggled}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Sidebar style={{backgroundColor:"#FFFFFF"}} onBackdropClick={isMobile ? () => setToggled(false) : undefined} toggled={isMobile ? toggled : undefined} breakPoint={isMobile ? "always" : undefined}>
            {isMobile ? null:<CompanyLogo/>}
            <Menu>
                <h4 style={{ color:"#9D9FA1", marginLeft:"10%" }}>DASHBOARD</h4>
                <SubMenu icon={<DonutSmallIcon/>} label="Dashbaord">
                    <MenuItem>Analytics</MenuItem>
                    <MenuItem>Finance</MenuItem>
                    <MenuItem>Job Board</MenuItem>
                </SubMenu>
                <SubMenu icon={<MailOutlineOutlinedIcon/>} label="Messages">
                </SubMenu>
                <SubMenu icon={<PersonOutlineOutlinedIcon/>} label="Friends">
                </SubMenu>
                <SubMenu icon={<GridViewOutlinedIcon/>} label="Apps">
                </SubMenu>
                <h4 style={{ color:"#9D9FA1", marginLeft:"10%" }}>PAGES</h4>
                <SubMenu icon={<SupportOutlinedIcon/>} label="Help Center">
                </SubMenu>
                <SubMenu icon={<FolderOutlinedIcon/>} label="File Manager">
                </SubMenu>
            </Menu>

        </Sidebar>
    );
};

export default Sidebarx;