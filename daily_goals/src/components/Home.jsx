import React, { useEffect,useState } from 'react'

import Task from "./Task"

export default function Home() {
    const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks,setTasks]=useState(initialArray);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        setTasks([...tasks,
            {title:title,
            description:description
        }])
        setTitle("");
        setDescription("");
        // localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    const deleteTask=(index)=>{
        const filteredArr=tasks.filter((val,i)=>{
            return i !==index;
        });
        setTasks(filteredArr);
        // localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))

    },[tasks]);

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
            <input required type="text" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <textarea required placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            <button className='submit'  type='submit'>ADD</button>
        </form>

        {tasks.map((item,index)=>(
            <Task key={index}
                title={item.title}
                description={item.description}
                deleteTask={deleteTask}
                index={index}
            />
        ))}
    </div>
  )
}
