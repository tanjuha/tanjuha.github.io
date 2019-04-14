import React from 'react';


// props - obj, exist every function like component first parameter

/*const TodoListItem =(props) => {
    return  <span>{ props.label }</span>
};*/

const TodoListItem =({ label, important = false }) => { /*destruction*/

    const style = {
        color: important ? 'tomato' : '#000'
    };

    return  <span style={ style }>{ label }</span>
};

export default TodoListItem;