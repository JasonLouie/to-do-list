import { useContext, useState } from "react";
import ItemContext from "../itemContext";

export default function ToDoListItem({ id, title, completed }) {
    const dispatch = useContext(ItemContext);
    const [edit, setEdit] = useState({ state: false, title });
    const [done, setDone] = useState(completed);

    function handleSave() {
        dispatch({ type: "MODIFY", title: edit.title, id });
        setEdit({ ...edit, state: !edit.state });
    }

    function handleDone(e) {
        setDone(e.target.checked);
        dispatch({ type: "TOGGLE", id });
    }

    return (
        <div className="flex item-container">
            <div className="to-do-item flex">
                <input type="checkbox" name="completed" checked={done} onChange={handleDone} />
                {edit.state ?
                    <input type="text" name="title" value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
                    :
                    <p>{title}</p>
                }
            </div>
            <div className="action-container">
                {edit.state ?
                    <>
                        <button className="action-btn" onClick={handleSave}>Save</button>
                        <button className="action-btn" onClick={() => setEdit({ state: false, title })}>Cancel</button>
                    </> :
                    <>
                        <button className="action-btn" onClick={() => setEdit({...edit, state: true})}>Edit</button>
                        <button className="action-btn" disabled={!done} onClick={() => dispatch({ type: "DELETE", id })}>Delete</button>
                    </>
                }
            </div>
        </div>
    );
}