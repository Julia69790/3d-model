// import React, { Component } from 'react';
// import { Link, Outlet } from "react-router-dom";
// import {getInvoices} from "../data"

// export default function Statistic() {
//   return(
//     <h2>Здесь будет статистика</h2>
//   )
// }

import React, { PureComponent, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Statistic() {
  const [ value, setValue ] = useState('Line');

  const handleChangeType = (e) => {
    setValue(e.target.value)
  }

  const SwitchCharts = () => {
    return (
      
      <RadioGroup
        aria-labelledby="group-label"
        defaultValue="Line"
        name="radio-buttons-group"
        onChange={handleChangeType}
      >
        <FormControlLabel value="Line" control={<Radio />} label="LineChart" />
        <FormControlLabel value="Bar" control={<Radio />} label="BarChart" />
      </RadioGroup>
      
    )
  }

  return (
    <div>
      {value == 'Line' ? <ChartLine /> : <ChartBar />}      
      <SwitchCharts/>

    </div>
  )
}



const ChartLine = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
    </LineChart>
  )
}

const ChartBar = () => {
  return (
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
  )
}
