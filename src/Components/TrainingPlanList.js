import React, { useEffect, useState }  from "react";
import Api from '../Services/Api';

function TrainingPlanList(){
    const [trainingPlan, setTrainingPlan] = useState([]);
    const [listTrainingPlanTraining,setListTrainingPlanTraining]=useState([]);
    //var trainingPlan = [{id: 1, title:"teste", imageLink:""},{title:"teste2adawd awdawd awdawd awd awd", imageLink:""},{title:"teste", imageLink:""},{title:"teste2", imageLink:""},{title:"teste", imageLink:""},{title:"teste2", imageLink:""},{title:"teste", imageLink:""},{title:"teste2", imageLink:""}]
    
    useEffect(() => {
        try{
            Api.get("/TrainingPlan").then(result => {
                setTrainingPlan(result.data)
            });
        }catch(err){
            console.log(err);
        }
    }, []); 
    
    
    function handleClick(id){
        if(id){
            Api.get("/TrainingPlanTraining/"+id).then(result => {
                const results = result.data.sort(function(a,b){
                    if(a.order > b.order) return 1;
                    if(a.order < b.order) return -1;
                    return 0;
                })
                setListTrainingPlanTraining(results)
            });
        }
    }

    return (
        <>
        <div className="relative mb-5 bg-white">
            <ul className="border rounded-lg border-slate-200 p-4 flex space-x-4 overflow-x-auto">
            {    
                trainingPlan.map((plan, index) => 
                    <li key={index} className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer" onClick={() => handleClick(plan.id)}>
                                <img className="rounded-full h-16 w-16" src={plan.imageLink} alt="Plano" />
                            </a>
                        </div> 
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20" onClick={() => handleClick(plan.id)}>{plan.title}</div>
                        </a>
                    </li> 
                )
            }
            </ul>
        </div>
        <div>
            <ul>
            {listTrainingPlanTraining.map((list, index) => 
                <li key={index} className="flex flex-col space-y-1 m-4">
                    <a href={"/training/"+list.training.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{list.training.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{list.training.description}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{list.training.durationMinutes}m likes: {list.training.likes} comments: {list.training.comments}</p>
                        </div>
                    </a>
                </li>
            )}
            </ul>
        </div>
        </>
    )
}

export default TrainingPlanList;