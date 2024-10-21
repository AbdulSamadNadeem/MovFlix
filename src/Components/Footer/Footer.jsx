import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
  <>
    <div className='bg-slate-900 flex justify-between gap-6'>
        <div>
            <img src="./assets/images/logo.png" alt="" />
        </div>
       <div className='flex gap-10 mr-20'>
       <div>
            <ul className='text-white text-xl font-light leading-10'>
                <li>Our Policy</li>
                <li>Latest Movies</li>
                <li>Latest Dramas</li>
                <li>Latest Web-Series</li>
            </ul>
        </div>
        <div>
            <ul className='text-white text-xl font-light leading-10'>
                <li>BlockBusters</li>
                <li>HollyWood</li>
                <li>BollyWood</li>
                <li>TollyWood</li>
            </ul>
        </div>
        <div >
            <ul className='text-white text-xl font-light leading-10'>
                <li>Action</li>
                <li>Romance</li>
                <li>Comedy</li>
                <li>Horror</li>
                <li className='flex gap-4'><FaFacebook/>
                   <FaGoogle/>
                   <FaSquareInstagram/>
                   <FaSquareXTwitter/>
                   </li>
            </ul>
        </div>
       </div>
    </div>
    <div className='bg-slate-900 '>
          <p className='text-xl font-bold text-white text-center'>All Rights Reserved </p>
          

    </div>

    </>
  )
}

export default Footer