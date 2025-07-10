function PreviewCV({ personalForm, educationForm, projectForm, skillForm, workForm }) {
    return (
        <div className="preview-cv">
            <div id="personal-info">
                <h1>{personalForm.name || 'Harry James Potter'}</h1>
                <p>{personalForm.location || 'Scottish Highlands'} | {personalForm.phone || '+44 (0) 207-946-0958'} | {personalForm.email || 'harrypotter@hogwarts.edu'}</p>
            </div>
            <div id="education-info">
                <h4>EDUCATION</h4>
                <div className="split-horizontally">
                    <div>
                        <p><span>{educationForm.institution || 'Hogwarts School of Witchcraft and Wizardry'} , {educationForm.location || 'Highlands, Scotland'}</span></p>
                        <p>{educationForm.degree || 'Bachelor of Wizardry, Defense Against the Dark Arts'}</p>
                    </div>
                    <div className="right-section">
                        <p><span>{educationForm.start_year || 'September 1991'}-{educationForm.end_year || 'October 1998'}</span></p>
                        <p>CGPA: {educationForm.cgpa || '8.4'}</p>
                    </div>
                </div>
            </div>
            <div id="project-info">
                <h4>PROJECTS</h4>
                <div className="split-horizontally">
                    <p><span>{projectForm.name || "Marauder's Map Enhancement"}</span> | {projectForm.tech_stack || 'Revelio, Mischief Managed, Charms, Advanced Mapmaking'}</p>
                    <p><span>{projectForm.date || "May 1996"}</span></p>
                </div>
                <p>{projectForm.description || "Improved the legendary Marauder’s Map with real-time location tracking, ghost detection, and unauthorized intruder alerts. Integrated magical encryption to prevent misuse."}</p>
            </div>
            <div id="work-info">
                <h4>EXPERIENCE</h4>
                <div className="split-horizontally">
                    <div>
                        <p><span>{workForm.organization || 'Department of Magical Accidents and Catastrophes'}</span></p>
                        <p>{workForm.job_title || 'Auror Trainee'}</p>
                    </div>
                    <div className="right-section">
                        <p><span>{workForm.start_date || 'June 2024'} - {workForm.end_date || 'May 2025'}</span></p>
                        <p>{workForm.location || 'Ministry of Magic'}</p>
                    </div>
                </div>
                <p>{workForm.description || `• Led specialized task force in neutralizing 15+ dark magic incidents across Greater London area
                    • Collaborated with Senior Aurors to develop new protective ward systems, improving department safety protocols by 40%
                    • Mentored 8 junior wizards in advanced defensive spell casting and emergency response procedures`}</p>
            </div>
            <div id="skill-info">
                <h4>TECHNICAL SKILLS</h4>
                <p><span>{skillForm.title || 'Magical Skills'}:</span> {skillForm.skill || 'Advanced Patronus Casting, Parseltongue Communication, Broomstick Flight Proficiency, Time-Turner Navigation'}</p>
            </div>
        </div>
    )
}

export default PreviewCV