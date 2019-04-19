import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

const App = () => {

    const todoData =[
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id:2},
        {label: 'Have a lunch', important: false,id:3}
    ];

    const  toDo = 2;
    const done = 1;

    return (
        <div className="container col-lg-5 text-center">
            <AppHeader toDo = {toDo}  done = {done}  />
            <SearchPanel />
            <ItemStatusFilter />
            <TodoList
                todos = {todoData}
                onDeleted ={(id) => console.log('del', id)}
            />
        </div>
    )
};

export default App;