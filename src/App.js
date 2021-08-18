import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
    //Obtenemos las tareas guardadas de LS
    let tareasGuardadas = [];
    if (localStorage.getItem('tareas') === null) {
        localStorage.setItem('tareas', '[]');
        tareasGuardadas = localStorage.getItem('tareas');
    } else {
        tareasGuardadas = localStorage.getItem('tareas');
    }

    //Accedemos al LS y comprobamos si mostrarCompletadas es null
    let configMostrarCompletadas = '';
    if (localStorage.getItem('mostrarCompletadas') === null) {
        localStorage.setItem('mostrarCompletadas', 'true');
        configMostrarCompletadas = true;
    } else {
        configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
    }

    //Establecemos el estado de las tareas
    const [tareas, cambiarTareas] = useState(JSON.parse(tareasGuardadas)
        /*[
            {
                id: 1,
                texto: 'Lavar la ropa',
                completada: false
            },
            {
                id: 2,
                texto: 'Grabar tutorial',
                completada: true
            }
        ]*/
    );

    //Estamos guardando el estado del LS
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    //El estado de mostrarCompletadas
    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
    useEffect(() => {
        localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
    }, [mostrarCompletadas]);

    console.log(tareas);
    return (
        <div className="contenedor">
            <Header
                mostrarCompletadas={mostrarCompletadas}
                cambiarMostrarCompletadas={cambiarMostrarCompletadas}
            ></Header>
            <FormularioTareas
                tareas={tareas}
                cambiarTareas={cambiarTareas}
            ></FormularioTareas>
            <ListaTareas tareas={tareas}
                         cambiarTareas={cambiarTareas}
                         mostrarCompletadas={mostrarCompletadas}
            ></ListaTareas>
        </div>
    );
}

export default App;
