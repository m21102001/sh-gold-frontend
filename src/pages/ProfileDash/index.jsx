import { SidebarDashboard } from "@/layout"
import axios from '@/api/axios'
const ProfileDash = () => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://goldshop.onrender.com/api/users',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OGU2YmZhNzczMzNkMDgxZjc3NmMiLCJpYXQiOjE3MDIzMzQzNjEsImV4cCI6MTcwMjQyMDc2MX0.TM_TFOc0CTHxVWff1eiiVMRdOhpY8O3eNEqHIMsIwos',
      // 'Cookie': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OGU2YmZhNzczMzNkMDgxZjc3NmMiLCJpYXQiOjE3MDI0ODYwNDMsImV4cCI6MTcwMjU3MjQ0M30.8fa03fkjdy2CRBwqUXtPXphYIW8i1LXL_g1C-Y8gozw',
      withCredentials: true,
    },

  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      home
    </div>
  )
}

export default ProfileDash