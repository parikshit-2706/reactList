import React from 'react'
import data from '../data'
function Players() {

    const playersinfo = data.Players.map((ele) =>{
        return (
            <>
            <h4>{ele.Name}  {ele.Nickname} </h4>

            <p>Position : {ele.Position}</p>
            </>
        )
    })

  return (
    <div>
        {playersinfo}
    </div>
  )
}

export default Players