import React from 'react';
import './todo-list-item.css';


// props - obj, exist every function like component first parameter

/*const TodoListItem =(props) => {
    return  <span>{ props.label }</span>
};*/

const TodoListItem =({ label, important = false }) => { /*destruction*/

    const style = {
        color: important ? 'tomato' : '#000'
    };

    return  (
        <span className="todo-list-item row" >
            <span style={ style } className="todo-list-item col-lg-10">{ label } </span>

            <button type="button" className="btn btn-info btn-sm">
                <i className = "fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-danger btn-sm">
                <i className = "fa fa-trash-o"/>
            </button>
        </span>
    );
};

export default TodoListItem;