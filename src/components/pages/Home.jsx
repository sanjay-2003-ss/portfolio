import Navbar from "./Navbar"
import About from "./About"
import Skill from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import Sanjay from '../../assets/image/Sanjay.jpg'
import {FaDownload,FaProjectDiagram } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'




function Home(){

    const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

    return(
        <>
        <div>
          <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1a] via-[#14142b] to-[#1f1b3a] text-white ">

            {/* Navabar */}
            <div>
                <Navbar/>
            </div>

            {/* home */}

            <div className=" md:my-10 md:mx-20 font-serif relative">

              <div className="absolute  top-20 right-1/3 md:right-20">
                <img className=" w-40 h-40 md:w-72 md:h-72  rounded-full border-4 border-purple-600
               shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-transform duration-300 hover:scale-105" src={Sanjay} alt="" />
              </div>

              <div className="mx-2 px-2 md:pr-36 md:mr36   md:text-2xl  font-medium absolute top-64 md:top-20 right-0 md:right-[40%] text-center md:text-start">
                <h1 className="md:p-2">Hi! I'm <b className="font-bold md:text-3xl text-xl text-purple-400  [text-shadow:0_4px_12px_rgba(168,85,247,0.6)]">SANJAY S</b> </h1>
                <p className="text-purple-300 md:text-4xl      [text-shadow:0_3px_8px_rgba(0,0,0,0.7)] md:p-2 font-bold">Full-Stack Developer</p>
                <p className="text-gray-300 md:text-2xl md:pt-4"><b className="text-gray-200 [text-shadow:0_2px_6px_rgba(255,255,255,0.25)]">MERN Full Stack Developer</b>  specializing in user-focused interfaces and modern web applicationsand, leveraging.
                </p>
                <p className="text-gray-300  md:text-2xl">Prompt engineering to enhance productivity and application intelligence.</p>
                <div className="flex justify-center items-center mt-10  md:text-xl text-white">
                  
                 <a href="/Mern.pdf" download > <button className=" p-3 mx-3 md:py-4 md:px-8 md:mx-6 rounded-2xl bg-purple-600/20 
               shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-105 flex justify-center items-center gap-2"><FaDownload/> Get Resume</button></a>
                  <button onClick={()=>scrollTo('project')} className="p-3 mx-3 md:py-4 md:px-8 md:mx-6 rounded-2xl border-purple-600 
                  shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-105 flex justify-center items-center gap-2"><FaProjectDiagram/> View my Work</button>
                 </div>
              </div>
            </div>

          </div>
                         
          </div>

        </>
    )
}

export default Home