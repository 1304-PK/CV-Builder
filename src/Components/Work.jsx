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
    <div>
        <form>
            <GenForm id="work" label="Work Experience" type="text" value={workForm.work} onChange={updateWorkForm} />
        </form>
    </div>
    )
}

export default Work