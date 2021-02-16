import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';

const Footer = ({nombre}) => (
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <p>&copy; {new Date().getFullYear()} - {nombre} </p>
    </Box>
);

export default Footer;