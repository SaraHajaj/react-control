
import React from 'react';
import "../App.css";
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import ListPosts from './ListPosts';
export default function Acceuil() {
    return (
        <div>
            <div className='Header'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListPosts/:id' element={<ListPosts/>} />
            </Routes>
        </div>
    )
}
