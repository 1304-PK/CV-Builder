import { useState } from 'react'
import userImg from './assets/user.png'
import eduImg from './assets/graduate.png'
import workImg from './assets/building.png'
import skillImg from './assets/settings.png'
import Personal from './Components/Personal.jsx'
import Education from './Components/Education.jsx'
import Skill from './Components/Skill.jsx'
import Work from './Components/Work.jsx'
import PreviewCV from './Components/PreviewCV.jsx'


function App(){
  const [personalForm, setPersonalForm] = useState({})
  const updatePersonalForm = (e) => {
    setPersonalForm({
      ...personalForm, [e.target.id]: e.target.value
    })
  }
  const [educationForm, setEducationForm] = useState({})
  const updateEducationForm = (e) => {
    console.log('wow')
    setEducationForm({
      ...educationForm, [e.target.id]: e.target.value
    })
  }
  const [skillform, setSkillForm] = useState({skill:''})
  const updateSkillForm = (e) => {
    setSkillForm({
      ...skillform, [e.target.id]: e.target.value
    })
  }
  const [workForm, setWorkForm] = useState({})
  const updateWorkForm = (e) => {
    setWorkForm({
      ...workForm, [e.target.id]: e.target.value
    })
  }

  const [form, renderForm] = useState('personal')

  const icons = [
    {icon: userImg, form:'personal'},
    {icon: eduImg, form: 'education'},
    {icon: skillImg, form:'skill'},
    {icon: workImg, form:'work'}
  ]
  

  
  return(
    <>
    {icons.map((icon, index) => {
      return(
        <button key={index} onClick={() => {renderForm(icon.form)}}><img src={icon.icon} alt="" /></button>
      )
    })}
    {form === 'personal' && <Personal personalForm={personalForm} updatePersonalForm={updatePersonalForm}/>}
    {form === 'education' && <Education educationForm={educationForm} updateEducationForm={updateEducationForm}/>}
    {form === 'skill' && <Skill skillForm={skillform} updateSkillForm={updateSkillForm}/>}
    {form === 'work' && <Work workForm={workForm} updateWorkForm={updateWorkForm}/>}
    <PreviewCV personalForm={personalForm} educationForm={educationForm}/>
    </>
  )
}

export default App