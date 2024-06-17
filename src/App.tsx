import './App.scss'
import { HeroImage } from './components/HeroImage/HeroImage'
import { KeywordBar } from './components/KeywordBar/KeywordBar'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <KeywordBar/>
    </div>
  )
}

export default App
