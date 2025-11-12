import { Route, Routes } from 'react-router';

import Homepage from './pages/Homepage';
import ToDoListPage from './pages/TodoListPage';

export default function App() {
    

    return (
        <div className='flex center'>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="users/:id/todos" element={<ToDoListPage />}/>
                </Routes>

            </div>
        </div>
    )
}