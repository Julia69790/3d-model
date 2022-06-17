import React, {useState} from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getModels } from "../data/data"
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

export default function MenuModel() {
  let models = getModels()
  let navigate = useNavigate()
  const [value, setValue] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '20%' }}>
    <nav
        style={{
          padding: "1rem",
        }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {models.map((model, index) => (
            <Tab value={`${index+1}`} label={`${model.name}`} key={index+1} onClick={() => {navigate(`/models/${index+1}`)}} />
          ))}
        </Tabs>
        </nav>
      <Outlet />
    </Box>
  )
}
  
