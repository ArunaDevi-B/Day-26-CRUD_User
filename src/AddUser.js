import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";


const userValidationSchema=yup.object({
  name: yup
    .string()  
    .required("Why not fill the name?"),  
  username: yup
  .string()
  .min(5,"Required longer username😆")
  .required("Username is mandatory!"),
  email: yup
  .string()
  .min(13, "Need a longer email😆")
  .required("Email is Mandatory!")
})


export default function AddUser(){

  const formik=useFormik({
    initialValues: {name: "",username: "",email: ""},
    validationSchema: userValidationSchema,
    onSubmit: (newUser)=>{
     createUser(newUser)
    }
   })

   const createUser = (newUser)=>{

    console.log("createUser", newUser)
    fetch("https://62cbb33e3e924a01286a67a0.mockapi.io/user",{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("/"));

   }

   const navigate=useNavigate()

  return(
    <div className="add-user">
    <div className="container mt-5">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
       <form onSubmit={formik.handleSubmit}>
       <input 
       className="form-control form-control-lg" 
       id="name"
       name="name"
       type="text" 
       value={formik.values.name}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your name" 
       aria-label=".form-control-lg example" />

            
            {formik.touched.name && formik.errors.name? formik.errors.name : ''}
            <br></br>

            <input 
            className="form-control form-control-lg" 
            id="username"
            name="username"
       type="username" 
       value={formik.values.username}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your username" 
       aria-label=".form-control-lg example" />
          {formik.touched.username && formik.errors.username? formik.errors.username : ''}
          <br></br>
          <input
           className="form-control form-control-lg" 
           id="email"
           name="email"
       type="email" 
       value={formik.values.email}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your email" 
       aria-label=".form-control-lg example" />


           
         {formik.touched.email && formik.errors.email? formik.errors.email : ''}

         <div className="d-grid gap-2 col-6 mx-auto">
  <button onClick={createUser} className="btn btn-success mt-5" type="submit">Add</button>
  </div>
         </form>
    </div>
    </div>
    </div>
  )
}

