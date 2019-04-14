import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

    const element = todos.map((item)=>{

      const  {id, ...itemProms} = item;

        return (
            <li key = {id}>
                <TodoListItem {...itemProms }/>
            </li>
        );
    });

    return (
        <ul>
            {element}
        </ul>
    )
};

export default TodoList;