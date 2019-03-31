import React from 'react';
import ReactDom from 'react-dom';

const AppHeader = () => {
    const styleHeader = {
        color: 'red'
    };


   return  <h1 style={styleHeader}> My Todo List</h1>
};

const SearchPanel = () => {
    const plaseholder = 'Search...';
    return (

        <input type="text"
               className='bg-red'
              /* htmlFor="name" */
                title='search'
               placeholder={plaseholder}
        />

    )
};

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{ items [0]}</li>
            <li>{ items [1]}</li>
        </ul>
    )
};

const App = () => {
    const log = false;
    const login = <span>Login in plase <br/></span>
    const logout = <span>Login out <br/></span>

    return (
        <div>
            {log? login : logout }
            <span>{ new Date().toString()}</span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

ReactDom.render(<App />, document.getElementById('root'));
