function PreviewCV({personalForm, educationForm, projectForm, skillForm, workForm}){
    return(
        <div className="preview-cv">
            <div id="personal-info">
                <h1>{personalForm.name}</h1>
                <p>{personalForm.location}|{personalForm.phone}|{personalForm.email}</p>
            </div>
            <div id="education-info">
                <h1>Education</h1>
                <hr />
                <div>
                    <p>{educationForm.institution},{educationForm.location}</p>
                    <p>{educationForm.degree}</p>
                </div>
                <div>
                    <p>{educationForm.start_year}-{educationForm.end_year}</p>
                    <p>CGPA: {educationForm.cgpa}</p>
                </div>
            </div>
            <div id="project-info">
                <h1>Projects</h1>
                <hr />
                <div>
                <p>{projectForm.name} | {projectForm.tech_stack}</p>
                <p>{projectForm.date}</p>
                </div>
                <p>{projectForm.description}</p>
            </div>
            <div id="work-info">
                <h1>Experience</h1>
                <hr />
                <div>
                    <p>{workForm.organization}</p>
                    <p>{workForm.job_title}</p>
                </div>
                <div>
                    <p>{workForm.start_date} - {workForm.end_date}</p>
                    <p>{workForm.location}</p>
                </div>
                <p>{workForm.description}</p>
            </div>
            <div id="skill-info">
                <h1>Technical Skills</h1>
                <hr />
                <p>{skillForm.title}: {skillForm.skill}</p>
            </div>
        </div>
    )
}

export default PreviewCV