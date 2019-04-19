import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    onLabelClick = () =>  {
       this.setState(({done}) => {
          return{
              done : !done
          }
       });
};
    onMarkImportant = () => {
        this.setState( ({important}) =>{
           return {
               important : !important
           }
        });
    };

    render (){
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = "todo-list-item row";
        if(done){
            classNames += " done";
        }
        if(important){
            classNames += " important";
        }


        return  (
            <span className={classNames} >
            <span
                className="todo-list-item col-lg-10"
                onClick={this.onLabelClick}>

                { label }
            </span>

            <button type="button"
                    className="btn btn-info btn-sm"
                    onClick={this.onMarkImportant}>
                <i className = "fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-danger btn-sm"
                onClick= { onDeleted } >
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