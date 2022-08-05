import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import List from './List'

export default function App() {
  const [data, setData] = React.useState([])
const deletePerson =(id)=>
{ const newData = data.filter((person,index)=>index!==id)
  setData(newData)
}
  const fetchData = async () => {
    try{

      const response = await fetch('https://randomuser.me/api/?results=5')
      const { results} = await response.json()
      setData(results)
    }
    catch(error){
      console.log(error)  
      }
  }
const handleClick =()=>{
if(data.length > 0){
  setData([])
}
else{
  fetchData()
}
}
  useEffect(() => {
    
  
    fetchData()
  }, [])
  
  return (
    <>
    <div className="container">
    <h3>{ data.length } birthdays today</h3>
<List data={data} deletePerson={deletePerson} /> 
         <button onClick={handleClick} className='btn'>{data.length !==0 ? 'Clear All' : 'Refresh'}</button>
    </div>
    </>
  )
}
