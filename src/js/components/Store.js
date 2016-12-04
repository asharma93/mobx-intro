import { observable } from 'mobx';

class TodoStore {
    @observable todos = ['Buy table tennis table', 'Get better at table tennis lawlz'];
    @observable filter = ''; // initial filter
}

const store = window.store = new TodoStore(); // hang it on the window object for debug purposes

export default store;