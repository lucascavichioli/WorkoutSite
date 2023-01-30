import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import TrainingPlanList from "./Components/TrainingPlanList";
import ListExercises from "./Pages/ListExercises";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <div>
                <Header name="WorkoutApp" links ={["Planos", "Treinos"]}></Header>
                <TrainingPlanList />
              </div>
        }/>
        <Route path="/training/:id" element={<ListExercises />}/>
        <Route path="*" element={<>404 NotFound</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
