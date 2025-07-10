function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Work({workForm, updateWorkForm}){
    return(
    <div className="form">
        <form>
            <GenForm id="organization" label="Organization:" type="text" value={workForm.oganization} onChange={updateWorkForm} />
            <GenForm id="location" label="Location:" type="text" value={workForm.location} onChange={updateWorkForm} />
            <GenForm id="job_title" label="Job Title:" type="text" value={workForm.job_title} onChange={updateWorkForm} />
            <GenForm id="start_date" label="Start Date:" type="text" value={workForm.start_date} onChange={updateWorkForm} />
            <GenForm id="end_date" label="End Date:" type="text" value={workForm.end_date} onChange={updateWorkForm} />
            <GenForm id="description" label="Responsibilities/Achievements:" type="text" value={workForm.description} onChange={updateWorkForm} />
        </form>
    </div>
    )
}

export default Work