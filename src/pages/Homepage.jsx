import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";

export default function Homepage() {

    const navigate = useNavigate();
    const [id, setId] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (id >= 1 && id <= 10) {
            navigate(`/users/${id}/todos`);
        }
    }

    return (
        <>
            <Header>Enter an Id from 1-10</Header>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="number" id="userId" max={10} min={1} value={id} onChange={(e) => setId(e.target.value)}/>
                    <button type="submit">Enter</button>
                </form>
            </div>
        </>
    );
}