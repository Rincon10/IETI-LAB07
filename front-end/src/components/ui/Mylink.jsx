import PropTypes from 'prop-types';
import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Mylink = ({ href, variant, text, color }) => {
    return (
        <Grid item xs>
            <Link sx={{ color: color }} href={href} variant={variant}>
                {text}
            </Link>
        </Grid>
    );
};

Mylink.propTypes = {
    color: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
};

export default Mylink;
