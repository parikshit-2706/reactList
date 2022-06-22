import React from 'react'
import data from "../data.js"

function TeamInfo() {

    console.log(data);
    



  return (
    <div>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'  className='teaminfologo'></img> 
      <h2>{data.Team}</h2>
      <h4>{data.Year}  {data['World Cup Winner'] && <h5> World Cup Winner </h5>}</h4>

    <div>
    <h3> Head Coach: {data['Head Coach'].Name}</h3>
    </div>
      
    </div>
  )
}

export default TeamInfo