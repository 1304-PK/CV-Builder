import { useState } from 'react'
import userImg from './assets/user.png'
import eduImg from './assets/graduate.png'
import workImg from './assets/building.png'
import skillImg from './assets/settings.png'
import Personal from './Components/Personal.jsx'
import Education from './Components/Education.jsx'
import PreviewCV from './Components/PreviewCV.jsx'


function App(){
  const [personalForm, setPersonalForm] = useState({
    name: '',
    location: '',
    phone: '',
    email: ''
  })
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
  const [render, setRender] = useState()
  const icons = [
    {icon: userImg, render:<Personal personalForm={personalForm} updatePersonalForm={updatePersonalForm}/>},
    {icon: eduImg, render: <Education educationForm={educationForm} updateEducationForm={updateEducationForm} />},
    {icon: skillImg, render:<Personal personalForm={personalForm} updatePersonalForm={updatePersonalForm}/>},
    {icon: workImg, render:<Personal personalForm={personalForm} updatePersonalForm={updatePersonalForm}/>}
  ]
  

  
  return(
    <>
    {icons.map((icon, index) => {
      return(
        <button key={index} onClick={() => {setRender(icon.render)}}><img src={icon.icon} alt="" /></button>
      )
    })}
    {render}
    <PreviewCV personalForm={personalForm} educationForm={educationForm}/>
    </>
  )
}

export default App