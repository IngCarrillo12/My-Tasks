
import TaskForm  from './Components/TaskForm'
import TaskList from './Components/TaskList'
import './App.css'
import { Route, Routes} from 'react-router-dom'


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
