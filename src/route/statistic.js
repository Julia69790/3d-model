// import React, { Component } from 'react';
// import { Link, Outlet } from "react-router-dom";
// import {getInvoices} from "../data"

// export default function Statistic() {
//   return(
//     <h2>Здесь будет статистика</h2>
//   )
// }

import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
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
    </LineChart>
  )
}



// export default function Statistic() {
//   let invoices = getInvoices();
//   return (
//     <div style={{ display: "flex" }}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",
//         }}
//       >
//         {invoices.map((invoice) => (
//           <Link
//             style={{ display: "block", margin: "1rem 0" }}
//             to={`/statistic/${invoice.number}`}
//             key={invoice.number}
//           >
//             {invoice.name}
//           </Link>
//         ))}
//       </nav>
//       <Outlet />
//     </div>
//   );
//   }