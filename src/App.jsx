import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [Color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{background:Color}}>
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
             onClick={()=>setColor("red")}
             className='outline-none px-4
             rounded-full text-white'
             style={{backgroundColor:"red"}}>red</button>
          <button 
             onClick={()=>setColor("yellow")}
             className='outline-none px-4
             rounded-full text-white'
             style={{backgroundColor:"yellow"}}>yellow</button> 
          <button 
             onClick={()=>setColor("green")}
             className='outline-none px-4
             rounded-full text-white'
             style={{backgroundColor:"green"}}>green</button>
          <button
             onClick={()=>setColor("blue")}
             className='outline-none px-4
             rounded-full text-white'
             style={{backgroundColor:"blue"}}>blue</button>
          <button 
             onClick={()=>setColor("brown")}
             className='outline-none px-4
             rounded-full text-white'
             style={{backgroundColor:"brown"}}>brown</button>
          </div>
         </div>
    </div>
  )
}

export default App
