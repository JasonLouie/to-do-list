import { useReducer } from 'react';
import ToDoItem from "./components/ToDoItem";
import initialState from "./data";
import reducer from './reducer';
import AddListItem from './components/AddListItem';

export default function App() {
    const [list, dispatch] = useReducer(reducer, initialState.toReversed());

    return (
        <div>
            <h1>Create Todo List</h1>
            <AddListItem dispatch={dispatch} id={list[0].id+1} />
            {list.map(l => <ToDoItem key={l.id} dispatch={dispatch} {...l}/>)}
        </div>
    )
}
