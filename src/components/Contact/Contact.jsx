import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container mb-4'>
        <div className='col-lg-12 text-center my-5'>
          <h1>Do you have any question?</h1>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center my-4'>
            <img src='/images/contact/contact.png' alt='contact us' height="320px" width="320px"/>
          </div>
          <div className='col-lg-6 p-4'>
            <form>
              <div className='mb-3'>
                <label for="userName" className='form-label'>User Name</label>
                <input type="text" className='form-control' id="userName" placeholder='Enter your name.' />
              </div>
              <div className='mb-3'>
                <label for="userEmail" className='form-label'>Email</label>
                <input type="email" className='form-control' id="userEmail" placeholder='name@example.com' />
              </div>
              <div className='mb-3'>
                <label for="messsage" className='form-label'>Example textarea</label>
                <textarea  className='form-control' id='message' rows='5'></textarea>
              </div>
              <button type='submit' className='btn btn-outline-primary mt-4 px-3 py-2'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact