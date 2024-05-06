import './App.css'
import { Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import SearchBar from './components/PaginatedSearch'
import Tree from './components/Tree'
import AudioPlayer from './components/AudioPlayer'
import { useState } from 'react'

function App() {
  const [audioSrc, setAudioSrc] = useState('');

  // console.log('todos', todos)
  return (
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/search-bar' element={<SearchBar/>}/>
      <Route path='/tree-structure' element={<Tree/>}/>
      <Route path='/audio-player' element={<AudioPlayer audioSrc={audioSrc} setAudioSrc={setAudioSrc}/>}/>
    </Routes>

    
  )
}

export default App
