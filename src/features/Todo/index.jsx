import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './Page/ListPage';
import DetailPage from './Page/DetailPage';
import CounterFeater from '../Counter';

function TodoFeature() {
  
  return (
    <div>
      <Routes>
        <Route path="/todo" element={<ListPage />} />
        <Route path="/todos/:todoId" element={<DetailPage />} />
        <Route path='/' element={<CounterFeater/>}/>
      </Routes>
    </div>
  );
}

export default TodoFeature;
