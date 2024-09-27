import { useState } from 'react'
import './App.css'
import FarmarciaNavBar from './components/FarmarciaNavBar'
import BodyFarmarcia from './components/BodyFarmarcia'
import Rodape from './components/Rodape'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <FarmarciaNavBar/>

<BodyFarmarcia/>
<Rodape/>




    </>
  )
}
export default App