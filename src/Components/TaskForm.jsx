import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

function TaskForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)
  const [Task, setTask] = useState({
    title:'',
    description:''
  })

  const handleChange = (e)=>{
    setTask({
      ...Task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(params.id){
      dispatch(editTask(Task))
    }else{
      dispatch(addTask({
      ...Task,
      id: uuid(),
      
    }))
  }
    navigate('/')
  }

  useEffect(() => {
    if(params.id){
     setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks])
  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
   
      <Link to={'/'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg></Link>
       <h2 className="form-title">{ params.id?'Edit Task':'Create Task'}</h2>
      
    <div class="form-group"> 
	  <input type="text" onChange={handleChange} value={Task.title} name="title" className="form-control" placeholder="Title"/>
	    <label for='title' className="form-label"> Name </label> 
</div> 
<div class="form-group"> 
	<textarea type="text" onChange={handleChange} value={Task.description} name="description" className="form-control textArea" placeholder="Description"/>
	<label className="label-textArea"> Description </label> 
</div> 
<button className="button-save">Save</button>
	</form>
      </div>
  )
}
export default TaskForm
