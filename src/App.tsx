import './App.scss'
import { ContactMe } from './components/ContactMe/ContactMe'
import { EmploymentHistory } from './components/EmploymentHistory/EmploymentHistory'
import { HeroImage } from './components/HeroImage/HeroImage'
import { KeywordBar } from './components/KeywordBar/KeywordBar'
import { Navbar } from './components/Navbar/Navbar'
import { SkillsSection } from './components/SkillsSection/SkillsSection'

function App() {

  return (
    <div>
      <Navbar />
      <HeroImage />
      <KeywordBar />
      <SkillsSection />
      <EmploymentHistory />
      <ContactMe />
    </div>
  )
}

export default App
