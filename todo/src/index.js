import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFiter from './components/item-status-filter';

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
            <ItemStatusFiter />
            <TodoList todos = {todoData} />
        </div>
    )
};

ReactDom.render(<App />, document.getElementById('root'));
