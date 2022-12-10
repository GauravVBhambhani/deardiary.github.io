// import styled from "styled-components";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
// import $ from 'jquery';


const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3gno5zf', 'template_syywlb3', form.current, 'JG-X1tG-aeEGYVbaq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return <div className="contact-form">
        <p className="font-medium text-pink-500">WRITE TO US!</p>
        <form ref={form} onSubmit={sendEmail}>
            <label className='pb-2'>Name</label>
            <input type="text" name="user_name" className="text-black pl-2" />
            <label className='pb-2'>Email</label>
            <input id='user_email' type="email" name="user_email" className="text-black pl-2" />
            <label className='pb-2'>Message</label>
            <textarea name="message" className="text-black pl-2" />
            <input type="submit" value="Send" />
        </form>
    </div>
};

export default ContactUs;