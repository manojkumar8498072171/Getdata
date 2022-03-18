import React, { useEffect,useState  } from 'react';
import axios from 'axios';
const Get = () => {
  const[manoj,setManoj]=useState("")
   useEffect(()=>axios.get("http://localhost:9000/data").then(manoj=>
   setManoj(manoj)
 
    )
    ,[])
    console.log(manoj)
  return (
    <div>
      {JSON.stringify(manoj)}
    </div>
  )
}

export default Get;
