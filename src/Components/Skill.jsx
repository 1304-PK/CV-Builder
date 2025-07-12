function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} placeholder={p.placeholder} required />
        </div>
    )
}

function Skill({ skillForm, updateSkillForm, addSkill, skills, removeSkill }) {
    return (
        <div>
            <div className="info-list">
                {skills.map((s, i) => {
                    return (
                        <div className="info-list-content">
                            <p>{s.title}</p>
                            <button onClick={() => {
                                const arr = skills.filter(item => item.title !== s.title)
                                removeSkill(arr)
                            }}>❌</button>
                        </div>
                    )
                })}
            </div>
            <form className="form" onSubmit={(e) => { e.preventDefault(); addSkill() }}>
                <GenForm id="title" label="Title" type="text" value={skillForm.title} onChange={updateSkillForm} placeholder={'Languages'}/>
                <GenForm id="skill" label="Skills" type="text" value={skillForm.skill} onChange={updateSkillForm} placeholder={'JavaScript, GoLang, Python, Java'}/>
                <button className='add-button' type="submit">Add</button>
            </form>

        </div>
    )
}

export default Skill