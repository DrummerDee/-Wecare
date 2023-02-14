import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Tooltip from '@mui/material/Tooltip';


const Tab = () => {
    const styling = {
        position: "absolute",
        top: "80%",
        left: "6%",
        transform: "translate(-20%, -25%)",
    }
    return (

        <Box sx={styling}>
            <Tooltip
                title='Questions?'
                placement='top'
                arrow
            >
                <Fab style={{ backgroundColor: '#21b6ae', color: 'white' }} aria-label="add">
                    <QuestionMarkIcon />
                </Fab>
            </Tooltip>
        </Box>
    )
}

export default Tab;