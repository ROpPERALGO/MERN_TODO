import React, { useState, useEffect } from 'react';
import './App.css';
import ToDo from './component/ToDo';
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi';
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  const handleAddOrUpdate = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  return (
    <>
     <div>

     <div className="Slide">
  <h1 contenteditable className='para_t'>ToDo List</h1>
  <p className='para'>Todo list application using the MERN stack with MongoDB Atlas</p>
</div> 
      <div className="Element">
        <input
          type="text"
          placeholder="Add ToDo's "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div onClick={handleAddOrUpdate}>
          {isUpdating ? "Update" : "Insert Data"}
        </div>
      </div> 

      <div className="List">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateToDo={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
      </div>
</>
  );
}

export default App;
