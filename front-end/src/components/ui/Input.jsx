import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ margin, id, label, name, type, handleChange }) => {
    return (
        <TextField
            margin={margin}
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoFocus
            type={type}
            onChange={handleChange}
        />
    );
};

Input.propTypes = {
    handleChange: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
