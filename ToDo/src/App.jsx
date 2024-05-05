import './App.css'
import { Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import SearchBar from './components/PaginatedSearch'

function App() {


  // console.log('todos', todos)
  return (
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/search-bar' element={<SearchBar/>}/>
    </Routes>

    
  )
}

export default App
