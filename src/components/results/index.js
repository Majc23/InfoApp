import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

/*Paso 11 se seguira el patron de diseño contenedor y componente presentacional
//en este caso index.js es el contenedor y page.js es el componente pesentacional y una hoja
//de estilos pasamos a page

//Paso 13 se crea el contenedor que basicamente es lo mismo que page se importa react y 
component para crear una clase  se crea con un render que sirve para renderizar Page la cual 
viene de Page.js de results clase contenedores y componentes presentacionales el contenedor 
tiene toda la logica y el presentacional tienen los elementos graficos

//Paso 14 se crea una misma ruta con nombre de details y los misma estructura de archivos

// Paso 16 se comenzara a revisar como se intregra react redux en el proyecto, se va a la ruta 
redux y dentro de esta se genera un archivo Store.js, junto con 2 directorios, reducer y actions
*/

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            results,
        } = this.props;
        
        return (
            <Page
                results={results}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});

export default withRouter(
    connect(mapStateToProps)(Results)
);
