import React, { useRef } from 'react';
import { ReviewOnScroll } from "../ReviewOnScroll"
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_60hdxyc', 'template_ywdtbpt', form.current, {
        publicKey: 'NDDp6jprlJfTFGURx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">
        <ReviewOnScroll>\
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center " >
                    {" "}
                     Get In Touch</h2>
                <form  className="space-y-6"  ref={form} onSubmit={sendEmail}>
                    <div className="relative">
                        <input type="text" id="name" name="user_name"  placeholder="Name.." required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                         transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>

                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="user_email" placeholder="example@gmail.com" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                         transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>

                    </div>
                    <div className="relative">
                        <textarea  id="message" name="message" rows={5} placeholder="Your Message" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                         transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>

                    </div>
                    <button type="submit" value="Send" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Sent Message
                    </button>
                </form>

            </div>



        </ReviewOnScroll>
        

    </section>
    
   
  );
};




