function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} />
        </div>
    )
}

function Project({ projectForm, updateProjectForm, addProject, projects, removeProject }) {
    return (
        <div>
            <div className="info-list">
                {projects.map(s => {
                    return (
                        <div className="info-list-content">
                            <p>{s.name}</p>
                            <button onClick={() => {
                                const arr = projects.filter(item => item.name !== s.name)
                                removeProject(arr)
                            }}>❌</button>
                        </div>
                    )
                })}
            </div>
            <form className="form">
                <GenForm id="name" label="Project Name" type="text" value={projectForm.name} onChange={updateProjectForm} />
                <GenForm id="tech_stack" label="Tech Stack" type="text" value={projectForm.tech_stack} onChange={updateProjectForm} />
                <GenForm id="date" label="Completion Date" type="text" value={projectForm.date} onChange={updateProjectForm} />
                <GenForm id="description" label="Description" type="text" value={projectForm.description} onChange={updateProjectForm} />
            </form>
            <button className='add-button' onClick={addProject}>Add</button>
        </div>
    )
}

export default Project