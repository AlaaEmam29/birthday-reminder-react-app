import React from 'react'

export default function List({data,deletePerson}) {

  return (
    <>
        {data.map((item ,index) =>
            {const {name :{first,last},dob:{age},picture:{medium}} = item
            
          return   <div key={index} className="person">
            <img src={medium} alt={`${first} ${last}`} />
              <div>
              <h5>{first} {last}</h5> 
              <h6>{age}</h6>
             
              </div>
              <div className='btn-icon' onClick={()=>deletePerson(index)}>
              <i className="fa-solid fa-trash-can" ></i>          </div>
              </div>}
        )}
        

    </>
  )
}
