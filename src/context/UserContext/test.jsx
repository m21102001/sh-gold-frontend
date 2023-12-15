import { Axios } from 'axios';
import  { useEffect, useState } from 'react'

const Test = () => {
    const [user, setuser] = useState({})
    const [Fetched, setFetched] = useState(false)
    useEffect(() => {
      const CheckUser =async()=>{
        try {
            const { data } = await Axios.get("/api/auth", { withCredentials: true });
            if (typeof data === "object") {
                setuser(data);
              console.log(data);
            }
          } finally {
            setFetched(true);
          }
      }
      
      CheckUser();
    }, [])
    
  return (
    <div>test</div>
  )
}

export default Test