import { useRef } from 'react';
import {SiLinkedin,SiGithub,SiInstagram} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import emailjs from '@emailjs/browser'

  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

function Contact(){
    
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
       (error) => {
            console.error("EMAILJS ERROR:", error);
           alert(error.text || "Failed to send message");
}
      );
  };
    return(
        <>
          <div className="bg-black text-white py-20 px-10 md:px-96">
                
                <h1 className="text-center pb-8 md:pb-20 text-2xl md:text-5xl md:font-bold text-purple-400  [text-shadow:0_4px_12px_rgba(168,85,247,0.6)]">Contact Me</h1>

             <div className="border-purple-600 p-2 shadow-[0_0_10px_rgba(168,85,247,0.6)] md:shadow-[0_0_25px_rgba(168,85,247,0.6)]">

                <form ref={formRef} onSubmit={sendEmail}>
                    <h1 className="p-2 md:text-2xl text-purple-400  font-bold">Let's connect</h1>
                    <div className="flex flex-col justify-start items-start px-10 md:text-xl">

                        <div className="flex w-full items-center gap-4">
                        <label className="">Name: </label>
                        <input 
                        className="border-b-2 border-b-purple-600 p-2 m-4 w-full focus:outline-none" 
                        type="text" 
                        placeholder="Enter Your Name" 
                        name='from_name' 
                        required/>
                        </div>

                        <div className="flex w-full items-center gap-4">
                        <label htmlFor="">Email: </label>
                        <input 
                        className="border-b-2 border-b-purple-600 p-2  m-4 w-full   focus:outline-none" 
                        type="email" 
                        placeholder="Enter Your Email" 
                        name='from_email' 
                        required/>
                        </div>

                        <div className="flex w-full items-center gap-4">
                        <label htmlFor="">Message: </label>
                        <textarea 
                        className="border-2 border-purple-600 rounded p-2 m-4 w-full focus:outline-none text-gray-400" 
                        type="text" 
                        placeholder="Enter Your Text" 
                        name='message' 
                        required rows='4'/>
                        </div>

                        <div>
                            <button type='submit' className="p-3 mx-3 md:py-2 md:px-8 md:mx-6 md:my-4 my-2 rounded-2xl bg-purple-300/20 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-110 flex justify-center items-center gap-2 font-bold">Send</button>
                        </div>

                    </div>
                </form>
             </div>
          </div>
                         <div className='bg-black py-6 md:py-20 '>
                            <div className='flex justify-center items-center gap-5  md:gap-10 text-3xl'>
                              <a href="https://www.linkedin.com/in/sanjay-s-28may/" className=' text-blue-400 transition-transform duration-300 hover:scale-125'> <SiLinkedin /></a>
                              <a href="https://github.com/sanjay-2003-ss" className=' text-gray-600 transition-transform duration-300 hover:scale-125'> <SiGithub /></a>
                              <a href="" className=' text-red-500 transition-transform duration-300 hover:scale-125'> <SiInstagram/></a>
                              <a href="mailto:ssanjaysuresh2003@gmail.com" className=' text-gray-500 transition-transform duration-300 hover:scale-125'> <MdEmail/></a>
                               
                               
                            </div>
                            <p className='text-gray-400 text-center pt-2  md:pt-10'> © 2025 Sanjay. All rights reserved.</p>
                         </div>
        </>
    )
}

export default Contact