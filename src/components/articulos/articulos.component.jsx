    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardActionArea from '@material-ui/core/CardActionArea';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles({
        root: {
            maxWidth: '250px',
            padding: '10px 10px',
            margin: '10px 20px 10px 50px',
        },
    });

    const Articulos = ({_id, artista, disco, img, valor, altura}) => {
    const classes = useStyles();

    return(
        
        <Card key={_id} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={artista}
                    height={altura}
                    image={img}
                    title={disco}
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="p">
                        {
                            disco ? 
                                `${artista} - ${disco}`
                            : artista
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${valor}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
  
}

export default Articulos;