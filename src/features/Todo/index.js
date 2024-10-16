import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import AlbumFeature from '../../components/Album';

Todo.propTypes = {
    
};

function Todo(props) {
    const todoList =[
        {
            id:1,
            title:'eat'
        },
        {id:2,title:'Sleep'}
        ,{
            id:3,title:'Code'
        }
    ]
//     const albumList=[{
//         id:1,name:'tranlaluot', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/10/q/F/6/B/1725961409800_300.jpg'
//     },{
//         id:2,name:'nhac hoa', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/23/1/a/4/4/1727063466231_300.jpg'
//     },{
//         id:3,name:'trinh', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/10/q/F/6/B/1725961409800_300.jpg'
//     }
// ]
    return (
        <div>
            <h3>TodoList</h3>
           <TodoList  todoList={todoList}/>
          <AlbumFeature />
           
        </div>
    );
}

export default Todo;