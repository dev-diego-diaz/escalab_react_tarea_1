import React from 'react';
import { Link } from "react-router-dom";

import { AppBar, Toolbar } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

import './Header.styles.css';

const Header = () => {
    return(
        <AppBar position="sticky">

            
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <HeadsetMicIcon />

                <Toolbar>
                    <ul className="menuPrincipal">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/bluray">Bluray</Link>
                        </li>
                        <li>
                            <Link to="/vinilo">Vinilos</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>

                </Toolbar>
            </Box>

        </AppBar>
    );
};

export default Header;