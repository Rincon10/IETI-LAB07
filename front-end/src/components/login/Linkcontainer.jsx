import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Mylink from 'components/ui/Mylink';
import React from 'react';

const Linkcontainer = ({ color }) => {
    return (
        <Grid container>
            <Mylink
                href="#"
                variant="body2"
                text="Forgot password?"
                color={color}
            />
            <Mylink
                href="#"
                variant="body2"
                text="Don't have an account? Sign Up"
                color={color}
            />
        </Grid>
    );
};

Linkcontainer.propTypes = {
    color: PropTypes.string,
};

export default Linkcontainer;
