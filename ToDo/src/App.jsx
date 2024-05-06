import './App.css'
import { Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import SearchBar from './components/PaginatedSearch'
import Tree from './components/Tree'

function App() {


  // console.log('todos', todos)
  return (
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/search-bar' element={<SearchBar/>}/>
      <Route path='/tree-structure' element={<Tree/>}/>
    </Routes>

    
  )
}

export default App
