import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer";
import Header from './Components/Header';
import TrainingPlanList from "./Components/TrainingPlanList";
import ListExercises from "./Pages/ListExercises";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <>
                <Header name="WorkoutApp" links ={["Planos", "Treinos"]}></Header>
                <TrainingPlanList />
                <Footer/>
              </>
        }/>
        <Route path="/training/:id/:idTrainingPlanTraining" element={<ListExercises />}/>
        <Route path="*" element={<>404 NotFound</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
