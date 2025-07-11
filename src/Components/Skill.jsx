function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Skill({skillForm, updateSkillForm, addSkill, skills, removeSkill}){
    return(
    <div>
        <div className="info-list">
            {skills.map((s, i) => {
                return(
                    <div className="info-list-content">
                        <p>{s.title}</p>
                        <button onClick={() => {
                            const arr = skills.filter(item => item.title!==s.title)
                            removeSkill(arr)
                        }}>❌</button>
                    </div>
                )
            })}
        </div>
        <form className="form">
            <GenForm id="title" label="Title" type="text" value={skillForm.title} onChange={updateSkillForm} />
            <GenForm id="skill" label="Skills" type="text" value={skillForm.skill} onChange={updateSkillForm} />
        </form>
        <button className='add-button' onClick={addSkill}>Add</button>
    </div>
    )
}

export default Skill