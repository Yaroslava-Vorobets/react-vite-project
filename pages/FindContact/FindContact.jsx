export default function FindContact({ filter, onChange }) {
    return (
        <>
            <h1>Your contacts</h1>
            <label>Find the contact by name</label>
            <input 
                type="text"
                name="filter"
                placeholder="Search contact"
                onChange={onChange}
                value={filter}
            />
        </>
    );
}