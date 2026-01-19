import { projectData } from "../../Data" 
import {SiGithub} from 'react-icons/si'
import {FaProjectDiagram } from 'react-icons/fa'


function Project(){
    return(
        <>
           <div className="bg-black text-white py-20 px-10 md:px-20">
                       <div>
                          <h1 className="text-center pb-8 md:pb-20 text-2xl md:text-5xl md:font-bold text-purple-400  [text-shadow:0_4px_12px_rgba(168,85,247,0.6)]">Featured Projects</h1>
                       </div>
              <div className="grid grid-cols-1 gap-6  md:grid-cols-4 md:gap-10">
                {
                    projectData.map((data, index)=>{

                        
                        return (
                            
                           <div key={index} className="fade-in border-2 border-purple-600 transition-transform duration-300 hover:scale-105 shadow-[0_0_10px_rgba(168,85,247,0.6)] md:shadow-[0_0_25px_rgba(168,85,247,0.6)] rounded-2xl p-4">
                               <img src={data.image} alt="" />
                               <h1 className="text-center p-2  text-xl text-purple-400 [text-shadow:0_4px_12px_rgba(168,85,247,0.6)] font-bold">{data.title}</h1>
                               <p className="text-gray-400 p-2 ">{data.desc}</p>
                               <div className="flex justify-start items-center flex-wrap gap-2">
                                   <h1 className="text-purple-400 p-2 font-bold  ">Skills Used:</h1>
                                   {
                                    data.skills.map((skill,key)=>(
                                        <span key={key} className="text-[14px] bg-gray-600 p-1 rounded">{skill} </span>
                                    ))
                                   }
                               </div>
                    
                               <div className="flex justify-around items-center pt-4">
                                   <a className="text-3xl shadow-2xl transition-transform duration-300 hover:scale-125 py-4" href={data.github}><SiGithub/></a>
                                   <a className="text-3xl shadow-2xl transition-transform duration-300 hover:scale-125 py-4" href={data.link}><FaProjectDiagram/></a>
                               </div>
                            </div>
                        )
                    })
                }

              </div>
           </div>
        </>
    )
}

export default Project