import { useEffect, useReducer, useState } from "react";
import ToDoList from "../components/ToDoList";
import ItemContext from '../itemContext';
import initialState from "../data";
import reducer from '../reducer';
import AddListItem from '../components/AddListItem';
import Header from '../components/Header';
import { useParams } from "react-router";

export default function ToDoListPage() {

    const { id } = useParams();
    const [dataInfo, setDataInfo] = useState({ data: [], loading: true });
    const [state, dispatch] = useReducer(reducer);

    async function getTodos() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
            const data = await response.json();
            setDataInfo({data, loading: false});
            dispatch({type: "SET_LIST", data});
        } catch (err) {
            console.error(err);
            // If there is an error, fallback to the static data.
            setDataInfo({data: initialState, loading: false});
            dispatch({type: "SET_LIST", data: initialState});
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <>
            <Header>Create Todo List</Header>
            <ItemContext.Provider value={dispatch}>
                <AddListItem newItemId={state?.length > 0 ? state[0].id + 1 : 1} />
                <ToDoList list={state} loading={dataInfo.loading} />
            </ItemContext.Provider>
        </>
    );
}