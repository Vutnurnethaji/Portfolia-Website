import React from 'react';
import './ContactStyles.css'

function Contact() {
  return (
    <section id='contact'>
        <h1>Contact</h1>
        <form >
            <div className='formGroup'>
                <input type="text" placeholder='Name' name='name' required />
            </div>
            <div className='formGroup'>
                <input type="email" placeholder='Email' name='email' required />
            </div>
            <div className='formGroup'>
                <textarea name="message" placeholder='Message' rows={15}></textarea>
            </div>
            <input type="submit" className='button'/>
        </form>
    </section>
  )
}

export default Contact