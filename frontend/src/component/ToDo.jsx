import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import '../App.css'
const ToDo = ({  text, updateToDo, deleteToDo }) => {
  return (
    <>

<div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        {text}
        </div>

        <div className="ag-courses-item_date-box">
        <BiEdit className="icon" onClick={updateToDo} />
          <span className="ag-courses-item_date">
          <AiFillDelete className="icon" onClick={deleteToDo} />
            </span>
        </div>
      </a>
    </div>



 {/* <div className="scroll-cards">
  <div>
        <p>{text}</p>
        <BiEdit className="icon" onClick={updateToDo} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
    </div>
  </div> */}
 </>
  );
};

export default ToDo;
