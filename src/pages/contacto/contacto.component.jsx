import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Contacto = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        <Box display="flex" alignItems="center" justifyContent="center" m={1} p={1} bgcolor="background.paper">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    CONTACTANOS
                    </Typography>

                    <Box display="flex" flexDirection="column" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
                        <TextField id="standard-basic" label="Nombre" style={{'padding':'15px 0'}} />
                        <TextField id="standard-basic" label="Apellido" style={{'padding':'15px 0'}}/>
                        <TextField id="standard-basic" label="Email" width="100%" style={{'padding':'15px 0'}}/>
                        <TextField id="standard-basic" label="Fono" width="100%" style={{'padding':'15px 0'}}/>
                        <TextareaAutosize aria-label="Comentarios" rowsMin={4} placeholder="Escribe u comentario" />
                    </Box>


                </CardContent>

                <CardActions>
                    <Button size="small">ENVIAR</Button>
                </CardActions>
            </Card>
        </Box>
    );

};

export default Contacto;