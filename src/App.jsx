import { Route, Routes } from 'react-router';

import Homepage from './pages/Homepage';
import ToDoListPage from './pages/TodoListPage';
import Navbar from './components/Navbar';

export default function App() {


    return (
        <>
            <Navbar />
            <div className='flex center'>
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="users/:id/todos" element={<ToDoListPage />} />
                    </Routes>

                </div>
            </div>
        </>
    )
}