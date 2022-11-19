// import React from 'react';

// const SignupBtn = () => {
//   return (
//     <div>
//       {/* Button trigger modal */}
//       <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#signupModal">
//         <span className='fa fa-user-plus me-1'></span> Sign Up
//       </button>
//       {/* Modal */}
//       <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//             </div>

//             <div className="modal-body">

//               <button className="btn btn-primary w-100 mb-4">
//                 <span className='fa fa-google me-2'></span>
//                 Sign up with Google
//               </button>
//               <button className="btn btn-primary w-100 mb-4">
//                 <span className='fa fa-facebook me-2'></span>
//                 Sign up with Facebook
//               </button>

//               <form>
//                 <div className='mb-3'>
//                   <label htmlFor='uName' className='form-label'>Username</label>
//                   <input type="text" className='form-control'name='user_name' />
//                 </div>
//                 <div className='mb-3'>
//                   <label htmlFor='uEmail' className='form-label'>Email</label>
//                   <input type="email" className='form-control' name='user_email' />
//                 </div>
//                 <div className='mb-3'>
//                   <label htmlFor='uPassword' className='form-label'>Password</label>
//                   <input type="password" className='form-control' name='user_password'  />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-outline-primary">Sign up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignupBtn

import React from 'react'
import { NavLink } from 'react-router-dom';

const signupBtn = () => {
  return (
    <>
      <NavLink to="/signup" className="btn btn-outline-primary ms-2">
      <span className='fa fa-user-plus me-1'></span>
       Sign Up
      </NavLink>
    </>
  )
}

export default signupBtn