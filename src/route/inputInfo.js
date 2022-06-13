import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getModel } from "../data/data"

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
      <div>
      <h2>{model.name}</h2>
        <input type="text" id="newInfo"></input>
        <button onClick={() => setModel(model.info = document.getElementById("newInfo").value)}>Ввод</button>
        <button onClick={() => { navigate(`/models/${model.number}`) }}>Просмотреть информацию</button>
      </div>
    )
  }