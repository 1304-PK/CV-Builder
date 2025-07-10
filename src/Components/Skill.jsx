function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Skill({skillForm, updateSkillForm}){
    return(
    <div>
        <form className="form">
            <GenForm id="title" label="Title" type="text" value={skillForm.title} onChange={updateSkillForm} />
            <GenForm id="skill" label="Skills" type="text" value={skillForm.skill} onChange={updateSkillForm} />
        </form>
    </div>
    )
}

export default Skill