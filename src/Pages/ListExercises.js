import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Api from '../Services/Api';

function ListExercises(){

    const [exercises, setExercises] = useState([]);
    const { id } = useParams();
    
    const [checkedState, setCheckedState] = useState(
        new Array(exercises.length).fill(false)
    );
    
    useEffect(() => {
        try{
            Api.get("/TrainingExercises/"+id).then(result => {
                const results = result.data.sort(function(a,b){
                    if(a.order > b.order) return 1;
                    if(a.order < b.order) return -1;
                    return 0;
                })
                setExercises(results)
            });
        }catch(err){
            console.log(err);
        }
    }, []); 

    if (exercises.length !== 0) {
        var description = exercises[0].description;
    }

    
    function save(id, training, exercise){
        var trainingObj = [];
        var checkbox = document.getElementById('checkbox-'+id);
        var trainingStr = JSON.stringify(training);
        var exerciseStr = JSON.stringify(exercise);
        
        var trainingArr = localStorage.getItem(trainingStr);
        if(trainingArr != null)
            trainingObj = JSON.parse(trainingArr);
        else{
            trainingObj = [];
        }

        if(checkbox.checked){
            trainingObj.push(exerciseStr)
            localStorage.setItem(trainingStr, JSON.stringify(trainingObj));
        }else{
            var pos = trainingObj.indexOf(exerciseStr);
            trainingObj.splice(pos, 1)
            localStorage.setItem(trainingStr, JSON.stringify(trainingObj));

            if(localStorage.getItem(trainingStr) == "[]")
                localStorage.removeItem(trainingStr);

        }
    }

    function verifyLog(training, exercise){
        var trainingStr = JSON.stringify(training);
        var exerciseStr = JSON.stringify(exercise); 
        var exerciseKey = localStorage.getItem(trainingStr);
        if(exerciseKey != null){
            var exerciseObj = JSON.parse(exerciseKey)
            var pos = exerciseObj.indexOf(exerciseStr);

            if(pos >= 0)
                return true
            else
                return false
        }
    }

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    return(
        <>
        <Header name="WorkoutApp" links ={[]}></Header>
        <div className="grid justify-center pt-4">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{description}</h5>
                </div>
                <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {exercises.map((list, index) => 
                        <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4 px-0 mx-0">
                                <div className="flex-shrink-0 bg-white border border-black rounded-full h-6 w-6 text-center">
                                    {list.order}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p>
                                        {list.title}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {list.reps}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {list.restSeconds} rest
                                    </p>
                                </div>
                                <div className="inline-grid grid-cols-2 gap-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z"></path>
                                    </svg>
                                    {list.sets}
                                </div>
                                <div class="flex items-center mr-4">
                                    <input checked={verifyLog(list.trainingFK, list.exercisesFK)} id={'checkbox-'+index} type="checkbox" onChange={() => handleOnChange(index)} onClick={() => save(index, list.trainingFK, list.exercisesFK)} class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                </div>
                <div className="text-center">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Concluir treino
                    </button>
                </div>
            </div>
        </div>
        </>
    );

}

export default ListExercises;