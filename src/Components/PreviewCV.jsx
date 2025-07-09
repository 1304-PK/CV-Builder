function PreviewCV({personalForm, educationForm}){
    return(
        <div>
            <div id="personal-info">
                <h1>{personalForm.name}</h1>
                <p>{personalForm.location}|{personalForm.phone}|{personalForm.email}</p>
            </div>
            <div id="education-info">
                <div>
                    <p>{educationForm.institution}|{educationForm.location}</p>
                    <p>{educationForm.degree}</p>
                </div>
                <div>
                    <p>{educationForm.start_year}-{educationForm.end_year}</p>
                </div>
                <p>{educationForm.description}</p>
            </div>  
        </div>
    )
}

export default PreviewCV