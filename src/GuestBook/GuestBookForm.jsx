export default function GuestBookForm({ref, name, setName}){
    return(
        <>
            <label htmlFor="name">name</label>
                <input ref={ref}  type="text" name="name" value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <br />
        </>
    )
}