import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {mockDataApp} from '../../data/mockDataApp';
import './dashboard.css';



const InstalledApp = () => {
    function getRowId(row) {
        return row.UserID;
    }
    const columns = [{field:"Source", headerName:"Source", flex:1.5},
    {field:"Amount",headerName:"Amount", headerAlign:"center", align:"center"},
    {field:"Status",headerName:"Status", flex:1, headerAlign:"center", renderCell: ({row:{Status}})=>{
        return (
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                <Box
                    p="0 8px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={
                        Status === "Active" ? "#DCFFF5" :
                        Status === "Pending" ? "#FFEAD8" :
                        "#F2F4F7"
                    }
                    borderRadius="20px"
                    >
                    <Typography
                        color={
                            Status === "Active" ? "#20C997" :
                            Status === "Pending" ? "#FD7E14" :
                            "#5F6980"
                        }
                        fontWeight="bold"
                    >
                        {Status}
                    </Typography>

                </Box>

            </Box>
        )
    
    }},
    {field:"UserID",headerName:"User ID",flex:1, headerAlign:"center", align:"center"},
    {field:"Joined",headerName:"Joined",flex:1, headerAlign:"center", align:"center"},
    {field:"Group",headerName:"Group",flex:1, headerAlign:"center", align:"center"}];

    return (
        <div style={{width:'100%'}}>
            <Box m="20px 20px 0px 20px" p="10px" sx={{backgroundColor:"#FFFFFF", borderTopLeftRadius:"15px", borderTopRightRadius:"15px"}}>
                <Typography sx={{fontSize:"14px", fontWeight:"600"}}>Installed Apps</Typography>
            </Box>
            <Box m="1px 20px 20px 20px" style={{borderRadius:"15px", backgroundColor:"#FFFFFF"}}>
                <Box
                style={{ height: 371}} 
                sx={{"& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none"
                },
                }}>
                    <DataGrid
                        getRowId={getRowId}
                        rows = {mockDataApp}
                        columns={columns}
                        autoPageSize
                    />
                </Box>
            </Box>
            
        </div>
        
    );
};

export default InstalledApp;