import axios from 'axios';
import { useEffect, useState } from 'react';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart } from 'recharts';
import "./chart.scss"
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
  const [metalSymbols, setMetalSymbols] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(
            `${import.meta.env.VITE_GOLD_URL}?api_key=${import.meta.env.VITE_GOLD_SECRET}&base=KWD&currencies=XAU`,
            {
              withCredentials: false,
            }, {
            headers: {
              "Content-Type": "application/json;",
            }
          }
          );

        setMetalSymbols(response.data);
        console.log('metai' + metalSymbols.base);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <AreaChart
        width={980}
        height={350}
        data={datas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
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