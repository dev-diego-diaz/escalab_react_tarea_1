import React from 'react';
import Articulos from '../../components/articulos/articulos.component';
import {articulos_vinilos} from '../../constants/index';

const Vinilos = () => {
    return(
        <div style={{ width: '100%' }}>

            <p>VINILOS</p>
            <hr />
            {articulos_vinilos.map(vinilo => {
                const {_id, artista, disco, img, valor} = vinilo;
                return(
                    <div key={_id} style={{'display': 'inline-flex'}}>
                       <Articulos artista={artista} disco={disco} img={img} valor={valor} altura={250} ancho={250}/>
                    </div>
                );
            })}

        </div>
    );
};

export default Vinilos;