import { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
    render() {
        const {
            todos
        } = this.props.store;
        
        return (
            <div className='todo-list'>
                {
                    todos.map((todo, index) => <h1 key={index}> {todo} </h1>)
                }
            </div>
        );
    }
}