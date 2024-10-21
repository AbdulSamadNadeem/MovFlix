import React,{useState,useEffect, useContext} from "react";
import 'animate.css';
import { MdReviews } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import Button from "../Common/Button/Button";
import { MoviedataContext } from "../../Context/MoviesContext/MovieContext";



const Banner = () => {
  const {banner ,ratings ,likes} = useContext(MoviedataContext)
  return (
    <>
    <div id="baner" className="flex animate__animated animate__fadeInLeft mt-40">
    <img src={banner[0]} className="opacity-40"  alt="" />
    <div className="border border-slate-400">
    </div>
    <div className=" w-[600px] h-96 m-auto">

      <h1 className="text-4xl text-yellow-400 font-extrabold">MovFlix</h1>

      <p className="text-5xl text-white font-bold mt-16">Unlimited <span className="text-5xl text-yellow-400 font-bold">Movies</span>TV Shows And More</p>

    <div className="w-60 flex justify-around items-center  opacity-50 mt-10"><MdReviews  className="text-2xl text-yellow-400  "/><span className="text-xl text-slate-400">{ratings}</span>

    <AiFillLike className="text-2xl text-yellow-400"/> <span className="text-xl text-slate-400">{likes}</span>
    </div>
     <Button m='mt-10' w='w-56' h='h-10' text='Watch Now'/>
    </div>
    </div>

    </>
  )
}

export default Banner