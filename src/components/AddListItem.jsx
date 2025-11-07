import { useState } from "react";

export default function AddListItem({dispatch, id}) {
    const [title, setTitle] = useState("");

    function handleClick() {
        if (title !== "") {
            dispatch({type: "ADD", item: {userId: 1, id, title, completed: false} });
            setTitle("");
        }
    }

    return (
        <div className="add-item">
            <input type="text" placeholder="Add task" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="action-btn" onClick={handleClick}>Add</button>
        </div>
    );
}