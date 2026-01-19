import { useState } from 'react'
import { skillData } from '../../Data'


function Skill(){

    const [filter, setFilter]= useState("ALL")
    
      const filteredSkill = 
        filter === "ALL" ? skillData: skillData.filter(item=>item.desc === filter)

    const baseBtn =
  "py-2 px-4 rounded-xl flex-grow transition-all duration-300 border border-purple-600"
  const activeBtn =
  "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)] scale-105"
  const inactiveBtn =
  "text-gray-300 hover:bg-purple-500/20 hover:scale-105"



        

    return(

        
        <>
         <div className='bg-black text-white py-20'>
                <div className='text-center md:pb-20 text-2xl md:text-5xl text-purple-400  [text-shadow:0_4px_12px_rgba(168,85,247,0.6)]'>
                    <h1>SKILLS & TECHNOLOGIES</h1>
                </div> 
                <div className='flex flex-wrap justify-around items-center gap-10 py-10 md:pb-20 mx-4 md:mx-48'>
                    <button onClick={()=>{setFilter("ALL")}} className={`${baseBtn} ${filter === "ALL" ? activeBtn : inactiveBtn }`}>ALL</button>
                    <button onClick={()=>{setFilter("Frontend")}} className={`${baseBtn} ${filter === "Frontend" ? activeBtn: inactiveBtn}`}>Frontend</button>
                    <button onClick={()=>{setFilter("Backend")}} className={`${baseBtn} ${filter === "Backend" ? activeBtn:inactiveBtn}`}>Backend</button>
                    <button onClick={()=>{setFilter("Database")}} className={`${baseBtn} ${filter === "Database" ? activeBtn : inactiveBtn}`}>Database</button>
                    <button onClick={()=>{setFilter("Tool")}} className={`${baseBtn} ${filter === "Tool" ? activeBtn : inactiveBtn}`}>Tools</button>
                </div>
            <div className='md:mx-36 mx-4 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-20 '>
                {
                    filteredSkill.map((data, index)=>{
                        const Icon=data.icons
                        return(
                        <div key={index} className='fade-in border-2 border-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.6)]
                            md:shadow-[0_0_25px_rgba(168,85,247,0.6)] md:p-4 p-2 rounded-2xl flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110'>
                        <Icon className='md:text-5xl text-4xl '  style={{color: data.color}}/>
                        <p  className='font-bold p-1'>{data.skill}</p>
                        <p  className='text-gray-500 font-semibold'>{data.desc}</p>
                     </div>
                        )
                    })
                }


                
            </div>
         </div>
        </>
    )
}

export default Skill