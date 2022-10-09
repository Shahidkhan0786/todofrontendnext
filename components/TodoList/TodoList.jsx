import React,{useState,useEffect} from "react";
import styles from "./TodoList.module.css";
import Model from "../common/Model";
import Form from '../Form/Form'
const axios = require('axios').default;
import { createTodo ,getTodoById,updateTodo,delTodo} from "../../pages/api/apihelper";

import { BiCalendarEdit } from "react-icons/bi";
import Searchbar from "../common/Searchbar";



const TodoList = () => {
  let [showModel , setShowModel] = useState(false)
  const [todo ,setTodo] =useState([]);


  const [values ,setValues] = useState({
    _id:"",
    title:"",
    description:"",
    status:"pending",
    error:""
  })

  const [query ,setQuery] = useState("")  

const {title , description , status,error} = values;

const handleChange = (e)=>{
    e.preventDefault()
    setValues({...values , [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("submittteeer")
    createTodo(values)
    .then((data)=>{
      console.log(data)
      if(data.error){ return setValues({...values, error:data.error , success:false})}
      setValues({
        title:"",
        description:"",
        status:"pending"
      })
      onClose()
      console.log(data)
    
  })
    .catch(err=>console.log(err))
  }


  
  useEffect( () => { 
    async function fetchTodo() {
        try {
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_api}/todos`); 
            console.log("useeffect" , data.data)
            setTodo(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchTodo();
}, [values]);

const handleEdit = (todo)=>{
  // console.log(todo)
    getTodoById(todo)
    .then((data)=>{
      if(data.error)  setValues({...values ,error:data.error})
      let todo = data.data
      // console.log(todo)
      setValues({...values ,title:todo.title, description:todo.description, status:todo.status ,_id:todo._id})
      setShowModel(true)
    })
    .catch(err=>console.log(err))

    // setShowModel(true)
}

const handleUpdate =(e)=>{
  e.preventDefault();
  setValues({...values, [e.target.name]:e.target.value})
  // console.log("called" , values)
  updateTodo(values)
  .then((res)=>{
    if(res.error) return setValues({...values , error:res.error})
     setValues({...values ,_id:"",
     title:"",
     description:"",
     status:"pending",
     error:"" })
  })
  .catch(err=>console.log(err))
  setShowModel(false)
}

const handleDel =(e)=>{
  // console.log("called" , values)
  delTodo(values)
  .then((res)=>{
    if(res.error) return setValues({...values , error:res.error})
     setValues({...values ,_id:"",
     title:"",
     description:"",
     status:"pending",
     error:"" })
  })
  .catch(err=>console.log(err))
  setShowModel(false)
}


const handleSerch = (e)=>{
      
}


  return (
    <>
    <div className={styles.todoWrapper}>
      <div >
        <div className={styles.row}>
          <div className={styles.title}>TODOS LIST</div>
          
          {/* start todo body  */}
          <div className={styles.todoBody}>
          <Searchbar handleSerch={handleSerch} query={query} onchange={(e)=> setQuery(e.target.value)}/>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
              <input type="text" id="title"  name="title" value={title} onChange={handleChange} className={styles.forminput} required/>
              <input type="text" id="description" name="description" required value={description} onChange={handleChange} className={styles.forminput } />
              <button type="submit"  className={styles.formbutton} >Add</button>
              </form>
            </div>
            <div className={styles.listContainer}>
              <ul className={styles.list}>
                {todo.filter(todo=>todo.title.toLowerCase().includes(query)).map((todo , index)=>
                  (
                    <li key={todo._id} className={styles.listItem}>
                       
                      {todo.status == "pending" ? <p className={styles.pendingstatus}>{todo.title} <span>
                        <button style={{background:'red',padding:'8px',marginLeft:"20px",borderRadius:"10px"}}>{todo.status}</button>
                        </span></p> :<p className={styles.comstatus}>{todo.title} <span>
                        <button style={{background:'green',padding:'8px',marginLeft:"20px",borderRadius:"10px"}}>{todo.status}</button>
                        </span></p>}
                      
                      <button className={styles.editbutton} onClick={()=>handleEdit(todo._id)}>
                      <BiCalendarEdit size="30px"/>
                      </button>
                     </li>
                  )
                )}
                
              </ul>
            </div>
          </div>
          {/* end todo body  */}
        </div>
      </div>
    </div>

    <Model isVisible={showModel} onClose={()=>setShowModel(false)} title="EDIT TODO" values={()=>setValues({...values ,_id:"",
     title:"",
     description:"",
     status:"pending",
     error:"" })}>
        <Form props={[handleUpdate,handleChange,values,handleDel]}/>
    </Model>
    
    </>
  );
};

export default TodoList;
