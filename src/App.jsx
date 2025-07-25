
import './App.css'
import Card from "./component/Card.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./component/Dashboard.jsx";

function App() {

  const loginTitle = "Please Login";

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Card title={loginTitle}/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
