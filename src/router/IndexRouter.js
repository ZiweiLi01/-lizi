import React from 'react'
import { HashRouter,Navigate,Route,Routes } from 'react-router-dom'
import Login from '../views/Login/Login'
import NewsSandBox from '../views/NewsSandBox/NewsSandBox'


export default function IndexRouter() {
  
  return (
    <HashRouter>
    <Routes>
      <Route path="/login" element={<Login></Login>}/>
      {/* <Route path="/" element={(()=>{
       
        
        localStorage.getItem("token")?
        <NewsSandBox></NewsSandBox>:
        
        <NewsSandBox></NewsSandBox>
      
      })()}/> */}
      <Route path="/*" element={
        localStorage.getItem("token")?
        <NewsSandBox></NewsSandBox>:<Navigate to="/login"></Navigate>
      }></Route>

    </Routes>
    </HashRouter>
  )
}
