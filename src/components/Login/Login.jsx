import React,{useState} from 'react';
import Joi from 'joi';
import axios from 'axios';

export default function Login() {
  
  let [error , setError] = useState('');
  let [errorList , setErrorList] = useState([]);
  let [user , setUser] = useState({
    email : '',
    password : ''
  });

  function getUser(e){
    let myUser = {...user};    // spread operator
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser)
  };

  function validateForm(){
    let schema = Joi.object({
      email : Joi.string().required().email({tlds : {allow:['com','net']}}),
      password : Joi.string().required().pattern(new RegExp('^[a-z][0-7]{3}$'))
    });
    return schema.validate(user,{abortEarly:false})
  };

  async function submitForm(e){
    e.preventDefault();
    let validationResult = validateForm();
    console.log(validationResult);
    if(validationResult.error){
      setErrorList(validationResult.error.details);
    }else{
      let {data} = await axios.post('https://routeegypt.herokuapp.com/signin',user);
      if(data.message == 'success'){
        window.location.href='/home';
      }else{
        setError(data.message);
      }
    }
  };
  
  return (
    <div className='container px-5'>
        <div className='row'>
          <div className='w-75 m-auto my-3'>
          <h1 className='text-center'>Login Form</h1>
              <form onSubmit={submitForm}>
                {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
                {error?<div className='alert alert-danger'>{error}</div> : ''}

                <div className='my-3'>
                  <label htmlFor='email'>Email</label>
                  <input onChange={getUser} type='email' className='form-control' name='email' />
                </div>
                <div className='my-3'>
                  <label htmlFor='password'>Password</label>
                  <input onChange={getUser} type='password' className='form-control' name='password' />
                </div>

                <button type='submit'  className='btn btn-primary mt-2 px-5 py-2'>Login</button>

              </form>
          </div>
        </div>
    </div>
  )
}