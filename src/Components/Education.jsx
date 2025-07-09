function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Education({educationForm, updateEducationForm}){
    return(
    <div>
        <form>
            <GenForm id="institution" label="Institution" type="text" value={educationForm.institution} onChange={updateEducationForm} />
            <GenForm id="degree" label="Degree" type="text" value={educationForm.degree} onChange={updateEducationForm} />
            <GenForm id="location" label="Location" type="text" value={educationForm.location} onChange={updateEducationForm} />
            <GenForm id="start_year" label="Start Year" type="number" value={educationForm.start_year} onChange={updateEducationForm} />
            <GenForm id="end_year" label="End Year" type="number" value={educationForm.end_year} onChange={updateEducationForm} />
            <GenForm id="description" label="Description(if any)" type="text" value={educationForm.description} onChange={updateEducationForm} />
        </form>
    </div>
    )
}

export default Education