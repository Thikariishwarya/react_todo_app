import { useState} from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddForm(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const handleTask=(event)=>{
        return setTask(event.target.value);
    }
    const submitHandler=(evnt)=>{
        evnt.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
    return(<>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter task" value={task} onChange={handleTask}></input>&nbsp;&nbsp;
        <button>Add Task</button>
    </form>
    </>)
}