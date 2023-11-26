import React, { useState } from "react";


function Inputs({ agregarTarea }) {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleChange = (event) => {
      setNuevaTarea(event.target.value);
    };
  
    const handleGuardar = () => {
      agregarTarea(nuevaTarea);
      setNuevaTarea("");
    };

    

  return (
    <div className='flex items-center justify-center py-4 px-4 justify-center   '>
      <input
        placeholder="Nueva tarea"
        name="tarea"
        type="text"
        className="w-[100%] text-sm text-secondary-100 bg-secondary-500 border-1 border-slate-600 rounded-2xl mx-2 focus:outline-0 px-4 py-3 shadow-xl"
        value={nuevaTarea}
        onChange={handleChange}
      />
      <button
        href=""
        className='text-sm px-4 py-3 bg-primary-400 rounded-2xl hover:bg-primary-500 transition-all transform shadow-xl mx-2 '
        onClick={handleGuardar}
      >
        Guardar
      </button>
    </div>
  );
}

export default Inputs;
