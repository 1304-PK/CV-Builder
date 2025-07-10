function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} />
        </div>
    )
}

function Education({ educationForm, updateEducationForm }) {
    return (
        <div>
            <form className="form">
                <GenForm id="institution" label="Institution" type="text" value={educationForm.institution} onChange={updateEducationForm} />
                <GenForm id="location" label="Location" type="text" value={educationForm.location} onChange={updateEducationForm} />
                <GenForm id="degree" label="Degree" type="text" value={educationForm.degree} onChange={updateEducationForm} />
                <GenForm id="start_year" label="Start Year" type="text" value={educationForm.start_year} onChange={updateEducationForm} />
                <GenForm id="end_year" label="End Year" type="text" value={educationForm.end_year} onChange={updateEducationForm} />
                <GenForm id="cgpa" label="CGPA" type="number" value={educationForm.cgpa} onChange={updateEducationForm} />
            </form>
        </div>
    )
}

export default Education