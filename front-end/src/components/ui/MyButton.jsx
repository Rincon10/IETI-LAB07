import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ type, variant, sx, text, color }) => {
    return (
        <Button
            style={{ backgroundColor: color }}
            type={type}
            fullWidth
            variant={variant}
            sx={sx}
        >
            {text}
        </Button>
    );
};

export default MyButton;
