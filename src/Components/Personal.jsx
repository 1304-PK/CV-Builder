function GenForm(p){
    return(
        <div>
        <label htmlFor={p.id}>{p.label}</label>
        <input type={p.type} id={p.id} value={p.value} onChange={p.onChange}/>
        </div>
    )
}

function Personal({personalForm, updatePersonalForm}){
    return(
    <div>
        <form>
            <GenForm id="name" label="Name" type="text" value={personalForm.name} onChange={updatePersonalForm} />
            <GenForm id="location" label="Location" type="text" value={personalForm.location} onChange={updatePersonalForm} />
            <GenForm id="phone" label="Phone" type="number" value={personalForm.phone} onChange={updatePersonalForm} />
            <GenForm id="email" label="Email ID" type="text" value={personalForm.email} onChange={updatePersonalForm} />
        </form>
    </div>
    )
}

export default Personal