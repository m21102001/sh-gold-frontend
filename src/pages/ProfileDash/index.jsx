import { useEffect, useState } from "react";
import axios from '@/api/axios'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";


const ProfileDash = () => {
  const [goldPrice, setGoldPrice] = useState([])
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    try {
      axios.get(`https://api.metalpriceapi.com/v1/timeframe?api_key=5e07d6a8157ced4d13198dda0c05bc07&start_date=2023-01-20&end_date=2024-01-16&base=KWD&currencies=XAU,USD&unit=gram`,
        {
          withCredentials: false
        }
      ).then(response => {
        setGoldPrice(response?.data.rates)
        const data = Object.entries(response?.data.rates).map(([key, value]) => ({ name: key, usd: value.USD }))
        setData(data)
        setKeys(Object.keys(response?.data.rates))
        setValues(Object.values(response?.data.rates))
      })

    } catch (error) {
      console.log(error);
    }

  }, [])

  // const USD = values.map(value => value.USD)

  console.log(data);

  // console.log(keys, values);

  // const XAU = values.map(value => value.XAU)

  return (
    <>
      {/* <SidebarDashboard /> */}
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="usd" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </>
  )
}

export default ProfileDash