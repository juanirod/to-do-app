
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
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-secondary-800 text-white flex flex-col items-center justify-start rounded-3xl p-4">
      <Header />
      <DisplayCards tareas={tareas} eliminarTarea={eliminarTarea} />
      <Inputs agregarTarea={agregarTarea} />
    </div>
    )
}

export default Display