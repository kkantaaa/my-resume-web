import './App.css'

import GreetingProfile from '../section/greetingprofile'
import ExperienceSection from '../section/experienceSection'
import SkillsSection from '../section/skillSection'
import EducationSection from '../section/educationSection'
import CertificationsSection from '../section/certificationSection'

function App() {

  return (
    <div className='myResume '>
      <div className='header'>My Profile</div>
      <GreetingProfile/>
      <ExperienceSection/>
      <SkillsSection/> 
      <div className='portfolio'></div>
      <EducationSection/>
      <CertificationsSection/>
    </div>
  )
}

export default App
