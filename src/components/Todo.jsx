import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";


export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    let dispatch=useDispatch();
    const handledelete=(id)=>{
       dispatch(deleteTodo(id));
    }
    const handledone=(id)=>{
        dispatch(markAsDone(id));
    }
return (
    <>
    <h2>Todo List App</h2>
    <AddForm/>
    <br></br><br></br><br></br>
    <hr></hr>
    <h3>Tasks To be Done!</h3>
    <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isDone.toString()==="true"?{textDecorationLine:"line-through"}:{textDecorationLine:"none"}}>
                    {todo.task}</span>&nbsp;&nbsp;
                    <button  onClick={()=>handledelete(todo.id)}>deleteTask</button>&nbsp;&nbsp;
                    <button onClick={()=>handledone(todo.id)}>MarkAsDone</button>
                </li>
            ))
        }
    </ul>
    </>
)
}
