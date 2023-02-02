import { useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { setItem } from "../utils/LocalStorage"
import { CardTask } from "./CardTask"

function TaskList(){
 const tasks = useSelector(state => state.tasks)
 setItem('tasks',tasks)
  return (
    <div className="container">
    <div className="taskList">
     
      <div className="taskList-title">
          <h2>My Tasks</h2>
          <span> ({tasks.length})</span>
      </div>
      
      <header className="taskList-header">
          <Link className="createTask" to='/create-task'>Create Tasks</Link>      
    </header>
    <div className="contenedor-tasksList">

      {
        !tasks.length?(
        <p className="NoTasksFound">No tasks found</p>
        ):(
          <div className="taskList-cardList">
          {tasks.map(task =>(
          <CardTask key={task.id} task={task}/>
        ))}
        </div>
        )
      }
      </div>

      </div>
      </div>
  )
}
export default TaskList