import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

    const element = todos.map((item)=>{

      const  {id, ...itemProms} = item;

        return (
            <li key = {id} className="list-group-item text-left">
                <TodoListItem {...itemProms }/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {element}
        </ul>
    )
};

export default TodoList;