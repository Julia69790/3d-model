import React, { Component, useState } from 'react';
import {
  Outlet,
  useNavigate
} from "react-router-dom";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'


export default function App() {
  const [value, setValue] = useState('zero')
  let navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div 
    >
      <Box 
      sx={{ width: '100%' }}
      >
       <center><h1>Агробизнес</h1></center> 
        <nav
          style={{
            // borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
          >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            
          >
            <Tab  style={{width:"33%", maxWidth: 1000}} value="zero" label="Главная" onClick={() => { navigate("/") }} />
            <Tab style={{width:"33%", maxWidth: 1000}} value="one" label="Модели" onClick={() => { navigate("/models") }} />
            <Tab style={{width:"33%", maxWidth: 1000}} value="two" label="Статистика" onClick={() => { navigate("/statistic") }} />
          </Tabs>
        </nav>
        <Outlet />
      </Box>
    </div>
  )
}