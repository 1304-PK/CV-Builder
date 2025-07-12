function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} placeholder={p.placeholder}/>
        </div>
    )
}

function Education({ educationForm, updateEducationForm }) {
    return (
        <div>
            <form className="form">
                <GenForm id="institution" label="Institution" type="text" value={educationForm.institution} onChange={updateEducationForm} placeholder={'e.g. Harvard University'}/>
                <GenForm id="location" label="Location" type="text" value={educationForm.location} onChange={updateEducationForm} placeholder={'e.g. Cambridge'}/>
                <GenForm id="degree" label="Degree" type="text" value={educationForm.degree} onChange={updateEducationForm} placeholder={'e.g. Bachelor of Arts'}/>
                <GenForm id="start_year" label="Start Year" type="text" value={educationForm.start_year} onChange={updateEducationForm} placeholder={'e.g. June 2020'}/>
                <GenForm id="end_year" label="End Year" type="text" value={educationForm.end_year} onChange={updateEducationForm} placeholder={'e.g. April 2024'}/>
                <GenForm id="cgpa" label="CGPA" type="number" value={educationForm.cgpa} onChange={updateEducationForm} placeholder={'e.g. 8.7'}/>
            </form>
        </div>
    )
}

export default Education