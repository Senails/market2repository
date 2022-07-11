import React from "react";
import { Route , Routes } from 'react-router-dom';
//pages
import Main from "./pages/main/Main.jsx";
import Blackmarket from "./pages/blackmarket/Blackmarket.jsx";
import Intercity from "./pages/intercity/Intercity.jsx";
import Nopage from "./pages/components/nopage/Nopage.jsx";

function App() {
  return <Routes>
  <Route path="/"element={<Main/>}/>
  <Route path="/blackmarket" element={<Blackmarket/>}/>
  <Route path="/intercity" element={ <Intercity/>}/>
  <Route path="*" element={ <Nopage /> }/>
</Routes>
}

export default App;
