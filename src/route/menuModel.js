
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import {getModels} from "../data"


export default function MenuModel() {
    // render() {
    // const match = useRouteMatch()
    let models = getModels()
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}>
          {models.map((model) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/models/${model.number}`}
              key={model.number}
            >
              {`model${model.number}`}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    )
    {/* <ul>
          <li>
            <Link to={`${match.url}/model1`}>model1</Link>
          </li>
          <li>
            <Link to={`${match.url}/model2`}>model2</Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:modelId`}>
            <Model />
          </Route>
          {/* <Route path={path}>
            <h3>модель 2</h3>
          </Route> */}
    // </Switch> */}
  
  
  
    // <div>
    //   {models.map((value, index) =>{
    //     return <div key={index}><LinkModel label={value} /></div>
    //   })}
    // </div>
    //  }
  }