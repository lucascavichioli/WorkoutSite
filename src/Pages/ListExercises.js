import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Api from '../Services/Api';

function ListExercises(){

    const [exercises, setExercises] = useState([]);
    const { id } = useParams();
    
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

    return(
        <>
        <Header name="WorkoutApp" links ={[]}></Header>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{description}</h5>
            </div>
            <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {exercises.map((list, index) => 
                    <li key={index} className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
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
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {list.sets}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            </div>
        </div>
        <div className="text-center">
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Concluir treino</button>
        </div>
        </>
    );

}

export default ListExercises;
