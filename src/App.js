import { useState } from 'react';
import './App.css';
function TodoList() {
  const [task, settask] = useState("")
  const [todoList, settodoList] = useState([])
  function deleteItem(index) {
    var final = [...todoList]
    final.splice(index, 1)
    settodoList(final)
  }
  return (
    <div id='maindiv'>
      <h2 style={{color:"white",textAlign:"center",fontSize:"3vw"}}>Simpale To-Do List App</h2>
      <div id='todo'>
      <input type="text" placeholder='Write a Todo' value={task} onChange={(n) => {
        settask(n.target.value)
      }} />
      <button className='btn1' onClick={() => {
        task.trim() ? settodoList([...todoList, task]) : alert("enter valid str")
        settask("")
      }}>Add Todo</button>
      </div>
      {
        todoList.map((item, index) => {
          return (
            <div id='subdiv'>
              <h1>{item}</h1>
              <button  onClick={() => {
                deleteItem(index)
              }}>Delete</button>

              <button onClick={() => {
                let final1 = [...todoList]
                let user = prompt("Enter Any Thig")
                final1[index] = user
                settodoList(final1)
              }}>Edit</button>

              <button onClick={() => {
                var final1 = [...todoList]
                final1[index] = <del>{final1[index]}</del>
                settodoList(final1)
              }}>Complete</button>
            </div>
          )
        })
      }

    </div>
  )
}
export default TodoList;