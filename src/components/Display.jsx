
import DisplayCards from './DisplayCards'
import Header from './Header'
import Inputs from './Inputs'
import { useState } from 'react';

function Display() {

    const [tareas, setTareas] = useState([
    ]);

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea]);
    };

   
  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, index) => index !== indice);
    setTareas(nuevasTareas);
  };
 
    return (
        <div className=" h-[100] w-[28%] border-4 shadow-2xl bg-secondary-800 text-white flex flex-col items-center justify-start rounded-[32px]  ">
            <Header />

            <DisplayCards tareas={tareas}  eliminarTarea={eliminarTarea} />
            <Inputs agregarTarea={agregarTarea} />
        </div>
    )
}

export default Display