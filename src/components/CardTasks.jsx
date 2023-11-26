import PropTypes from 'prop-types';

function CardTasks({ Tarea, onDelete }) {
  return (
    <div className="">
      <div className='flex items-center justify-between py-4 px-4 bg-primary-400 backdrop-blur-lg rounded-xl shadow-xl mt-2 mb-2 mx-2 scale-100
        hover:scale-105 hover:bg-primary-500
        transition-all transform'>
        <p className='flex items-start text-slate-100 font-sans font-semibold text-white'>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 7h-6l4 5l-4 5h6l4 -5z"></path>
            </svg>
          </span> {Tarea}
        </p>

        <button className="text-[#ef4444] focus:outline-0" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

CardTasks.propTypes = {
  Tarea: PropTypes.string,
  onDelete: PropTypes.func, 
};

export default CardTasks;
