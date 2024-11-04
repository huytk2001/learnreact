import React from 'react';
import './App.css';
import Todo from './features/Todo';
import { Routes, Route } from 'react-router-dom';
// import ListPage from './features/Todo/Page/ListPage'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/todo" element={<Todo />} />
            {/* <Route path="/list" element={<ListPage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
