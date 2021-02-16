import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';

const Footer = () => (
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <p>&copy; {new Date().getFullYear()} - Diego Díaz </p>
    </Box>
);

export default Footer;