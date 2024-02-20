import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart } from 'recharts';
import axios from 'axios';
import "./chart.scss"

const AreaCharts = ({ startDate, endDate }) => {
  const item = useLocation()?.state?.item
  // console.log(item)
  const date = new Date();

  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    month = `0${month}`;
  }
  const [goldPrice, setGoldPrice] = useState([])
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const [values, setValues] = useState([])
  // console.log('first', month);
  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_GOLD_URL}timeframe?api_key=${import.meta.env.VITE_GOLD_SECRET}&start_date=${startDate == '' ? `${year}-${month}-01` : startDate}&end_date=${endDate == '' ? new Date().toJSON().slice(0, 10) : endDate}&base=KWD&currencies=XAU,XAG,XPT&unit=gram`,
        {
          withCredentials: false
        }
      ).then(response => {
        setGoldPrice(response?.data.rates)
        const data = Object.entries(response?.data.rates).map(
          ([key, value]) => (
            {
              name: key,
              gold: ((1 / value.XAU) + 0.5 / 100),
              silver: (1 / value.XAG) + 0.5 / 100,
              Platinum: (1 / value.XPT) + 0.5 / 100
            }
          ))
        setData(data)
        setKeys(Object.keys(response?.data.rates))
        setValues(Object.values(response?.data.rates))
        // console.log(data);
      })

    } catch (error) {
      console.log(error);
    }

  }, [startDate, endDate, item, year, month])

  // console.log(data,goldPrice);

  return (
    <>
      <AreaChart
        width={980}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f8d25c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f8d25c" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f8d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f8d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <Legend verticalAlign="top" height={36} /> */}
        {item == "gold" ?
          <Area type="monotone" dataKey="gold" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          : item === "silver" ?
            <Area type="monotone" dataKey="silver" stroke="#4d8" fillOpacity={1} fill="url(#colorUv)" />
            : item == "Platinum" ?
              <Area type="monotone" dataKey="Platinum" stroke="#848" fillOpacity={1} fill="url(#colorUv)" />
              :
              <Area type="monotone" dataKey="gold" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        }
      </AreaChart>
    </>
  );
}

export default AreaCharts