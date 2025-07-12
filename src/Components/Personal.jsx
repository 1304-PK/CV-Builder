function GenForm(p) {
    return (
        <div>
            <label htmlFor={p.id}>{p.label}</label>
            <input type={p.type} id={p.id} value={p.value} onChange={p.onChange} placeholder={p.placeholder} />
        </div>
    )
}

function Personal({ personalForm, updatePersonalForm }) {
    return (
        <div>
            <form className="form">
                <GenForm id="name" label="Name" type="text" value={personalForm.name} onChange={updatePersonalForm} placeholder={'John Doe'} />
                <GenForm id="location" label="Location" type="text" value={personalForm.location} onChange={updatePersonalForm} placeholder={'Seattle, USA'} />
                <GenForm id="phone" label="Phone" type="number" value={personalForm.phone} onChange={updatePersonalForm} placeholder={'(+44)9328932219'} />
                <GenForm id="email" label="Email ID" type="text" value={personalForm.email} onChange={updatePersonalForm} placeholder={'johndoe@gmail.com'} />
            </form>
        </div>
    )
}

export default Personal