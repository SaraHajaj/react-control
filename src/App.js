import React from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUsers } from "./redux/UserSlice";
import { getPosts } from "./redux/PostsSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Acceuil from './Components/Acceuil';
import DetailUser from './Components/DetailUser';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Acceuil />
        <DetailUser />
      </div>
    </Router>
  );
}
export default App;


