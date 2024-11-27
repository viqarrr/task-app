import { useState } from "react"
import Header from "./components/Header" 
import Sidebar from "./components/Sidebar"

function App() {
  const [light, setLight] = useState(true)
  const toggleLight = () => setLight(!light)
  
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleShowSidebar = () => setShowSidebar(!showSidebar)
  return (
    <div className={`${light ? 'bg-gray-50' : 'dark bg-neutral-900'} h-screen`}>
      <Header light={light} toggleLight={toggleLight} toggleShowSidebar={toggleShowSidebar}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>      
    </div>
  )
}

export default App
