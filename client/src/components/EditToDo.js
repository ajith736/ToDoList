import React,{Fragment,useState} from "react";


function EditToDo({todo}){
  const[description,setDescription]=useState(todo.description);
  function handleClose(){
    setDescription(todo.description);
  }

  //edit description function

  async function updateDescription(e){
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)});

      window.location="/";
      

    } catch (err) {
      console.error(err.message);
      
    }

  };
    return<Fragment>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
     Edit
    </button>
  
    
    <div class="modal" id={`id${todo.todo_id}`} onClick={handleClose}>
      <div class="modal-dialog">
        <div class="modal-content">
        
          
          <div class="modal-header">
            <h4 class="modal-title">Edit ToDo</h4>
            <button type="button" class="close" data-dismiss="modal"
            onClick={handleClose}
           >
            &times;</button>
          </div>
          
         
          <div class="modal-body">
           <input type="text" className="form-control" value={description} onChange={function(e){
            setDescription(e.target.value)
           }}/>
          </div>
          
          
          <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={function(e){
            updateDescription(e)
          }}>Edit</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={handleClose}>Close</button>
          </div>
          
        </div>
      </div>
    </div>
    </Fragment>
}

export default EditToDo