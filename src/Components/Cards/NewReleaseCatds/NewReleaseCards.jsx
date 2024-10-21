import React, { useContext, useEffect } from 'react'
import Button from '../../Common/Button/Button'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { MoviedataContext } from '../../../Context/MoviesContext/MovieContext';



const NewReleaseCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);
  const {cardData} = useContext(MoviedataContext)
  return (
    <>
    <div className='flex justify-between'>
   <div className='flex-col'>
   <h1 className='text-xl text-yellow-400 font-semibold mt-24 ml-10 uppercase '>Upcoming</h1>
   <h1 className='text-4xl text-white ml-10 font-bold'>New Movies</h1>
   </div>
   <div>
    
      <Button w='w-32'  h='h-10' m='mt-28' text='Movies'/>
      <Button w='w-32'  h='h-10' m='mt-28 ml-10' text='TV Shows'/>
      <Button w='w-32'  h='h-10' m='mt-28 ml-10' text='Drama'/>
     </div>

    </div>
    <div className='flex flex-wrap justify-around gap-5 mt-16'>
       {
          cardData.map((item,index)=>{
            return(
              
            <div key={index} className='flex flex-col justify-between  items-center w-60  bg-slate-900 transition-transform hover:bg-black hover:border border-yellow-400 hover:scale-105 duration-300 ease-in-out cursor-pointer ' data-aos="fade-down">
            <div className='flex justify-center'>
              <img src={item.imageLink} alt="" className='w-52 h-80  border-2 border-slate-400 mt-6'  />
            </div>
            <div >
            <p className='text-lg text-yellow-400 text-center'>{item.votes}</p>
            </div>
            <div>
              <h1 className='text-2xl text-white font-bold text-center'>{item.title}</h1>
              <p></p>
            </div>
            <hr className='border-slate-400 border w-32 mb-2'/>
            <Button w='w-32' h='h-8' m='mb-6' text='Watch'/>
          </div>
            )
          })
       }
    </div>


    
    </>
  )
}

export default NewReleaseCards
