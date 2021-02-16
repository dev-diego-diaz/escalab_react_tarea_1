import React from 'react';
import Articulos from '../../components/articulos/articulos.component';
import {articulos_home_vinilos, articulos_home_poleras} from '../../constants/index';

import './homepage.styles.css';

const HomePage = () => {

    return(
        <div style={{ width: '100%' }}>

            <p>VINILOS DESTACADOS</p>
            <hr />
            {articulos_home_vinilos.map(vinilo => {
                const {_id, artista, disco, img, valor} = vinilo;
                return(
                    <div key={_id} style={{'display': 'inline-flex'}}>
                       <Articulos artista={artista} disco={disco} img={img} valor={valor} altura={250} ancho={250}/>
                    </div>
                );
            })}



            <p>POLERAS DESTACADAS</p>
            <hr />
            {articulos_home_poleras.map(polera => {
                const {_id, artista, disco, img, valor} = polera;
                return(
                    <div key={_id} style={{'display': 'inline-flex'}}>
                       <Articulos artista={artista} img={img} valor={valor}/>
                    </div>
                );
            })}

            

        </div>
    );
};

export default HomePage;