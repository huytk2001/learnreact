import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListPage from './Page/ListPage';
import DetailPage from './Page/DetailPage';

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="/todos" element={<ListPage />} exact />
        <Route path="/todos/:todoId" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

TodoFeature.propTypes = {
  // Define any props if needed
};

export default TodoFeature;
