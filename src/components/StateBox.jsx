import {Box, Typography} from '@mui/material';
import {React} from 'react';

const StateBox = ({title, value, increase, pastval}) => {
    return (
        <Box m="10px" p="10px" width="100%" style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
            >
                <Box>
                    <Typography sx={{ fontSize: "16px", fontWeight: "light", color:"#5F6980" }}>{title}</Typography>
                    <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>{value}</Typography>
                </Box>
                <Box display="flex" mt="10px">
                    <Box
                        p="0 8px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={
                            increase.startsWith('+') ? '#DCFFF5' : increase.startsWith('-') ? '#FFE0E3' : '#F2F4F7'
                        }
                        borderRadius="20px"
                        mr="10px"
                        >
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: increase.startsWith('+') ? '#20C997' : increase.startsWith('-') ? '#DC3545' : '#5F6980'
                            }}
                        >
                            {increase}
                        </Typography>

                    </Box>
                    <Typography sx={{ fontSize: "12px" }}>{pastval}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default StateBox;
