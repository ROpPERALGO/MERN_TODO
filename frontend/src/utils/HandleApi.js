import axios from 'axios';
const baseUrl = "http://localhost:5001";
const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch(error => console.error("Error fetching todos: ", error));
}

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch(error => console.error("Error adding todo: ", error));
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch(error => console.error("Error updating todo: ", error));
}
const deleteToDo = (_id,setToDo) => {
    axios.post(`${baseUrl}/delete`,{_id})
      .then(() => {
        getAllToDo(setToDo);
      })
      .catch(error => console.error("Error updating todo: ", error));
  }
  
export { getAllToDo, addToDo, updateToDo, deleteToDo };














// import axios from 'axios'

// const baseUrl = "http://localhost:5001"

// const getAllToDo = (setToDo) => {
//   axios
//     .get(baseUrl)
//     .then(({ data }) => {
//       setToDo(data)
//     })
//     .catch(error => console.error("Error fetching todos: ", error))
// }

// const addToDo = (text, setText, setToDo) => {
//   axios.post(`${baseUrl}/save`, { text })
//     .then(() => {
//       setText("")
//       getAllToDo(setToDo)
//     })
//     .catch(error => console.error("Error adding todo: ", error))
// }

// const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
//   axios.post(`${baseUrl}/update`, { _id: toDoId, text })
//     .then(() => {
//       setText("")
//       setIsUpdating(false)
//       getAllToDo(setToDo)
//     })
//     .catch(error => console.error("Error updating todo: ", error))
// }

// const deleteToDo = (toDoId, setToDo) => {
//     axios.delete(`${baseUrl}/delete`)
//       .then(() => {
//         console.log(toDoId)
//         getAllToDo(setToDo)
//       })
//       .catch(error => console.error("Error deleting todo: ", error))
//   }
  
//   export { getAllToDo, addToDo, updateToDo, deleteToDo }












