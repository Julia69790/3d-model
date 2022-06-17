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
  Area,
  AreaChart,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
} from 'recharts';
import "../styles.css"

const dataArea = [
  {
    subject: 'Бестужевская',
    A: 80,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Курганская ',
    A: 30,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Бурая кавказская',
    A: 35,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Костромская ',
    A: 40,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Алатауская ',
    A: 60,
    B: 90,
    fullMark: 150,
  },

];

const data1 = [
  {
    name: 'Янв',
    uv: 9,
    pv: 3,
    // amt: 2400,
  },
  {
    name: 'Фев',
    uv: 11,
    pv: 18,
    // amt: 2210,
  },
  {
    name: 'Март',
    uv: 16,
    pv: 22,
    // amt: 2290,
  },
  {
    name: 'Апр',
    uv: 13,
    pv: 18,
    // amt: 2000,
  },
  {
    name: 'Май',
    uv: 12,
    pv: 14,
    // amt: 2181,
  },
  {
    name: 'Июнь',
    uv: 25,
    pv: 29,
    // amt: 2500,
  },
];

const data2 = [
  {
    name: 'Июль',
    uv: 14,
    pv: 25,
    // amt: 2400,
  },
  {
    name: 'Авг',
    uv: 20,
    pv: 12,
    // amt: 2210,
  },
  {
    name: 'Сен',
    uv: 30,
    pv: 10,
    // amt: 2290,
  },
  {
    name: 'Окт',
    uv: 26,
    pv: 14,
    // amt: 2000,
  },
  {
    name: 'Ноя',
    uv: 17,
    pv: 30,
    // amt: 2181,
  },
  {
    name: 'Дек',
    uv: 28,
    pv: 13,
    // amt: 2500,
  },
];

export default function Statistic() {
  const [value, setValue] = useState('Line')
  const data = [data1, data2]

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
        <FormControlLabel value="Line" control={<Radio />} label="Линейная диаграмма" />
        <FormControlLabel value="Bar" control={<Radio />} label="Столбчатая диаграмма" />
      </RadioGroup>

    )
  }
  return (
    <div>
    <center><h2>Породы крупного рогатого скота</h2></center>
    <GridPolar />
    <ChartArea />
    <h2 left="10px">Наличие животных по полугодиям</h2>
    {
      data.map((d, index) => ( 
        value == 'Line' ? <ChartLine key={index} data={d}/> : <ChartBar key={index} data={d}/>
        ))}
      <SwitchCharts />
    </div>
  )
}

const ChartLine = ({data}) => {
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
      {/* <Line type="monotone" dataKey="amt" stroke="#82ca9d" /> */}
    </LineChart>
  )
}

const ChartBar = ({data}) => {
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

const ChartArea = () => {
  return(
    <div style={{ width: '100%' }}>
        <h2>Внедрение автоматизации доения</h2>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data1}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="now" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        <h3>До внедрения автоматизации</h3>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data1}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="prev" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}

const GridPolar = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataArea}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="breed" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

