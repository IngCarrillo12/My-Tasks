import TaskForm  from './Components/TaskForm'
import TaskList from './Components/TaskList'
import { Route, Routes} from 'react-router-dom'
import './App.css'



function App() {
  return (
<>
    <Routes>
      <Route index element={<TaskList/>}/>
      <Route path='/create-task' element={<TaskForm/>}/>
      <Route path='/edit-task/:id' element={<TaskForm/>}/>
    </Routes>
</>
  )
}

export default App
