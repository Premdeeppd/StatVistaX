import {Box, useMediaQuery, useTheme} from '@mui/material';
import {React} from 'react';
import StateBox from '../../components/StateBox';

const StatusGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box m="10px">
            <Box mr={isMobile ? "20px":"0px"}>
                <Box display="flex" justifyContent="space-between" flexDirection={isMobile ? "column" : "row"}>
                    <StateBox title="Revenue" value="$56,945" increase="+45%" pastval="From 4.6%"/>
                    <StateBox title="Users" value="76.8%" increase="-1.7%" pastval="From 4.6%"/>
                    <StateBox title="New Signups" value="116" increase="0.00"/>
                    <StateBox title="Retention" value="12.67%" increase="+0.6%" pastval="From 4.6%"/>

                </Box>
            </Box>
        </Box>
    );
}

export default StatusGrid;