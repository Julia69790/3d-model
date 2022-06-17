import ModelOne from "../models/modelOne"
import React from 'react'

let models = [
  {
    name: "Датчик расстояния",
    number: 1,
    content: <ModelOne />,
    info: [
      "Питающее напряжение 5В\n",
      "Рабочий параметр силы тока – 15 мА\n",
      "Сила тока в пассивном состоянии меньше 2 мА\n",
      "Обзорный угол – 15°\n",
      "Сенсорное разрешение – 0,3 см\n",
      "Измерительный угол – 30°\n",
      "Ширина импульса – 10-6 с\n",
      // "Может сигнализировать о приближении или удалении объектов"
    ]
  },
  {
    name: "Датчик движения",
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