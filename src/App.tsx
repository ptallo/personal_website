import './App.scss'
import { HeroImage } from './components/HeroImage/HeroImage'
import { KeywordBar } from './components/KeywordBar/KeywordBar'
import { Navbar } from './components/Navbar/Navbar'
import { WebDevelopmentSection } from './components/WebDevelopmentSection/WebDevelopmentSection'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <KeywordBar/>
      <WebDevelopmentSection/>
    </div>
  )
}

export default App
