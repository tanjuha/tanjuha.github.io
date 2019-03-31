import React from 'react';
import ReactDom from 'react-dom';

const element = (
    <div>
        <h1>My Todo List</h1>
        <input type="text" placeholder='Search'/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
);

console.log(element);
ReactDom.render(element, document.getElementById('root'));
