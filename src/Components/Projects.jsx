function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Project({projectForm, updateProjectForm}){
    return(
        <div className="form">
        <GenForm id="name" label="Project Name" type="text" value={projectForm.name} onChange={updateProjectForm} />
        <GenForm id="tech_stack" label="Tech Stack" type="text" value={projectForm.tech_stack} onChange={updateProjectForm} />
        <GenForm id="date" label="Completion Date" type="text" value={projectForm.date} onChange={updateProjectForm} />
        <GenForm id="description" label="Description" type="text" value={projectForm.description} onChange={updateProjectForm} />
        </div>
    )
}

export default Project