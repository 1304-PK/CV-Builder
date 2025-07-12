function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} placeholder={p.placeholder} required />
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
            <form className="form" onSubmit={(e) => { e.preventDefault(); addProject() }}>
                <GenForm id="name" label="Project Name" type="text" value={projectForm.name} onChange={updateProjectForm} placeholder={'Professional Portfolio'}/>
                <GenForm id="tech_stack" label="Tech Stack" type="text" value={projectForm.tech_stack} onChange={updateProjectForm}  placeholder={'NextJS, Tailwind, CSS, TypeScript'}/>
                <GenForm id="date" label="Completion Date" type="text" value={projectForm.date} onChange={updateProjectForm}  placeholder={'January 2025'}/>
                <GenForm id="description" label="Description" type="text" value={projectForm.description} onChange={updateProjectForm}  placeholder={'Portfolio that showcases my skills, projects and coding profiles'}/>
                <button className='add-button'>Add</button>
            </form>

        </div>
    )
}

export default Project