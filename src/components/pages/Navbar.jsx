import {FaUser,FaCode,FaProjectDiagram} from 'react-icons/fa'
import {MdEmail,MdMenu,MdCancel} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import { useState } from 'react'



function Navbar(){

    const [open, setOpen]=useState(false)
    const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }
    return(
        <>

        
        <div className='z-20'>
            <div className="mx-5 flex justify-between items-center md:p-4 md:gap-10  text-white ">
               <div className=" font-bold">
                   <h1 className='text-3xl text-purple-400  [text-shadow:0_4px_12px_rgba(168,85,247,0.6)]'>DEV</h1>
                </div>

                <div>
                    <div className="hidden md:flex justify-between items-center md:gap-5 gap-2 font-bold text-gray-400">
                       <p onClick={()=>scrollTo('home')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-2xl flex justify-between items-center gap-2"><AiFillHome/> HOME</p>
                       <p onClick={()=>scrollTo('about')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-2xl flex justify-between items-center gap-2"><FaUser/> ABOUT</p>
                       <p onClick={()=>scrollTo('skill')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-2xl flex justify-between items-center gap-2"><FaCode/> SKILLS</p>
                       <p onClick={()=>scrollTo('project')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] py-2 px-4 rounded-2xl flex justify-between items-center gap-2 transition-transform duration-300 hover:scale-105"><FaProjectDiagram/> PROJECT</p>
                       <p onClick={()=>scrollTo('contact')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] py-2 px-4 rounded-2xl flex justify-between items-center gap-2 transition-transform duration-300 hover:scale-105"><MdEmail/> CONTACT</p>
                    </div>

                    <div className='md:hidden z-30 text-3xl text-gray-400 font-bold ' onClick={()=>setOpen(true)}><MdMenu/></div>

                </div>

                 {open && (
                    <div className='absolute top-0 right-0 h-full w-[50%] bg-[#000000]/30 p-4shadow-[0_0_20px_rgba(168,85,247,0.4)]md:hidden z-40'>

                        {/*  Cancel Icon */}
                       <div className="flex justify-end text-3xl text-white mx-5 cursor-pointer"onClick={() => setOpen(false)}><MdCancel />
                       </div>

                        <div className='flex flex-col gap-3 text-white font-bold pt-10'>
                            <p onClick={()=>scrollTo('home')} className="hover:bg-purple-500/20 hover:border-[#3b1c63]  py-2 px-4  flex justify-start items-center gap-2"><AiFillHome/> HOME</p>
                            <p onClick={()=>scrollTo('about')} className="hover:bg-purple-500/20 hover:border-[#3b1c63]  py-2 px-4  flex justify-start items-center gap-2"><FaUser/> ABOUT</p>
                            <p onClick={()=>scrollTo('skill')} className="hover:bg-purple-500/20 hover:border-[#3b1c63]  py-2 px-4  flex justify-start items-center gap-2"><FaCode/> SKILLS</p>
                            <p onClick={()=>scrollTo('project')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] py-2 px-4  flex justify-start items-center gap-2 "><FaProjectDiagram/> PROJECT</p>
                            <p onClick={()=>scrollTo('contact')} className="hover:bg-purple-500/20 hover:border-[#3b1c63] py-2 px-4  flex justify-start items-center gap-2 "><MdEmail/> CONTACT</p>
                        </div>
                    </div>
                 )}

            </div>
        </div>  
        </>
    )
}

export default Navbar