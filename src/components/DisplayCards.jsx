import CardTasks from "./CardTasks"


function DisplayCards({tareas, eliminarTarea}) {
    

    return (
        <div className="justify-start overflow-y-auto  appearance-none scroll-smooth h-[100%] w-[100%] flex flex-col py-6 px-4  ">
            {tareas.map((tarea, index) => (
                <CardTasks key={index} Tarea={tarea}  onDelete={() => eliminarTarea(index)} />
            ))}
        </div>
    )
}

export default DisplayCards