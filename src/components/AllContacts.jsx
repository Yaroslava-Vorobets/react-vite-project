


export default function AllContacts({ contacts, onDelete, showDeleteButton }) {
    return (
        <>
            <ul>              
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        {name}: {number}
                        {showDeleteButton && (
                            <button onClick={() => onDelete(id)} type="button">Delete</button>
                        )}
                    </li>                  
                ))} 
            </ul>
        </>
    );
}