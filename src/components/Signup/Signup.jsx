import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';


export default function Signup() {

    let [error,setError]=useState('');
    let [errorList,setErrorList]=useState([]);

    let [user,setUser]=useState({
        first_name:'',
        last_name:'',age:0,
        email:'',
        password:''
    });

  function getUser(e){
      let myUser={...user};      //spread operator
      myUser[e.target.name]=e.target.value;
      setUser(myUser);
      console.log(myUser);
  }
  function validateForm(){
      let schema=Joi.object({
        first_name:Joi.string().alphanum().min(3).max(10).required(),
        last_name:Joi.string().alphanum().min(3).max(10).required(),
        age:Joi.number().min(16).max(60).required(),
        email:Joi.string().required().email({tlds:{allow:['com','net']}}),
        password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
      })
     return schema.validate(user,{abortEarly:false})
  }
    async function submitForm(e)
     {
        e.preventDefault();
        let validationResult= validateForm();
        console.log(validationResult)

         if(validationResult.error)
         {
            setErrorList(validationResult.error.details)
         }
         else{
            let {data}=await axios.post('https://routeegypt.herokuapp.com/signup',user);
           if(data.message=='success')
           {
               window.location.href='/login';
           }
           else{
              setError(data.message);
           }
         }

  
     }
  return (
        <div className='container px-5'>
            <div className='row'>
                <div className='w-75 m-auto'>
                    <div className='my-3'>
                        <h1 className='text-center'>Sign Up</h1>
                        <form  onSubmit={submitForm}>

                            {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
                            {error?<div className="alert alert-danger">{error}</div>:''}
                    
                            <div className='my-2'>
                                <label htmlFor="first_name">First Name</label>
                                <input onChange={getUser} type="text" className='form-control' name='first_name'/>
                            </div>
                            <div className='my-2'>
                                <label htmlFor="first_name">Last Name</label>
                                <input onChange={getUser} type="text" className='form-control' name='last_name'/>
                            </div>
                            <div className='my-2'>
                                <label htmlFor="first_name">Age</label>
                                <input onChange={getUser} type="number" className='form-control' name='age'/>
                            </div>
                            <div className='my-2'>
                                <label htmlFor="first_name">Email</label>
                                <input onChange={getUser} type="email" className='form-control' name='email'/>
                            </div>
                            <div className='my-2'>
                                <label htmlFor="first_name">Password</label>
                                <input onChange={getUser} type="password" className='form-control' name='password'/>
                            </div>
                            <button type='submit'  className='btn btn-primary mt-2 px-5 py-2'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}