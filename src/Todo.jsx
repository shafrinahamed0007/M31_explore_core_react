// export default function ToDo({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//             <li>IsDone: {isDone}</li>
//         </div>
//     )
// }

export default function ToDo({task, isDone, time}){
   if(isDone){
    return <li>Done: {task} Time:{time}</li>
   }
    return <li>Do now: {task} </li>
   
}