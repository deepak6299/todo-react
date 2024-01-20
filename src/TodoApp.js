import React, { useState } from 'react'

export default function TodoApp() {

    let [todoLists,settodoLists] = useState([])

    let [addTask,setaddTask]=useState("")

 let handleNewTask=(event)=>{
// console.log(event.target.value);
setaddTask(event.target.value)

}

  function handleAddButton(){
      let newItem=[...todoLists,addTask]
   console.log(newItem);
   settodoLists(newItem)
   
   
    }

    function handleDeleteButton(deletedItem){
      const newTodiItems=(todoLists.filter((item)=>item !==deletedItem))
      settodoLists(newTodiItems)
      console.log(deletedItem);
    }

  return (
    <div className='TodoApp'>
        <h3>Todo App</h3>
      <div className="todoApp">
        <input type="text" placeholder="Enter task here " onChange={handleNewTask} />
      
        <button onClick={handleAddButton}  >Add</button>
      </div>
      {todoLists.length===0?<h3>Enjoy Your day</h3>:todoLists.map((item) => (
        <div className="listingItems active">
         <span >{item} </span>
          <button onClick={()=>handleDeleteButton(item)} >Delete</button>
        </div>
      ))}
      
    </div>
  )
}
