import React from "react"
import { useParams } from "react-router-dom"
import { getModel } from "../data"

export default function ChangeModel() {
  let params = useParams()
  let model = getModel(parseInt(params.modelId, 10))
  if(model.isClick){
    return(
      <main style={{ padding: "1rem" }}>
      <h2>{model.name}</h2>
      <div>info</div>
    </main>
    )
  }
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{model.name}</h2>
      <div>{model.content}</div>
    </main>
  )
}