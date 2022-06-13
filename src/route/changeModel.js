import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getModel } from "../data/data"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'

export default function ChangeModel() {
  let params = useParams()
  let [model, setModel] = useState(<></>)
  let [click, setClick] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    setModel(getModel(parseInt(params.modelId, 10)))
    return () => {
      setModel(<></>)
    }
  }, [parseInt(params.modelId, 10)])

  if (click) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{model.name}</h2>
        <div>{model.info}</div>
        <Button variant="contained" onClick={() => { navigate(`/models/${model.number}/info`) }}>Изменить информацию</Button>
        <Button onClick={() => setClick(click == true ? false : true)}>Информация/Модель</Button>
        <Outlet />
      </main>
    )
  }
  else {
    return (
      <main style={{ padding: "1rem" 
      // , width: '70%', height: '90vh', display: 'flex', position: 'absolute', top: '10vh', left: '30vh'
      }}>
        <h2>{model.name}</h2>
        <div>{model.content}</div>
        <Button onClick={() => setClick(click == true ? false : true)}>Информация/Модель</Button>
      </main>
    )
  }
}