import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getModel } from "../data/data"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from "./changeModel.module.css"

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
        <h2
          className={styles.content}
        >{model.name}</h2>
        <div
          className={styles.content}
        >
          {/* <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {model.name}
            </Typography>
              <List dense={dense}>
                {model.info.map((inf) => (
                    <ListItem>
                      <ListItemText
                        primary={`${inf}`}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem> 
                ))
                }
              </List>
          </Grid> */}
          {/* {model.info} */}
          {model.info.map((inf) => (
            <ul>
              <li>{inf}</li>
            </ul>
          ))}
        </div>
        <div style={{ width: '70%', height: '90vh', display: 'flex', position: 'absolute', top: '10vh', left: '30vh' }}>{model.content}</div>
        <div className={styles.content}>
          <Button style={{ width: "250px" }} variant="contained" onClick={() => { navigate(`/models/${model.number}/info`) }}>Добавить информацию</Button>
          <Button style={{ width: "250px" }} onClick={() => setClick(click == true ? false : true)}>Посмотреть/скрыть информацию</Button>
        </div>
        <Outlet />
      </main>
    )
  }
  else {
    return (
      <main style={{ padding: "1rem" }}>
        <div style={{ width: '70%', height: '90vh', display: 'flex', position: 'absolute', top: '10vh', left: '30vh' }}>{model.content}</div>
        <div className={styles.content}>
          <Button onClick={() => setClick(click == true ? false : true)}>Посмотреть/скрыть информацию</Button>
        </div>
      </main>
    )
  }
}