import React,{useState} from 'react'
import { createTodo } from "../../pages/api/apihelper";

const Form = ({props,onClose}) => {
  const [handleUpdate,handleChange,values,handleDel] = props
    // console.log("propsss",props)
    // const [values ,setValues] = useState({
    //     title:"",
    //     description:"",
    //     status:"pending"
    //   })

    const {title , description , status ,_id} = values;

  return (
    <>
    <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleUpdate}>
          <input type="hidden"  value={_id} name="_id" />
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

            <div>
                <label htmlFor="Todo" className="block text-sm font-medium text-gray-700">
                  Todo
                </label>
                <div className="mt-1">
                  <input
                    id="Todo"
                    name="title"
                    onChange={handleChange}
                    value={title}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-500 pl-[14px] focus:outline-none py-2 border "
                    placeholder="enter todo title"
                    
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief title for your todo.
                </p>
              </div>
            

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    onChange={handleChange}
                    value={description}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-500 pl-[14px] focus:outline-none py-2 border"
                    placeholder="you@example.com"
                    
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your todo.
                </p>
              </div>



              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <div className="mt-1">
                <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="status" value={status} onChange={handleChange}>
                  <option selected>Choose a Status</option>
                  <option value="pending">pending</option>
                  <option value="complete">complete</option>
                </select>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Select status for your todo.
                </p>
              </div>


            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update
              </button>

              <button
                
                onClick={handleDel}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-1"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form