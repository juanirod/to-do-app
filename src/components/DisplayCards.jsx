import CardTasks from "./CardTasks"


function DisplayCards({tareas, eliminarTarea}) {
    

    return (
        <div className="overflow-y-auto h-full w-full flex flex-col py-6 px-4 
        justify-start o  appearance-none scroll-smooth">
            {tareas.map((tarea, index) => (
                <CardTasks key={index} Tarea={tarea}  onDelete={() => eliminarTarea(index)} />
            ))}
        </div>
    )
}

export default DisplayCards