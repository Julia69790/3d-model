import ModelOne from "../models/modelOne"
import React from 'react'

let models = [
  {
    name: "Датчик расстояния",
    number: 1,
    content: <ModelOne />,
    info: "info1"
  },
  {
    name: "Другой датчик",
    number: 2,
    content: <p>Модель</p>,
    info: "info2"
  },
]

export function getModels() {
  return models
}

export function getModel(number) {
  return models.find(
    (model) => model.number === number
  )
}