import { useState } from 'react'
import { jsPDF } from 'jspdf'
import './App.css'
import userImg from './assets/user.png'
import eduImg from './assets/graduate.png'
import workImg from './assets/building.png'
import skillImg from './assets/settings.png'
import projectImg from './assets/project.png'
import Personal from './Components/Personal.jsx'
import Education from './Components/Education.jsx'
import Skill from './Components/Skill.jsx'
import Work from './Components/Work.jsx'
import Project from './Components/Projects.jsx'
import PreviewCV from './Components/PreviewCV.jsx'


function App() {
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
  const [skillForm, setSkillForm] = useState({ skill: '' })
  const updateSkillForm = (e) => {
    setSkillForm({
      ...skillForm, [e.target.id]: e.target.value
    })
  }
  const [workForm, setWorkForm] = useState({})
  const updateWorkForm = (e) => {
    setWorkForm({
      ...workForm, [e.target.id]: e.target.value
    })
  }
  const [projectForm, setProjectForm] = useState({})
  const updateProjectForm = (e) => {
    setProjectForm({
      ...projectForm, [e.target.id]: e.target.value
    })
  }

  const [form, renderForm] = useState('personal')

  const icons = [
    { icon: userImg, form: 'personal' },
    { icon: eduImg, form: 'education' },
    { icon: skillImg, form: 'skill' },
    { icon: workImg, form: 'work' },
    { icon: projectImg, form: 'project' }
  ]

  const [skills, setSkills] = useState([{ title: 'Magical Skills', skill: "Advanced Patronus Casting, Pareseltongue Communication" }])
  const addSkill = () => {
    setSkills([...skills, skillForm])
    console.log(skills)
  }
  const [projects, setProjects] = useState([{ name: "Marauder's Map Enhancement", tech_stack: "Revelio, Mischief Managed, Charms, Advanced Mapmaking", date: "May 1996", description: "Improved the legendary Marauder's Map with real-time location tracking, ghost detection, and unauthorized intruder alerts. Integrated magical encryption to prevent misuse." }])
  const addProject = () => {
    setProjects([...projects, projectForm])
  }
  const [experiences, setExperiences] = useState([{
    organization: 'Department of Magical Accidents and Catastrophes', job_title: 'Auror Trainee', start_date: 'June 2024', end_date: 'May 2025', location: 'Ministry of Magic', description: `• Led specialized task force in neutralizing 15+ dark magic incidents across Greater London area
  • Collaborated with Senior Aurors to develop new protective ward systems, improving department safety protocols by 40%
  • Mentored 8 junior wizards in advanced defensive spell casting and emergency response procedures`}])
  const addExperience = () => {
    setExperiences([...experiences, workForm])
  }
  return (
    <>
      <header>
        <h1>Resume Builder</h1>
        <p>Create a professional resume in minutes</p>
      </header>
      <div className='main-container'>
        <div className='form-section'>
          <div className='nav-buttons-div'>
            {icons.map((icon, index) => {
              return (
                <button key={index} className='form-nav-button' onClick={() => { renderForm(icon.form) }}><img src={icon.icon} alt="" /></button>
              )
            })}
          </div>
          {form === 'personal' && <Personal personalForm={personalForm} updatePersonalForm={updatePersonalForm} />}
          {form === 'education' && <Education educationForm={educationForm} updateEducationForm={updateEducationForm} />}
          {form === 'skill' && <Skill skillForm={skillForm} updateSkillForm={updateSkillForm} addSkill={addSkill} skills={skills} removeSkill={setSkills} />}
          {form === 'work' && <Work workForm={workForm} updateWorkForm={updateWorkForm} addExperience={addExperience} experiences={experiences} removeExperience={setExperiences} />}
          {form === 'project' && <Project projectForm={projectForm} updateProjectForm={updateProjectForm} addProject={addProject} projects={projects} removeProject={setProjects} />}
        </div>
        <PreviewCV
          personalForm={personalForm}
          educationForm={educationForm}
          projects={projects}
          skills={skills}
          experiences={experiences} />
      </div>
    </>
  )
}

export default App