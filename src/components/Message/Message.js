import React from 'react';
import './Message.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';


function Message() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

 emailjs.sendForm('service_l6qxmmf', 'template_ea0one8', form.current, 'x_VVuXJVDJb1Vf-VI')
        e.target.reset();
       toast.success('Message sent successfully!');
     };
    

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='contact-card'>
                            <h4 className='text-center mb-3'>Education</h4>
                            <p>I Currently Pursing my <b>Bachelor of Engineering B.E.</b> in <b> Electrical Engineering</b> From <b>Savitribai Phule Pune University</b>. <br />- Nov 2023 - Aug 2026</p>

                            <div>
                                <b> Diploma in Electrical Engineering</b> <br/>
                                M.I.T Polytechnic, Dhanore, Nashik <br/>
                               - Aug 2020 - May 2022
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 mb-4'>
                        <div className='send-message-card'>
                            <form className='text-center' ref={form} onSubmit={sendEmail}>
                                <h4 className='text-center mt-1 mb-2'>Contact Me</h4>
                                <input className="login-form-input mb-2 p-2" placeholder='Your Full Name' type="text" name="name" required />
                                <input className="login-form-input mb-2 p-2" placeholder='Your Email' type="email" name="email" required />
                                <input className="login-form-input mb-2 p-2" placeholder='subject' type="text" name="subject" required />
                                <textarea className="text-area-input mb-2 p-2" placeholder='Your Message' rows="5" cols="20" name="message" required />
                                <button type="submit" className=' btn btn-primary btn-send-msg text-center mt-3'><b><i class="fa-solid fa-share"></i> Send Message</b></button>
                            </form>
                        </div>
                    </div>
                </div>
                <Toaster/>
            </div>
        </>
    )
}

export default Message