import React, { useState, useEffect } from 'react';
import TodoList from '../../../../components/TodoList';
import AlbumFeature from '../../../../components/Album';
import { useLocation, useNavigate,  } from 'react-router-dom';
import queryString from 'query-string';
import TodoFrom from '../../TodoForm';


function ListPage(props) {
    const initTodoList = [
        { id: 1, title: 'Eat', status: 'completed' },
        { id: 2, title: 'Sleep', status: 'new' },
        { id: 3, title: 'Code', status: 'completed' }
    ];
    const location = useLocation();
    const navigate = useNavigate()
    // const param = useParams()
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        if (params.status) {
            setFilteredStatus(params.status|| 'all');
        }
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList);
    };
    const renderedTodoList = todoList.filter(todo => 
        filteredStatus === 'all' || filteredStatus === todo.status
    );
const handleShowAllClick=()=>{
    setFilteredStatus('all')
    const queryParams = {status:'all'}
    navigate({
        pathname:location.pathname,
        search:queryString.stringify(queryParams)
    });
}
const handleShowCompleted=()=>{
   
    setFilteredStatus('completed')
    const queryParams = {status:'all'}
    navigate({
        pathname:location.pathname,
        search:queryString.stringify(queryParams)
    });
}

const handleShowNew=()=>{
   
    const queryParams= {status:'new'}
    navigate({
        pathname:location.pathname,
        search:queryString.stringify(queryParams)
    })

}
 const handleTodoFromSubmit=(values)=>{
    console.log('Form Submit:',values);
    const newTodo={
        id:todoList.length+1,
        title:values.title,
        status:'new'
    }
    const newTodoList=[...todoList,newTodo]
    setTodoList(newTodoList)
    
 }
    return (
        <div>
            <h3>What to do</h3>
            <TodoFrom onSubmit={handleTodoFromSubmit}/>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <AlbumFeature/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;
