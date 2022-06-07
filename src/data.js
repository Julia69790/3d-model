import ModelOne from "./modelOne"
import React from 'react'
let models = [
  {
    name: "Датчик расстояния",
    number: 1,
    content: <ModelOne />,
    isClick: false,
    info: "info1"
  },
  {
    name: "Другой датчик",
    number: 2,
    content: <p>Модель</p>,
    isClick: false,
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