import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Form.module.css'
import Socials from './socials';

export default function Form () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.formy}>
    <div className={styles.formcontainer}>
    <form className={styles.formu} ref={form} onSubmit={sendEmail}>
      
      <h2>LEAVE A COMMENT</h2>
       
      <textarea name="message"  maxLength="50" placeholder='COMMENT'/>
      
      <div className={styles.fill}>
      <input type="text" name="user_name"  placeholder='NAME'/>
    
    <input type="email" name="user_email" placeholder='EMAIL'/>
      <button
       type="submit" value="Send" >SUBMIT
      </button>
      </div>
      
   
    </form>
    </div>
    </div>
  );
};