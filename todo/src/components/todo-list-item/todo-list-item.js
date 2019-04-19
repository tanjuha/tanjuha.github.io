import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
    state = {
        done: false
    };

    onLabelClick = () =>  {
       this.setState({
           done : true
       });
};
    render (){
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = "todo-list-item row";
        if(done){
            classNames += " done";
        }

        const style = {
            color: important ? 'tomato' : '#000'
        };

        return  (
            <span className={classNames} >
            <span
                style={ style }
                className="todo-list-item col-lg-10"
                onClick={this.onLabelClick}>

                { label }
            </span>

            <button type="button" className="btn btn-info btn-sm">
                <i className = "fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-danger btn-sm">
                <i className = "fa fa-trash-o"/>
            </button>
        </span>
        );
    };
};

// props - obj, exist every function like component first parameter

/*const TodoListItem =(props) => {
    return  <span>{ props.label }</span>
};*/