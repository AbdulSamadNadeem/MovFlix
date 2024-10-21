import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Button from '../Common/Button/Button.jsx'
import { tabs } from '../Const/Utils/app';
import { useNavigate } from 'react-router';
import 'animate.css';
const Header = ({setMovies}) => {

  const [isDetails , setIsDetails]=useState(null);
  const navigate = useNavigate()

  const handleSeacrh =(value)=>{
    setMovies(value)
  }

  return (
  <>
  <div  className="h-28  flex items-center justify-around bg-slate-900  text-opacity-35 animate__animated  animate__fadeIn"> 

<img src="./assets/images/logo.png" className="" alt="" />

<div className='flex items-center'> 
    <input type="text" onChange={(e)=>handleSeacrh(e.target.value)} className="w-96 h-8 rounded-xl outline-none pl-5 bg-black border-white border text-yellow-300" placeholder="Search Movies Here"  /> 
<CiSearch className="text-yellow-400 relative right-10  text-xl"/></div>

<div className="Section">

<ul className="flex text-xl text-white gap-8 font-bold relative ">
{
  tabs.map((item,index)=>{
    return(
      <li  className=' hover:text-yellow-400 relative'>
           
               <Button userCall={()=>{if(item.content.length === 0) {navigate('/home')}  else{setIsDetails(isDetails === index ? null : index)} } } h='h-10' w='w-28' text={item.name}  ts='text-lg'/> 

               { isDetails === index && item.content.length > 0 && (
                <>
                <div id='modal' className='w-80 h-40 bg-black border border-yellow-500 absolute overflow-y-scroll  right-0 top-14 z-10'>
                         <p  className='text-white text-md font-light hover:underline'>{item.content}</p> 
                </div>
                </>
               )

               }    
          </li>
        )
      })
}
  
</ul>
</div>

</div>
  </>
  )
}

export default Header