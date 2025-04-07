import React from 'react'
import {  useNavigate } from 'react-router-dom'

function KbcGame() {
  
 
 const navigate = useNavigate();
  return (
    <section className="p-5">
      
    <div className="goBack flex">
      <button onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line mr-2 text-lg"></i>Go Back
      </button>
    </div>

    <h1 className="text-xl mt-5 sm:mt-8">KBC</h1>
  </section>
  )
}

export default KbcGame