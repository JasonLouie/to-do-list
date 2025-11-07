import { useReducer } from 'react';
import ToDoItem from "./components/ToDoItem";
import initialState from "./data";
import reducer from './reducer';

export default function App() {
    const [list, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Create Todo List</h1>
            {list.map(l => <ToDoItem key={l.id} dispatch={dispatch} {...l}/>)}
        </div>
    )
}
