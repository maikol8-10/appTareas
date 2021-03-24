import React from 'react';
import Tareas from "./Tareas";

const ListaTareas = ({tareas, cambiarTareas}) => {

    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, completada: !tarea.completada}  //Se cambia el estado de la tarea a su valor contrario
            }
            return tarea; //Sino se retorna la tarea
        }));
    };

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, texto: nuevoTexto}  //Se cambia el estado de la tarea a su valor contrario
            }
            return tarea; //Sino se retorna la tarea
        }));
    };

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return {tarea}  //Se cambia el estado de la tarea a su valor contrario
            }
            return; //Sino se retorna la tarea
        }));
    };

    return (
        <ul className='lista-tareas'>
            {
                tareas.length > 0 ? tareas.map((tarea) => {
                        return <Tareas key={tarea.id} tarea={tarea} toggleCompletada={toggleCompletada}
                                       editarTarea={editarTarea} borrarTarea={borrarTarea}></Tareas>
                    })
                    : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}

export default ListaTareas;