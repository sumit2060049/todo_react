import React, { useState } from "react";

function Todo() {
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    const [editId,setEditId]=useState(0);
    const handleChange=(e) => {
        setTodo(e.target.value);
        // console.log(todo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(editId){
            const editTodo=todos.find((i) => i.id === editId);
            const updatedTodo=todos.map((t)=> t.id === editTodo.id?(t={id:t.id,todo}):{i:t.id,todo:t.todo});
            setTodos(updatedTodo)
            setEditId(0);
            setTodo("");
            return;
        }

        if(todo!=="")
        {
        setTodos([...todos,{id:`{todo}-${Date.now()}`,todo}]);
        console.log(todo);
        setTodo("")
        }
    }

    const deleteHandler=(id) => {
        const delTodo= todos.filter((to) => to.id !==id)
        setTodos([...delTodo])
    }
    const editHandler=(id) => {
        const editTodo=todos.find((i) => i.id === id)
        setTodo(editTodo.todo)
        setEditId(id);
    }

    return (
        <>
            <div className="container-sm large text-center">
                <h1 className="text-info">Todo App</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="form-control mt-2 mb-3 text-center" 
                    type="text" 
                    // placeholder="Enter Todo..." 
                    // onChange={handleChange}
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    />
                    <div>
                    <button type="submit" className="btn btn-primary">Add Todo!</button>
                    </div>
                </form>
            <div>
                {
                    todos.map((t) => {
                        return(
                            <>
                            <div className="container bg-info mt-2">
                            <p className="todo" key={t.id}>{t.todo}</p>
                            <button onClick={() => editHandler(t.id)} className="btn btn-primary">Edit</button>
                            <button onClick={() => deleteHandler(t.id)} className="btn btn-danger mx-2">Delete</button>
                            </div>
                            </>
                        );
                    })}
            </div>
            </div>
        </>
    );
}

export default Todo