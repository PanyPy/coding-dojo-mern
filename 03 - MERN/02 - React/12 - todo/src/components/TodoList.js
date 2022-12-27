import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    console.log('use effect')
    const items = JSON.parse(localStorage.getItem('todoList'));
    items && setTodoList(items);
  }, []);

  const addNote = (note) => {
    const newNote = {note, checked: true};
    setTodoHelper([...todoList].concat(newNote));
  }

  const onCheck = (index) => {
    const newNotes = [...todoList];
    newNotes[index].checked = !newNotes[index].checked;
    setTodoHelper(newNotes);
  }
  const deleteNote = (index) => {
    const newNotes = [...todoList];
    newNotes.splice(index, 1);
    setTodoHelper(newNotes);
  };

  const setTodoHelper = (newNotes) => {
    setTodoList(newNotes);
    localStorage.setItem('todoList', JSON.stringify(newNotes));
  }

  return (
    <>
      <InputForm addNote = {addNote} />
      {todoList.map((todo, index) => {
        const note = todo.checked ? <p><s>{todo.note}</s></p> : <p>{todo.note}</p>;

        return (
          <div className="form-check" key={index}>
            <label className="form-check-label">{note}</label>
            <input type="checkbox" checked={todo.checked} onChange={() => onCheck(index)}></input>
            <button type="button" className="btn btn-danger" onClick={ () => deleteNote(index) }>Delete</button>
          </div>
        )
      })}
    </>
  );
}
