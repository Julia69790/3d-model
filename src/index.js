import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
// import "react-colorful/dist/index.css"
import App from "./App"
import MenuModel from "./route/menuModel"
import Statistic from "./route/statistic"
import ChangeModel from "./route/changeModel"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="models" element={<MenuModel />} >
                    <Route path=":modelId" element={<ChangeModel />} />
                </Route>
                <Route path="statistic" element={<Statistic />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>

)