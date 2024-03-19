import React,{Fragment,useEffect,useState} from "react";
import EditToDo from "./EditToDo";

const ListToDos = () => {
    // delete todo function

    async function deleteToDo(id){
        try {
            const deleteToDo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id!==id))
        } catch (err) {
            console.error(err.message)
            
        }

    }

    const[todos,setTodos] = useState([]);

    // const getTodos = async () => {
    //     try {
    //       const response = await fetch("http://localhost:5000/todos");
    //       const jsonData = await response.json();
    
    //       setTodos(jsonData);
    //     } catch (err) {
    //       console.error(err.message);
    //     }
    //   };

    async function getTodos() {
        try {
          const response = await fetch("http://localhost:5000/todos");
          const jsonData = await response.json();
    
          setTodos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

    useEffect(() => {
        getTodos();
      }, [ ]);

  console.log(todos);

    return <Fragment><table  style={{backgroundColor: 'rgba(128, 128, 128, 0.2)'}} className="table mt-5 text-center" >
    <thead>
      <tr style={{backgroundColor: 'rgba(128, 128, 128, 0.5)'}}>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/ }
      {/* {todos.map(todo =>(
        <tr>
            <td>{todo.description}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
      ))} */}
      {todos.map(function(todo){
            return(<tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditToDo todo={todo}/></td>
            <td><button className="btn btn-danger" onClick={()=>deleteToDo(todo.todo_id)}>Delete</button></td>
        </tr>);
     })}

        



    </tbody>
  </table></Fragment>
};

export default ListToDos;