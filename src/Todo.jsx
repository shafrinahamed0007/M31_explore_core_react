// export default function ToDo({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//             <li>IsDone: {isDone}</li>
//         </div>
//     )
// }

// export default function ToDo({task, isDone, time}){
//    if(isDone){
//     return <li>Done: {task} Time:{time}</li>
//    }
//     return <li>Do now: {task} </li>

// }

// conditional redering: 3 ternary
// condition ? true : false

// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone ?<li>Done: {task} time:{time}Mins</li> : <li>Not Done: {task}</li>
// }

// conditional rendering: 4 &&

// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone  && <li>Done task:{task} time: {time}</li>
// }

// condition redering: 5 ||
// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone  || <li>not Done task:{task} time: {time}</li>
// }

// conditional rendering: 6 use variable

export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100;
  let listItem;
  if (isDone) {
    listItem = (
      <li>
        Done: {task} time:{displayTime}
      </li>
    );
  } else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}
