import React from 'react';
import ReactDom from 'react-dom';

const AppHeader = () => {
   return  <h1>My Todo List</h1>
};

const SearchPanel = () => {
    return <input type="text" placeholder='Search'/>
};

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    )
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

ReactDom.render(<App />, document.getElementById('root'));
