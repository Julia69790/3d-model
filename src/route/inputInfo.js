import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getModel } from "../data/data"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import styles from "./changeModel.module.css"

export default function InputInfo() {
  let params = useParams()
  let [model, setModel] = useState(<></>)
  let navigate = useNavigate()

  useEffect(() => {
    setModel(getModel(parseInt(params.modelId, 10)))
    return () => {
      setModel(<></>)
    }
  }, [parseInt(params.modelId, 10)])

  return (
    <div className={styles.content}>
      <h2>{model.name}</h2>
      <div style={{ width: '70%', height: '90vh', display: 'flex', position: 'absolute', top: '10vh', left: '30vh' }}>{model.content}</div>
      {/* <input type="text" id="newInfo"></input> */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Информация" variant="outlined" type="text" />
        <Button variant="contained" onClick={() => setModel(model.info += document.getElementById("outlined-basic").value)}>Ввод</Button>
      </Box>
      

      {/* <button onClick={() => setModel(model.info += document.getElementById("outlined-basic").value)}>Ввод</button> */}
      <Button onClick={() => { navigate(`/models/${model.number}`) }}>Просмотреть информацию</Button>
    </div>
  )
}