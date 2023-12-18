import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart } from 'recharts';

const datas = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  }, {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  }, {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  }, {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
   {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
   {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
   {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
]
const AreaCharts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  let servicess = {
    method: 'get',
    url: `${import.meta.env.VITE_GOLD_URL}/latest?api_key=${import.meta.env.VITE_GOLD_SECRET}&base=USD&currencies=EUR,XAU,XAG`,
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(servicess)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <AreaChart width={950} height={250} data={datas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f8d25c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f8d25c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* {data?.document.map((data, index) => ( */}
        <Area type="monotone" dataKey="uv" stroke="#f8d25c" fillOpacity={1} fill="url(#colorUv)" />
        {/* ))} */}
      </AreaChart>
    </>
  );
}

export default AreaCharts