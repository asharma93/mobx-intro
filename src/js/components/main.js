import React from 'react';
import Intro from 'components/intro';
import TodoList from 'components/todo/List';
// MobX store
import store from './Store';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <TodoList store={store} />
            </div>
        );
    }
}

export default Main;