import React from 'react';
import Articulos from '../../components/articulos/articulos.component';
import {articulos_bluray} from '../../constants/index';

const Bluray = () => {
    return(
        <div style={{ width: '100%' }}>

            <p>BLURAY</p>
            <hr />
            {articulos_bluray.map(bluray => {
                const {_id, artista, disco, img, valor} = bluray;
                return(
                    <div key={_id} style={{'display': 'inline-flex'}}>
                       <Articulos artista={artista} disco={disco} img={img} valor={valor} altura={350} ancho={250} />
                    </div>
                );
            })}

        </div>
    );
};

export default Bluray;